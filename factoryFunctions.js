class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack(){
        return 'attack with '+this.weapon;
    }
}

class Elf extends Character{
    constructor(name, weapon, type){
        super(name,weapon);
        this.type = type;
    }
    attack(attack){
        return 'attack with '+attack;
    }
}
class Ogre extends Character{
    constructor(name, weapon, color){
        super(name,weapon);
        this.color = color;
    }
    makeFort(){
        return 'strongest fort in the world';
    }
    attack(){
        return 'attack with '+this.weapon;
    }
}

const dolby = new Elf('Dolby', 'cloth', 'house');
console.log(dolby.attack());

const shrek = new Ogre('Shrek','club', 'greem');
console.log(shrek.makeFort());
//the only way to access isPrototypeOf function with class is destructure prototype
console.log(Ogre.prototype.isPrototypeOf(shrek));
//Or using instanceOf
console.log(dolby instanceof Character);