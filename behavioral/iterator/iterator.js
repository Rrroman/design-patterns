class ArrayIterator {
  constructor(el) {
    this.index = 0;
    this.elements = el;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

const myArray = [1, 2, 3, 4, 5];
const myArrayIterator = new ArrayIterator(myArray);

while (myArrayIterator.hasNext()) {
  console.log(myArrayIterator.next());
}

class ObjectIterator {
  constructor(el) {
    this.index = 0;
    this.keys = Object.keys(el);
    this.elements = el;
  }

  next() {
    return this.elements[this.keys[this.index++]];
  }

  hasNext() {
    return this.index < this.keys.length;
  }
}

function iam() {
  return 'I am a function';
}

const myObject = {
  d: function () {
    return 'inside d';
  },
};

const myObjectIterator = new ObjectIterator(myObject);

while (myObjectIterator.hasNext()) {
  console.log(myObjectIterator.next()());
}

 
