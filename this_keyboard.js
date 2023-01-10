const character = {
    name: 'Simon',
    getCharacter() {
        function returnName(){
            return this.name;
        }
        return returnName.bind(this);
    }
  };
  const giveMeTheCharacterNOW = character.getCharacter();
   
  //How Would you fix this?
  console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't