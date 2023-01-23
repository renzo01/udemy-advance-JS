const array = [1,2,3];

function deleteLastElement (array){
    //craete a clone of the array, because JS works with references
    const newArray = [].concat(array);
    newArray.pop();
    return newArray;
}

function multiplyByTwo(arr){
    //map already create and return an array
    return arr.map(item => item*2);
}

console.log(deleteLastElement(array));
console.log(multiplyByTwo(array));