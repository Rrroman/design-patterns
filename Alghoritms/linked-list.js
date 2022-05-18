class NewNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new NewNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new NewNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    let current = this.head;
    let previous = current;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    this.tail = previous;
    this.tail.next = null;
    this.length--;

    return previous;
  }

  unshift(value) {
    const newNode = new NewNode(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  // todo set i have coded insert instead of set lol.
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false
  }

  insert(index, value) {
    if (index <= 0) {
      this.unshift(value);
      return this;
    }
    if (index > this.length) {
      this.push(value);
      return this;
    }

    const current = this.get(index);
    if (!this.get(index - 1)) {
      return;
    }

    const newNode = new NewNode(value);
    const temp = this.get(index - 1);

    newNode.next = current;
    temp.next = newNode;
    this.length++;
    return this;
  } 

  remove(index) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) {
      return;
    }

    const previous = this.get(index - 1);
    const current = previous.next;
    previous.next = current.next;
    current.next = null;

    this.length--; 
    return this;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    let next = current.next;

    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }
}

let myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push('End!!!');
myLinkedList.insert(0, 'Start!!!');
// console.log(myLinkedList.get(0).value, '<--- first item');
// console.log(myLinkedList.get(1).value, '<--- second item');
// console.log(myLinkedList.get(myLinkedList.length - 1).value, '<--- last item');
console.log(myLinkedList)
myLinkedList.reverse()
console.log(myLinkedList)
