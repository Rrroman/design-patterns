class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
  
class Que { 
  constructor(value) {
    this.first = new Node(value);
    this.last = this.first;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return;
    }

    const temp = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }

    this.length--;
    return temp;
  }
}

const myQue = new Que('start');
myQue.enqueue('1')
myQue.enqueue('2')
myQue.dequeue()