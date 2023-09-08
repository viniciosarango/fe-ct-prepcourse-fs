/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:
   var gato = {
      nombre: nombre,
      edad: edad,
      //funcion
      meow: function(){
         return 'Meow!'
      },
   };
   return gato;
}

// var miGato = crearGato("Juan", 3);

// console.log(miGato.nombre);
// console.log(miGato.edad);
// console.log(miGato.meow());


function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:
   var usuario = {
      nombre: nombre,
      email: email,
      password: password
   };
   return usuario;
}

// var user = nuevoUsuario('Vinicio', 'vs@mail.com', '34y6&54%%1');
// console.log(user);
// console.log(user.password);


function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:
   objeto[propiedad] = null;
   return objeto;
};

// obj1 = {};
// var propiedades = agregarPropiedad(obj1, 'estudios');
// console.log(propiedades); //devuelve las propiedades del objeto obj1
// console.log(propiedades.estudios); //devuelve el valor de null que le asiganmoas



function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:
   if(objeto.hasOwnProperty(metodo)){
      objeto[metodo]();   // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
   }
};

//creamos un objeto para probar
var miObjeto = {
   saludar: function(){
      console.log("Hola vinicio");
   }
};
//invocamos al metodo, pasamos miObjeto y el parámetro "metodo" que es un string que 
//coincide con el nombre de una propiedad del objeto

//invocarMetodo(miObjeto, 'saludar');
//nos devuelve: Hola vinicio



function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   return objetoMisterioso.numeroMisterioso * 5;
}

// obj1 = {
//    numeroMisterioso: 10,
// };
// console.log(multiplicarNumeroDesconocidoPorCinco(obj1));


function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:
   delete objeto[propiedad];
   return objeto;
}

// obj1 = {
//    saludo: "Hola",
//    saludo2: 'Que tal',
// };

// eliminarPropiedad(obj1, 'saludo2');
// console.log(obj1);


function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if(objetoUsuario.email !== null && objetoUsuario.email !== undefined){
      return true;
   } else {
      return false;
   }
}

// obj1 = {
//    email : 'vinicio@MediaList.com',
// };
// obj2 = {};
// console.log(tieneEmail(obj1));
// console.log(tieneEmail(obj2));



function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if (objeto.hasOwnProperty(propiedad)){
      return true;
   } else{
      return false;
   };
}

// var obj1 = {
//    prop1 : "vinicio",
//    prop2 : 44
// };
// console.log(tienePropiedad(obj1, 'prop1')); //true
// console.log(tienePropiedad(obj1, 'prop3')); //false


function verificarPassword(objetoUsuario, password) {
   // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   if(objetoUsuario.password === password){
      return true;
   } else {
      return false;
   };
}


function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.password = nuevaPassword;
   return objetoUsuario;
}

// obj1 = {
//    nombre: 'Vinicio',
//    password: '12345',
// };
// console.log(actualizarPassword(obj1, '67890'));



function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:
   objetoUsuario.amigos.push(nuevoAmigo);
   return objetoUsuario;

};

// var obj1 = {
//    nombre: 'viicio',
//    amigos : ['lucas', 'pepe'],
// };
// console.log(agregarAmigo(obj1, 'Maria'));


function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define esta propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   for (let i=0; i<objetoMuchosUsuarios.length; i++){
      objetoMuchosUsuarios[i].esPremium = true;
   }
    return  objetoMuchosUsuarios;
};

// var usuario = [
//    {nombre: 'vinicio', esPremium: false},
//    {nombre: 'jose', esPremium: false},
//    {nombre: 'perdro', esPremium: true},
// ];

// console.log(usuario);
// pasarUsuarioAPremium(usuario);
// console.log(usuario);



function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   var sumaLikes=0;
   for(let i=0; i < objetoUsuario.posts.length; i++){
      var sumaLikes= sumaLikes + objetoUsuario.posts[i].likes; 
   }
   return sumaLikes;
}

// var obj1={
//    posts:[{idPost:'1', likes: 100}, {idPost:'2', likes: 10}, {idPost:'3', likes: 40} ],
//    fecha: '23/10/2023',
// };
// console.log(sumarLikesDeUsuario(obj1));


function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:
   objetoProducto.calcularPrecioDescuento = function(){
      return objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
   }
    
   return objetoProducto.precio - objetoProducto.calcularPrecioDescuento();
};

// var producto = {
//     precio : 10,
//     porcentajeDeDescuento: 0.2,
// };
// console.log(agregarMetodoCalculoDescuento(producto));



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
