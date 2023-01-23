//Inmutability
const obj = {name:'Andrei'};
function clone(obj){
    return {...obj}; // this is pure
}

function updateName(obj){
    const obj2 = clone(obj);
    obj2.name = 'nana';
    return obj2;
}

console.log(obj);
console.log(updateName(obj));