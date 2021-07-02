'use strict'

const User = use("App/Models/User")
const Role = use("App/Models/Role")
const Customer = use("App/Models/Customer")
const { validate } = use("Validator")


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  async info ({ request, response, params, auth }) {
    let user = await auth.getUser()
    let userData = (await User.findBy('email', user.email)).toJSON()
    let roleIds =
    userData.roles.length > 0
      ? userData.roles.map(roleMap => {
        return roleMap.slug
      })
      : []
    const name = (await Role.whereIn('slug', roleIds).fetch()).toJSON()
    user.name = name[0].name
    response.send(user)
  }

  /**
   * Render a form to be used for creating a new user.
   * GET users/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    let requestAll = request.all()
    const validation = await validate(requestAll.information, User.fieldValidationRules())
    if (validation.fails()) {
      response.unprocessableEntity(validation.messages())
    } else {      
      if (((await User.where({email: requestAll.information.email}).fetch()).toJSON()).length) {
        response.status(422).unprocessableEntity([{
          status: 422
        }])
      } else {
        let body = requestAll.information
        body.type = requestAll.type === 1 ? 'Comerciant' : 'Client'
        const createInformation = await Customer.create(body)
        let createUser = {
          email: createInformation.email,
          password: createInformation.rif ? createInformation.rif : 'admin',
          darkMode: false,
          roles: [
            {
              slug: requestAll.type === 1 ? 'app.store' : 'app.client'
            }
          ]
        }
        const userCreate = await User.create(createUser)
        response.send(createUser)
      }
    }
  }

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing user.
   * GET users/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let body = request.all()
    response.send(await User.where('_id', body._id).update({
      'darkMode': !body.darkMode
    }))
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }

  async login ({ auth, request }) {

    const { email, password } = request.all();
    let usr = await auth.attempt(email, password)

    let userData = (await User.findBy('email', email)).toJSON()
    usr.email = userData.email
    let roleIds =
      userData.roles.length > 0
        ? userData.roles.map(roleMap => {
          return roleMap.slug
        })
        : []
    const name = (await Role.whereIn('slug', roleIds).fetch()).toJSON()
    let userRoles = (await Role.whereIn('slug', roleIds).fetch()).toJSON()
    usr.roles = userData.roles.map(roleMap => {
      return roleMap.slug
    })
    let permissions = []
    userRoles.forEach(element => {
      element.permissions.forEach(element2 => {
        permissions.push(element2.slug)
      })
    })
    usr.name = name[0].name
    usr.permissions = permissions
    return usr
  }
}

module.exports = UserController
