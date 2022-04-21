/*variables*/
let edad = 10;
console.log(edad);                    // escribe la variable en la consola
console.log(typeof edad);             // escribe de que tipo es la variable
console.log(edad, typeof edad);
// puedocambiar el valor
edad = 20;
console.log(edad); // escribe la variable en la consola
// definicion de una constante
const altura = 174.5;

var nombre = 'carlos'; // define una variable de forma global
// tipo string
let apellido = "lopez";

// operador typeof
console.log(nombre, apellido, typeof nombre, typeof apellido);

const flag = true;
const iguales = false;
console.log(flag, typeof flag);

// arrays de string
const nombres = [];  // array de string vacios
const materias =['lengua','ingles','etc'];

let materia = materias[0];
console.error(materia);

//reasignamos en la variable materia
console.info(materias[1]); // idem .log

// crear un objet persona
let persona = {
        edad: 36,
        argentina: true,
        nombre:"carlos",
        apellido: "lopez",
        idiomas: ['español','ingles']
};
console.log(persona,typeof persona);

// undefined
let perro = undefined;
perro = {
         apodo:'firulais'
};
console.log(perro,typeof perro);
// reconvierto el objeto
perro = {
    apodo:'perrito',
    edad:100
};
console.log(perro,typeof perro);

let gato=null;
gato = {edad:100};
console.log(gato,typeof gato);

// Los tipos de datos tienen funciones o metodos
let nacionalidad ='     argentina     ';
console.log(nacionalidad);
// puedo ejecutar metodos o funciones
nacionalidad = nacionalidad.trim(); // elimina esacios en blanco
console.log(nacionalidad);

nacionalidad = nacionalidad.toUpperCase(); // se pasa a mayuscula
console.log(nacionalidad);

nacionalidad = nacionalidad.toLowerCase(); // se pasa a minuscula
console.log(nacionalidad);

console.log(nacionalidad.length);                 // longitud

// ejemplos de metodos en numeros
let valornumericoGuardadoEnString = '100';
valornumericoGuardadoEnString = valornumericoGuardadoEnString + 1; // concatena los strings
console.log(valornumericoGuardadoEnString);

valornumericoGuardadoEnString = '100';
valornumericoGuardadoEnString = parseInt(valornumericoGuardadoEnString) + 1; // lo pasa a numerico
console.log(valornumericoGuardadoEnString);

valornumericoGuardadoEnString = '100';
valornumericoGuardadoEnString = +valornumericoGuardadoEnString + 1; // lo pasa a numerico
console.log(valornumericoGuardadoEnString);

valornumericoGuardadoEnString = '100';
valornumericoGuardadoEnString = Number(valornumericoGuardadoEnString) + 1; // lo pasa a numerico
console.log(valornumericoGuardadoEnString);

valornumericoGuardadoEnString = 'pepe'; 
valornumericoGuardadoEnString = Number(valornumericoGuardadoEnString) + 1; // lo pasa a numerico
console.log(valornumericoGuardadoEnString); // ==> NAN

let valorFlotanteEnString = '175.5';
console.log(parseInt(valorFlotanteEnString)); // lo pasamos a entero
console.log(parseFloat(valorFlotanteEnString)); // lo pasamos a float
console.log(Number(valorFlotanteEnString)); // idem anterior

