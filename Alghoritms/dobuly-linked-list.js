class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Dll {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return;
    }

    const temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    this.length--;
    return temp;
  }

  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = this.node;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return;
    }
    const temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return;
    }

    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }

    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index <= 0) {
      this.unshift(value)
      return
    }
    
    if (index >= this.length) {
      this.push(value);
      return
    }

    if (this.head === null) {
      this.push(value);
      return
    } 

    const newNode = new Node(value)
    const after = this.get(index);
    const before = after.prev;
    
    after.prev = newNode;
    newNode.next = after;
    before.next = newNode;
    newNode.prev = before;

    this.length++
    return this; 
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }

    const temp = this.get(index);
    const before = temp.prev;
    const after = temp.next;

    before.next = after;
    after.prev = before;
    temp.next = null;
    temp.after = null;
    
    this.length--;
    return true
  }
}

const myDll = new Dll('Start no prev');
myDll.push('End no next');
myDll.insert(1, 2);
console.log(myDll);
