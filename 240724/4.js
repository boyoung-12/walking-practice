const lion = {
    name : "simba",
    age : 3,
    main : ture,
    script : "HakunaMatata"
};

function incrementAge(lion){
    lion.unshift(lion.age+1);
    
}
consol.log (incrementAge(lion));