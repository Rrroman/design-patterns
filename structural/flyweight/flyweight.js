class Auto {
  constructor(model) {
    this.model = model;
  }

  getModel() {
    return this;
  }
}

class AutoFactory {
  constructor() {
    this.models = {};
  }

  create(name) {
    let model = this.models[name];
    if (model) return model;
    this.models[name] = new Auto(name);
    return this.models[name];
  }
}

const factory = new AutoFactory();
const ford = factory.create('Ford');
const audi = factory.create('Audi');
const blackAudi = factory.create('Audi');
const redAudi = factory.create('Audi');

console.log(factory.models);
