const array = [1,2,3];
 
function getMaxNumber(arr){
    return Math.max.apply(this, arr);
}
console.log('OUTPUT : ',getMaxNumber(array)); 
