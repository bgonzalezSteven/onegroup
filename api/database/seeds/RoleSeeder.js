'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Role = use("App/Models/Role")
const roleData = [
  {
    name: 'Súper Administrador',
    slug: 'app.superAdmin',
    description: 'Adminitrador General',
    permissions: [
      {
        slug: 'configuration',
        name: 'Configuración',
      }
    ]
  },
  {
    name: 'Cliente',
    slug: 'app.client',
    description: 'Modulo de Cliente',
    permissions: [
      {
        slug: 'configuration',
        name: 'Configuración',
      },
      {
        slug: 'client.list',
        name: 'Lista de Productos'
      }
    ]
  },
  {
    name: 'Vendedor',
    slug: 'app.store',
    description: 'Modulo de Vendedor',
    permissions: [
      {
        slug: 'configuration',
        name: 'Configuración',
      },
      {
        slug: 'product.list',
        name: 'Lista de Productos'
      },
      {
        slug: 'product.product',
        name: 'Productos'
      }
    ]
  },
];

class RoleSeeder {
  async run () {
    for (let i in roleData) {
      let role = await Role.findBy('slug', roleData[i].slug)
      if (!role) {
        await Role.create(roleData[i])
      } else {
        role.name = roleData[i].name
        role.slug = roleData[i].slug
        role.description = roleData[i].description
        role.permissions = roleData[i].permissions
        await role.save()
      }
    }
    console.log('Finished Role')
  }
}

module.exports = RoleSeeder
