const healer = {
    name: 'Rakkan',
    health: 50,
    heal(num1,num2) {
        return this.health += num1 + num2;
    }
}

const jungle = {
    name: 'Xaya',
    health: 30
}
console.log('Antes de la curacion : ',jungle);
const healJungle = healer.heal.bind(jungle,50,20);
healJungle();
console.log('Despues de la curacion : ',jungle);