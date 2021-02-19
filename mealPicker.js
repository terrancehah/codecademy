const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
      },
    get appetizers() {
        return this.appetizers;
      },
    set appetizers(appertizerIn) {
        this.appetizers = appertizerIn;
      },
    get mains() {
        return this.mains;
      },
    set mains(mainsIn) {
        this.mains = mainsIn;
      },
    get desserts() {
        return this.desserts;
      },
    set desserts(dessertsIn) {
        this.desserts = dessertsIn;
      },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
        }
      },
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
          name: dishName,
          price: dishPrice,
        }
        this._courses[courseName].push(dish);
      },
  
      getRandomDishFromCourse: function (courseName) {
        const dishes = this._courses[courseName]; 
        const randomNumber = Math.floor(Math.random() * dishes.length);
        return dishes[randomNumber];
      },
      generateRandomMeal: function() {
        const appertizers = this.getRandomDishFromCourse('appetizers');
        const mains = this.getRandomDishFromCourse('mains');
        const desserts = this.getRandomDishFromCourse('desserts');
        const totalPrice = appertizers.price + mains.price + desserts.price; 
        return `You meal is ${appertizers.name}, ${mains.name} and ${desserts.name}. The total price is $${totalPrice}.`;
      }
    };
  
    menu.addDishToCourse('appetizers','Vege Salad',8.00);
    menu.addDishToCourse('mains','Beef Steak',25.00);
    menu.addDishToCourse('desserts','Chocolate Lava Cake', 9.00);
  
    let meal = menu.generateRandomMeal();
    console.log(meal);