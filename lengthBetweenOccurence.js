subLength = (string, character) => {
    const re = new RegExp(character, 'g');
    let match = (string.match(character,'g')).length;
    if (match === 2) {
      return string.lastIndexOf(character) - string.indexOf(character) + 1;
      } else {
        return 0;
      }
  }
  
  console.log(subLength('Terrance', 'e')); 