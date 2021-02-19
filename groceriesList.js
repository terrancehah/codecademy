function groceries(array) {
  let groceriesList = array.map(a => a.item);
  const last = groceriesList.pop();
  console.log("'" + groceriesList.join(', ') + ' and ' + last + "'");
};

groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}])