class Vehicle {
  constructor(make, model){
    this.make = make;
    this.model = model;
  }

  show(){
    console.info(`${this.make} ${this.model}`)
  }
}

class Car extends Vehicle {
  constructor(year, make, model){
    super(make, model);
    this.year = year;
  }

  show() {
    console.info(`${this.year} ${this.make} ${this.model}`)
  }
}

function Animal(name){
  this.name = name;
}
function Cat(name, color){

}

Cat.prototype.speak = function() {
  console.info('Meow');
};




const myCar = new Vehicle('Ford', 'Edge');
myCar.show();
const wifeCar = new Car(2014, 'Ford', 'Fusion');
wifeCar.show();

const cat = new Animal('Thundercat');
console.info(`My cat is ${cat.name}`);