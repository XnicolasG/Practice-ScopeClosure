function Greeting() {
    let userName = 'SrPizza';

    function DisplayUserName() {
        return `Hello ${userName}`;
    }
    return DisplayUserName()
};

const AD = Greeting();
console.log(AD);
