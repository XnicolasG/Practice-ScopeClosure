const myGlobal = 0;

function Myfunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function Parent() { //función interna
        const inner = 2;
        console.log({myNumber, myGlobal});

        function Child() {
        console.log({inner, myNumber, myGlobal});
            
        }
        return Child()
    }
    return Parent();
};

Myfunction()


