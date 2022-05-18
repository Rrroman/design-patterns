class Counter {
  constructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance;
    }
    this.count = 0;
    Counter.instance = this;
    return this; // not necessary
  }
  getCount() {
    return this.count;
  }
  increaseCount() {
    return this.count++;
  }
}

const counter = new Counter();
const counter2 = new Counter();

counter.increaseCount();
counter.increaseCount();
counter.increaseCount();
console.log(counter, counter2);