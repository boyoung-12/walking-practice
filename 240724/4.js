const lion = {
    name : "simba",
    age : 3,
    main : true,
    script : "HakunaMatata"
};

function incrementAge(lion){
    lion.age=lion.age+1
    // lion.age+=1;
    // lion.age++;
    
    return lion.age;
};
console.log (incrementAge(lion));