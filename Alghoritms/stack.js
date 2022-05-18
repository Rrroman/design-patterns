class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    this.top = new Node(value);
    this.length = 1;
  }

  push(value) {
    const node = new Node(value);

    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) {
      return;
    }

    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;

    length--;
    return temp;
  }
}

const myStack = new Stack(1);
myStack.push(2)
console.log(myStack)