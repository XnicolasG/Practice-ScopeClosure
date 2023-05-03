var Name;
Name = 'nicolas';
console.log(Name);

var secondName = 'juan'; //declarar, asignar
secondName ='Pizza'; // reasignar
console.log(secondName);

var lastName = 'Khan'; //declarado y asignado
var lastName = 'Kaplan'; // redecalarado y reasignado
console.log(lastName);

// --- LET ----
let fruit = 'apple'; //declarar y asignar
fruit = 'Kiwi'; // reasignar

// let fruit = 'banana' => si quisiera Redeclarar no me lo permite.

// ------ CONST ------
const animal ='Dog'; //declarado y asignado
// animal = 'cat'; // => NO se puede reasignar Const
// const animal = 'Cow' // => NO se puede Redeclarar
console.log(animal);

const vehiculos = [];
// Agregar string a array
vehiculos.push('BMW');
console.log(vehiculos);
// retirar string de array
vehiculos.pop();
console.log(vehiculos);
// => aunque muestre resultados diferentes NO se esta reasignando ya que el valor inicial que es un array.