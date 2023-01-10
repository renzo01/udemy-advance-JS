let human = {
    mortal : true
};

let socrates = Object.create(human);

console.log('OUTPUT : ',socrates.mortal);