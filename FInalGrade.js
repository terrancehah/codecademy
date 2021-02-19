const finalGrade = (num1, num2, num3) => {
    const Average = ((num1 + num2 + num3)/3);
    if (num1 > 100 || num2 > 100 || num3 > 100 ) {
      return 'You have entered an invalid grade.' 
      } else if (num1 < 0 || num2 < 0 || num3 < 0 ){
  return 'You have entered an invalid grade.'
      } else {
    switch (true) {
      case Average < 60:
        return 'F';
      case Average < 70:
        return 'D';
      case Average < 80:
        return 'C';
      case Average < 90:
        return 'B';
      default:
        return 'A';
  };
  };
  }
  console.log(finalGrade(95,94,92))