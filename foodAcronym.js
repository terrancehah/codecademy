const foods = ['edamame', 'roasted chicken', 'risotto', 'apple pie', 'nuts', 'cheese', 'eggs']

const foodAcronym = foods.reduce((accumulator, val) => {
  return accumulator + val[0] } , 'T'
);

console.log(foodAcronym);