// variables

let alumnos = ['alan','alejandro','daiana','daniel'];

let tamanio = alumnos.length;
alert(tamanio);
console.log(tamanio);

for (let i=0; i<tamanio; i++) {
    console.log(i,alumnos[i], typeof alumnos[i]);
}

for(let nombre of alumnos) {
     console.log(nombre);
}

let i=0;
while(alumnos[i]!='daiana') {
    console.log(i,alumnos[i]);
    i++;
}

i=0;
while(i<tamanio) {
    if (alumnos[i]==='daiana') {
        console.log(i,alumnos[i]);
        break;  // sale del while
    };
    i++;
}

let alumnosobj = [
    {
        edad: 25,
        nombre: 'jose',
    },
    {
        edad: 24,
        nombre: 'martin',
    },{
        edad: 35,
        nombre: 'maria'
    }
];
let primero = true;
let alumnomaschico;
for (let alumnoobj of alumnosobj) {

   if (primero){
    alumnomaschico=alumnoobj;
    primero = false;
   }

   if (alumnomaschico.edad>alumnoobj.edad) {
    alumnomaschico=alumnoobj;
   }

}

alert(alumnomaschico.nombre);
console.log('alumno mas chico',alumnomaschico.nombre,'  edad',alumnomaschico.edad);

const vector = [1,2,1,3,4,1,2,1,1,2,1,3,4,1,2,1,1,2,1,3,4,1,2,1,1,2,1,3,4,1,2,1];
let   contador = 0;
let   pos =[];
for (let ind = 0; ind < vector.length; ind++) {
    
    if (vector[ind]===3){
          contador++;
          pos.push(ind);
    }
}

console.log('cantidad de 3', contador);
console.log('posiciones', pos);

// filtrar los numeros mayores a 2 
let mayoresA2 = [];
for (let i of vector) {
    if (i>2) {
        mayoresA2.push(i);
    }
}

let mayoresA2ConFilter = vector.filter( num => num > 2);
console.log(mayoresA2ConFilter);

let aux=0; // valor falso
if (aux) {
    console.log('false');
}

let aux2=undefined; // valor falso
if (aux2) {
    console.log('false');
}

let aux3=null; // valor falso
if (aux3) {
    console.log('false');
}

// guardar objetos


