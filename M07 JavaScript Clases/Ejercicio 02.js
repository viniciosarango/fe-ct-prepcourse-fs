/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
   constructor(nombre, apellido, edad, domicilio){
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
   }
   //Para obtener un objeto con las propiedades y 
   //valores de la persona actual, simplemente debes devolver this, 
   //que representa la instancia actual de la clase Persona.
   
   detalle(){
      return this;
   }

}

// var persona = new Persona('vinicio', 'sarango', 44, 'Epoca');
// console.log(persona.detalle());


function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:
   var persona = new Persona(nombre, apellido, edad, domicilio);
   return persona;
}

// var persona1 = crearInstanciaPersona('Juan', 'Perez', 34, "loja");
// var persona2 = crearInstanciaPersona('Pepe', 'Pita', 35, "loja");
// var persona3 = crearInstanciaPersona('Maria', 'Macas', 74, "loja");

// console.log(persona1.detalle());
// console.log(persona2.detalle());
// console.log(persona3.detalle());


function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:
   Persona.prototype.datos = function(){
      return(this.nombre + ', ' + this.edad + ' anios');
   }
}


// agregarMetodo();
// const perosna1 = new Persona('vinicio', 'Sarango', 44, 'Loja');
// console.log(perosna1.datos());




/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
