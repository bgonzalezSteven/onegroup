'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Customer extends Model {

  product () {
    return this.hasMany('App/Models/Product', '_id', 'Customer_id')
  }
}

module.exports = Customer
