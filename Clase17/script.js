// acccedemos al DOM y obtenemos el body
const bodyElement = document.getElementsByTagName("body");

console.log(bodyElement);

console.log(bodyElement.length);

//obtener el primer hijo de body 
const bodyTag = bodyElement[0].firstChild;

console.log(bodyTag);
const mainTag = bodyElement[0].getElementsByTagName("main");
console.log("mainTag",mainTag);

// accedo via id
const h1Tag=document.getElementById('titulo');
console.log('h1Tag',h1Tag);

//accedo al elemento padre
const parentOfH1Tag = h1Tag.parentNode;
console.log('parent Of h1Tag',parentOfH1Tag);

// determinar si un elemento tiene hijos
const hasChild = h1Tag.hasChildNodes(); // tru or false

console.log('h1Tag', hasChild ? 'tiene hijos' : 'no tiene hijos');

// accedo al primer y ultimo hijo
const main = mainTag[0];

for (const ChildOfMain of main.childNodes) {
    if (ChildOfMain.nodeName=='comment') {
        // elimino del documento los textos quee no quiero
        // removeChild 
        main.removeChild(ChildOfMain);
    }
}
for (const ChildOfMain of main.childNodes) {
    if (ChildOfMain.nodeName=='#text') {
        // elimino del documento los textos quee no quiero
        // removeChild 
        main.removeChild(ChildOfMain);
    }
}
const firstChild = main.firstChild;
const lastChild  = main.lastChild;
console.log('first chilld of main',firstChild);
console.log('last chilld of main',lastChild);

//accedo al formulario por medio del DOM
// metodo 1
let form = document.forms[0]; //accedo al elemento 0 de la coleecion
// metodo 2
form = document.forms; // cargo la coleccion de elementos
for(const f of form) {
    if (f.id==='myForm') {
        // accedo al contenido          
    }
}

// metodo 3
 form = document.getElementById('myForm');
 
 const inputInform = form.getElementsByTagName('input');
for (const input of inputInform) {
    // a cada elemento le agrego una clase .rojo
    input.className = 'rojo';
}

                                                                                                                                                                                                                                                                                                                                    