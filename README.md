<h2>Express-graphql-example</h2>

<h4><strong>#Installation</strong></h4>
* Clonar el repositorio. <br>
* Correr comando "npm install" para instalar los paquetes necesarios para correr la API <br>
* Iniciar server en modo desarrollo con "npm run dev" <br>
* El server va a estar escuchando por defecto la url: http://localhost:3000/api <br>
<hr>
<h4>Queries</h4>
 
 * Para obtener todos los usuarios de la DB: <br>
 
 {
    getUsers {
      _id,
      firstName,
      lastName,
      age
      }
   }
   
   * Para obtener un usuario buscado por nombre: <br>
  {
  getOneUser(firstName: <string name>){
  firstName,
    lastName,
    age
}}

 * Para insertar un nuevo usuario en la DB: <br>
 
 mutation {
  createUser(input:{
    firstName: <string name>,
    lastName: <string last name>,
    age: <int age>
  }){
    firstName,
    lastName,
    age
  }
}

 * Para modificar un usuario en la DB: <br>
 
 mutation {
  updateUser(id: <string id> , input: {
    firstName: <string name>,
    lastName: <string last name>,
    age: <int age>
  }){
    firstName,
    lastName,
    age
  }
}
<br>
<br>
La base de datos está en MongoDB Atlas. Los datos de conexión se encuentran en el archivo .env (es una db de prueba, por eso los datos están públicos)

<hr>
<h4>Typescript vs Javascript</h4>
Javascript es un lenguaje de programación interpretado, debilmente tipado. Esto quiere decir que podemos realizar operaciones entre tipos de datos y no va a fallar.
Un ejemplo de esto es que podemos realizar la suma de un string y un número sin que exista problema. Esto nos dará un string concatenando ambos datos. Los errores son detectados en tiempo de ejecución.
Para declarar una variable no necesitamos declarar el tipo de dato que guardaremos.
Con Typescript esto cambia, ya que este es un lenguaje fuertemente tipado. Debemos indicar el tipo de dato que vamos a guardar en cada variable.
Tenemos la opción de crear clases, clases abstractas, valores estaticos.
<hr>
<h4>Promises</h4>
Las promesas son objetos que devuelve una función asíncrona. Es un código que pasa a la cola de tareas haciendo que el flujo de la ejecución no sea interrumpida por las peticiones que pueden demorar tiempo en retornar una respuesta.
Quiere decir que si tenemos un código que solicita datos a una DB, esta puede demorar cierto tiempo, y puedo seguir ejecutando mi aplicación hasta tanto se resuelva la promesa de los datos que van a llegar del servidor. El resto de las operaciones pasan directo a la pila de ejecución. <br>
Los estados de una promise:<br>
Mientras se ejecuta -> <strong>pending.</strong> <br>
si se resuelve(resolve) -> <strong>fulfilled</strong><br>
si se rechaza(reject) -> <strong>rejected</strong><br><br>

new Promise(function(resolve, reject){<br>
    ... codigo<br>
})



