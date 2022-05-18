// javascript create 3 classes car, engine, wheel

class Car {
  constructor(engine, wheels) {
    this.engine = engine;
    this.wheels = wheels;
  }
}

class Engine {
  constructor(horsepower) {
    this.horsepower = horsepower;
  }

  start() {
    console.log("Vroom!", this.horsepower);
  }
}

class TeslaEngine {
  constructor(horsepower) {
    this.horsepower = horsepower + 100;
  }

  start() {
    console.log("Tesla Vur-vur-vroom!", this.horsepower);
  }
}

class Wheel {
  constructor(size) {
    this.size = size;
  }
}

const myCar = new Car(new Engine(300), [new Wheel(24), new Wheel(24), new Wheel(24), new Wheel(24)]);
myCar.engine.start()
const myTeslaCar = new Car(new TeslaEngine(300), [new Wheel(24), new Wheel(24), new Wheel(24), new Wheel(24)]);
myTeslaCar.engine.start()

const bob = {
  name: "bob",
}

// const superBob = Array.prototype.slice.call();

console.log(Array.prototype)

var my_object = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  random: () => Math.random() * 10,
  length: 5
};

var sliced = Array.prototype.slice.call(my_object, 5, 6);
console.log(sliced)