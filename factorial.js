factorial = (num) => {
    let newNum = num;
    while (num > 1) {
      newNum = newNum * (num - 1);
      num--;
    }
    return newNum;
  };
  
  console.log(factorial(6));