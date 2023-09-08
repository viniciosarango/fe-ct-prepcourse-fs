/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

function crearUsuario() {
   // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.
   // Tu código:
   
   class Usuario{
      constructor(nombre, email, password){
         this.nombre = nombre;
         this.email = email;
         this.password = password;
      }
      saludar(){
         return 'Hola, mi nombre es ' + this.nombre;
      }
   }
   return Usuario;
}

// let UsuarioClase = crearUsuario();
// let user1 = new UsuarioClase('Vinicio', 'vinicio@mail.com', '12345678');

// console.log(user1.password);
// user1.saludar();


function agregarMetodoPrototype(Usuario) {
   // Agrega un método al prototipo de "Usuario".
   // El método debe llamarse "saludar" y debe devolver el string "Hello World!".
   // Tu código:
   Usuario.prototype.saludar = function(){
       return 'Hello World!';
   }
}

//vamos a implementarlo

//1. funcion constructora para crear un objeto
// function Usuario(nombre){
//    this.nombre = nombre;
// }
//2. Llamamos a la función para agregar el método al prototipo
//agregarMetodoPrototype(Usuario);
//3. creamos objeros de la clase Usuario
// user1 = new Usuario('Vinicio');
// user2 = new Usuario("sole");
//4. comprobamos que funciona le metodo 'saludar'
//user1.saludar();
//user2.saludar();



function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".
   
   String.prototype.reverse = function(){
      // Convierte la cadena actual (this) en un arreglo de caracteres,
      // invierte el orden del arreglo y luego lo une de nuevo en una cadena.
      return this.split('').reverse().join('');
   };
}

// agregarStringInvertida();
// let cadena = "Hola Mundo";
// let cadenaInvertida = cadena.reverse();
// console.log(cadenaInvertida); // Debería imprimir "odnuM aloH"



/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearUsuario,
   agregarMetodoPrototype,
   agregarStringInvertida,
};
