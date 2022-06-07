class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
}
let bigFluffyDog1 = new Dog("Buzz", "greatPyrenees");
let bigFluffyDog2 = new Dog("Woody", "labrador");

class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

class Dinner {
  #desert;
  constructor(salad, soup, entree, desert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#desert = desert;
  }
}
