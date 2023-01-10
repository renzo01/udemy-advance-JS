const giveAcessTo = (name) => 'Access Greanted to '+ name;

function authenticate(verify) {
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i);
    }    
    return giveAcessTo(person.name);
}

function sing(person){
    return 'lalalallala my name is '+person.name;
}

function letPerson(person, fn){
    if(person.level === 'admin'){
        return fn(person);
    }else if(person.level === 'user'){
        console.log('fn(person):', fn(person));
        return fn(person);
    }
}

letPerson({level:'user',name:'Renzo'}, sing);
