const array = [1,2,3,4];

const makeSecuence = () =>{
    for (let i = 0; i < array.length; i++) {
        setTimeout(function(){
            console.log('I am at index: '+ i);
        },3000)
    }
    
}