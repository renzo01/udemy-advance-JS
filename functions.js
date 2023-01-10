//craete a function like old way

function one(){
    return 1;
}

// create function object way
const obj = {
    two() {
        return 2
    }
}

console.log(obj.two());

//call way

function three(){
    return 3
}

// three.call();


const four = new Function('num','return num');

console.log( four(4));


const specialObj = {
    yell: 'ahhhhh',
    name:'wohoooo',
}