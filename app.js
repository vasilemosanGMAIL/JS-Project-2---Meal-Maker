const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const num = Math.floor(Math.random() * dishes.length);
    return dishes[num];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your appetizer is ${appetizer.name}, main dish is ${main.name}, and ${dessert.name} for dessert. The total price is ${totalPrice}`;
  },
};
menu.addDishToCourse("appetizers", "chips", 50);
menu.addDishToCourse("appetizers", "focaccia", 50);
menu.addDishToCourse("appetizers", "nachos", 50);

menu.addDishToCourse("mains", "zeama", 20);
menu.addDishToCourse("mains", "mamaliga", 20);
menu.addDishToCourse("mains", "supa", 20);

menu.addDishToCourse("desserts", "bomboane", 15);
menu.addDishToCourse("desserts", "biscuiti", 15);
menu.addDishToCourse("desserts", "tort", 15);

const meal = menu.generateRandomMeal();
console.log(meal);
