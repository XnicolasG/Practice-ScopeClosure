/*
console.log(nameOfPet);
var nameOfPet = 'Percy' // => undefined 
//al declarar DESPUES de llamar la variable, internamente js crea nameOfPet sin valor, por lo que lo que realmente hacemos es redeclarar la variable
*/

pet();

function pet() {
    console.log(`el nombre del perro es ${namePet}`);
}

var namePet = 'percy'// => undefined ya que es nuevamente declarada DESPUES de ser llamada
