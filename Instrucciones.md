¡Bienvenido!

Para la estructura de esta pequeña aplicación se utilizo: 
  Para el Frontend:
    Quasar.js (Framework UI de Vuejs) para la estructura del proyecto
    Vuesax.js (Framework Css de Vuejs)
  Para el Api
    Adonis.js (Framework de Node.js) 
  Motor de BD
    MongoDB

Para su ejecución:

Debe de Tener en su pc:
  Quasar.js CLI
  Su instalacion:
    * Debe de contar con Node.js >= 10
    * yarn global add @quasar/cli
        # or
    * npm install -g @quasar/cli
      (Su documentación recomienda más el uso de yarn)
  
  Adonis.js
  Su instalación:
    * Debe contar con Node.js >= 8.0.0, npm >= 3.0.0, git
    * npm i -g @adonisjs/cli

  MongoDB
    *Su instalación varia segun el sistema operativo que se encuentre manejando

Una vez instaladas nuestras herramientas y procedemos a clonar el proyecto en nuestro pc
Dentro de client creamos un archivo env.js y pegamos el siguiente codigo dentro:

/*
* Archivo de ejemplo para el env.js. Cópialo y renómbralo a env.js
*/
export default {
  url: 'http://127.0.0.1:3333/',
  apiUrl: 'http://127.0.0.1:3333/api/'
}
//Este codigo nos permitirá conectarnos a nuestra api


Seguidamente:

1: Dentro de la carpeta client ejecutamos 'yarn install'
2: Dentro de la carpeta api ejecutamos 'npm install'
3: Ya con las dependencias instaladas, creamos nuestra clave unica de acceso con 'adonis key:generate' y corremos seeders 'adonis seed'
4: Ejecutamos servicio dentro de client con 'quasar dev'
5: Ejecutamos servicio dentro de api con 'adonis serve --dev'