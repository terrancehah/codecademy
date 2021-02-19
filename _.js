const _ = {
    clamp(number,lower,upper) {
        let lowerClampedValue = Math.max(number,lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return (clampedValue);
    },

    inRange(number, startValue, endValue) {
      function correctValues() {
        if (typeof endValue === 'undefined') {
          let endValue = startValue;
          let startValue = 0;
      } else if (startValue > endValue) {
          let temporaryValue = startValue;
          let startValue = endValue;
          let endValue = temporaryValue;
      } 
    }
    correctValues();
    if (number < startValue || number > endValue) {
      return false;
    } else {
      return true;
    }
  },
  
  words(string) {
    let arrayOfWords = [];
    arrayOfWords.push(string.split(' '));
    return arrayOfWords;
  },

  pad(string,length) {
    if (string.length < length) {
      let difference = length - string.length;
      if (length % 2 === 0) {
        return ' '.repeat(Math.round(difference / 2)) + string + ' '.repeat(Math.round(difference / 2));
      } else {
        return ' '.repeat(Math.round(difference / 2)) + string + ' '.repeat(Math.round(difference / 2)) + ' ';
      }
    } else {
      return string;
    }
  },

  has (object, key) {
    hasValue = (typeof key === 'undefined') ? false : true;
    return hasValue;
  },

  invert (object) {
    let inverted = {};
    for (i = 0; i < Object.keys(object).length; i++) {
        let key = Object.keys(object)[i];
        let value = object[key];
        inverted [value] = key;
    }
    return inverted;
  },

  findkey (object, predicate) {
    for (const key in object) {
      
      if (predicate(object[key])) {
        console.log (predicate(object[key]));
      } else {
        return 'undefined';
      }
    }
  },

  drop (array, number) {
    if (!number) {
      number = 1;
    } else {
      droppedArray = array.slice((number), array.length);
      return droppedArray;
    };
  },

  /* dropWhile (array, predicate) {
    let dropNumber = array.findIndex(function(element, index) {
      while(predicate(element, index, array)) 
      {
        return index;
        }
      }
    );
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  }, */


  chunk (array, size) {
    if (!size) {
      let size = 1;
      return size;
    }
    let arrayChunks =[];
    for (i = 0; i < array.length; (i += size)) {
      let arrayChunk = array.slice(i, (i + size));
      arrayChunks.push(arrayChunk);
      }
    return arrayChunks;
  },

 }




const arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isLargerThanFive = (number) => number > 3;

console.log(_.chunk(arrayNum, 2));

