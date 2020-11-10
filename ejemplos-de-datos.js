// tipos de datos
"Hola mundo" //string
'Hola mundo' //string

console.log("esto es un string")

2000 //numeros
-1.2 //numeros

true //boolean
false //boolean

["jose", "ryan", "laura"] //array
[1,2,3] //array
[true, false, true, false] //array

//ejemplo de un objeto
{
    "username": "ryan",
    "score": 70,4,
    "hours": 14,
    "proffesional": true,
}

//variables
var nombreDePersona = "john";
let lastName = "carter";

//Las variables permiten ser modificadas
nombreDePersona = "marcos";

//constantes
const PI = 3.1416;

//OPERADORES

let numberOne = 100;
let numbreTwo = 500;

let result1 = numberOne + numbreTwo; //menor que
let result2 = numberOne - numbreTwo; //menor que
let result3 = numberOne / numbreTwo; //menor que
let result4 = numberOne * numbreTwo; //menor que
let result5 = numberOne < numbreTwo; //menor que
let result6 = numberOne > numbreTwo; //mayor que
let result7 = numberOne == numbreTwo; //igual que
let result8 = numberOne != numbreTwo; //diferente que

//El resultado en console sera booleano

//Uso de condicionales if y else
let passwordBD = 'miguellares564';
let input = 'miguellares564';
let result = input == passwordBD;

if (result === true) {
    console.log('Login correcto');
} else {
    console.log('Contraseña incorrecta');
}
//mas de dos posibles resultados
let score = 70;
if (score > 30) {
    console.log('excelente, sigue practicando');
}   else if (score > 15) {
    console.log('seguro que puedes mejorar eso');
}
else {
    console.log('Te recomiendo seguir este tutorial');
}

//ejemplo de switch
let typeCard = 'Credit Card';

switch(typeCard) {
    case 'Debit Card':
        console.log('esta es una tarjeta de Debito');
        break;
    case 'Credit Card':
        console.log('esta es una tarjeta de credito');
        break;
    default:
        console.log('No Card');
}

//ejemplo de un bucle
let count = 10;

while(count > 0){
    console.log(count);
    count = count - 1;
}

//bucle jodido for
let names = ['juan', 'miguel', 'maritza', 'joan'];

for(let miindice = 0; miindice < names.length; miindice++){
console.log(names[miindice]);
}

let nombres = ['juan', 'miguel', 'maritza', 'joan'];
for(let i = nombres.length - 1; i >= 0; i--){
    console.log(nombres[i]);
}

//funciones
function saludar(personName){
    console.log("Hola " + personName);
}
saludar("markus");

//se puede utilizar para hacer varias operaciones
function sumar(n1, n2){
    console.log(n1 + n2);
}

sumar(3, 2);
sumar(3, 452);
sumar(345, 2);
sumar(23, 2);