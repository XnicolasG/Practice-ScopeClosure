const MyMoney = () => {
    let saveCoins =0;
    function CountCoins(coins) {
        saveCoins += coins;
        console.log(`Savings: $${saveCoins}`);
    }
    return CountCoins;
}

// al guardar la funcion dentro de una constante puede acceder a la funcion interna =>
// y pasar por parametro el argumento que espera la segunda función, si no se crea esta constante =>
// no podria llegar a pasarle el valor del parametro a la segunda función
const myMoneyBox = MyMoney(); 
myMoneyBox(5);
myMoneyBox(15);

const MoneyBox2 = MyMoney();
MoneyBox2(20);
MoneyBox2(25);

// ejericio

function createPetList() {
    const petList = []
    return function(pet){
        if(pet){
          petList.push(pet)
          return petList
        }
        return petList
    }
  }

  const petList = createPetList();
  console.log(petList('Percy'))