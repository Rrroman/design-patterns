class Conveyor {
  setBody() {
    console.log('Body set!');
  }

  getEngine() {
    console.log('Dismantle Engine!');
  }

  setEngine() {
    console.log('Engine set!');
  }

  setInterior() {
    console.log('Exterior added!');
  }

  changeInterior() {
    console.log('Update interior!');
  }

  setExterior() {
    console.log('Added interior!');
  }

  setWheels() {
    console.log('Wheels!');
  }

  addElectronics() {
    console.log('Added electronics!');
  }

  paint() {
    console.log('Cars painted!');
  }
}

class ConveyorFacade {
  constructor(conveyor) {
    this.conveyor = conveyor;
  }

  buildCar() {
    this.conveyor.setBody();
    this.conveyor.setEngine();
    this.conveyor.setInterior();
    this.conveyor.setExterior();
    this.conveyor.setWheels();
    this.conveyor.addElectronics();
    this.conveyor.paint();
  }
}

const car1 = new ConveyorFacade(new Conveyor());
console.log(car1.buildCar());
