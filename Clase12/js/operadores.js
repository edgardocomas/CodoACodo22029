/* Aritmeticos 
   Logicos
   Relacionale */

// Aritmeticos + - * / % ++
let a = 10;
let b = 20;
console.log(a,b);

let c = a+b;
console.log(c,'+');

let d = a-b;
console.log(d,'-');

let div = a/b;
console.log(div,'/');

let multi = a*b;
console.log(multi,'*');

// % es el resto de la division
let anio = 2022;
// quiero saber si es par o impar
let resto = anio % 2;
console.log(resto,'%');

// incremento
let valor = 0;
valor = valor + 1;
valor++;
console.log(valor,'++');

valor = valor -1 1;
valor--;
console.log(valor,'--');

// Logicos and &&, or ||, not !
let username = 'root';
let password = '1234';
let usuariovalidoOr  = (username === 'root' || password === '1234');
let usuariovalidoAnd = (username === 'root' && password === '1234');

// Relacionales, da un valor booleano 
let x = 10;
let y = 20;
let XMayorY = (x>y);
console.log(x,'>',y,XMayorY);
console.log(x,'<',y,x < y);
console.log(x,'===',y,x === y);
console.log(x,'>=',y,x >= y);
console.log(x,'<=',y,x <= y);
