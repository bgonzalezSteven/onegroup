'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Product = use('App/Models/Product')
const Customer = use('App/Models/Customer')
const Helpers = use('Helpers')
const Env = use('Env')
/**
 * Resourceful controller for interacting with products
 */
class ProductController {
  /**
   * Show a list of all products.
   * GET products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view, auth }) {
    const UserLoggout = (await auth.getUser()).toJSON()
    const customer = (await Customer.with('product').where('email', UserLoggout.email).first()).toJSON()
    response.send(customer.product)
  }

  /**
   * Render a form to be used for creating a new product.
   * GET products/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  async getAllProduct ({ request, response, view }) {
    const infoProduct = (await Product.all()).toJSON()
    for (let i in infoProduct) {
      let temp = (await Customer.findBy('_id', infoProduct[i].Customer_id)).name
      infoProduct[i].nameCustomer = temp
    }
    response.send(infoProduct)
  }

  /**
   * Create/save a new product.
   * POST products
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const UserLoggout = (await auth.getUser()).toJSON()
    const customer = (await Customer.findBy('email', UserLoggout.email))._id
    const documents = request.file('file', {
      size: '10mb'
    })
    const datess = (request.post()) //Datos que traigo del Front)
    let info = JSON.parse(datess.dates) // JSETEO la información para que me quede no más que los datos que necesito
    info.Customer_id = customer // Le agrego el ID del logueado para saber quien carga este producto
    const dir = 'public/products'
    // Si hay un documento cargado guardo ese betax
    if (documents) {
      const FileName = `${customer}_Producto_${info.name.replace(' ', '_')}_${documents.extname}`
      await documents.move(dir, {
        name: FileName,
        overwrite: true
      })
      if (!documents.moved()) {
        return response.status(422).send({
          status: true,
          message: 'Ocurrio un error al cargar los archivos',
          icon: 'warning',
          color: 'negative'
        })
      } else {
        info.photo = FileName
        await this.storeFileDebts(info)
      }
    } else {
      await this.storeFileDebts(info)
      return (true)
    }
  }
  async storeFileDebts (dates) {
    if (dates._id) {
      return await Product.where('_id', dates._id).update(dates)
    } else {
      return await Product.create(dates)
    }
  }

  /**
   * Display a single product.
   * GET products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    response.send(await Product.where('_id', params.id).first())
  }
  async getFile ({ params, response }) {
    const fileName = params.filename
    response.download(Helpers.appRoot(`public/products/${fileName}`))
  }

  /**
   * Render a form to update an existing product.
   * GET products/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update product details.
   * PUT or PATCH products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a product with id.
   * DELETE products/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    response.send(await Product.where('_id', params.id).delete())
  }
}

module.exports = ProductController
