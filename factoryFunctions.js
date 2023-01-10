
//Object.create()

// const elfFunctions = {
//     attack(){
//         return 'attack with '+this.weapon;
//     }
// }

function Elf(name, weapon){
    this.name = name;
    this.weapon = weapon;
}

Elf.prototype.attack = function(){
    return 'attack with '+ this.weapon;
}

const peter = new Elf('peter','stones');
console.log(peter.attack());

// const sam = createElf('sam','firestorm');
// console.log(sam.attack());