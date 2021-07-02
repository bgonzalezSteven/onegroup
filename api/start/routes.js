'use strict'



/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.get('/', () => {
  return {
    greeting: 'Hello world in JSON'
  }
})

const addPrefixToGroup = group => {
  // Grupo para rutas con prefijo /api/
  group.prefix("api");

  return group;
};


addPrefixToGroup(
  Route.group(() => {
    // Insertar rutas sin protección de autenticación aquí
    Route.post("login", "UserController.login");
    Route.post("register", "UserController.store");
    Route.get('file/:filename', 'ProductController.getFile')
  })
);

addPrefixToGroup(
  Route.group(() => {
    // Insertar rutas con protección de autenticación aquí

    // Rutas de Inicio de Sesion y cambio del modo Oscuro //
    Route.get("InfoLog", "UserController.info")
    Route.put("changeModel", "UserController.update")
    // Rutas de Inicio de Sesion y cambio del modo Oscuro //


    // Rutas para los productos //
    Route.post('products', 'ProductController.store')
    Route.get('product', 'ProductController.index')
    Route.delete('product/:id', 'ProductController.destroy')
    Route.get('product/:id', 'ProductController.show')
    // Rutas para los productos //

    // Vista para el cliente //
    Route.get('productList', 'ProductController.getAllProduct')
    // Vista para el cliente //
  }).middleware("auth")
);
