class Memento {
  constructor(value) {
    this.value = value;
  }
}

const creator = {
  save: (val) => new Memento(val),
  restore: (memento) => memento.value,
};

class Caretaker {
  constructor() {
    this.values = [];
  }

  addMemento(memento) {
    this.values.push(memento);
  }

  getMemento(index) {
		return this.values[index];
	}
}

const caretaker = new Caretaker();
caretaker.addMemento(creator.save('Hi'));
caretaker.addMemento(creator.save(200));
caretaker.addMemento(creator.save(42));

console.log(creator.restore(caretaker.getMemento(0)));