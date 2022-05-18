class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//TODO: add count if we add same value

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;
    
    while (true) {
      if (temp === newNode) {
        return;
      }

      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
          return this
        }
        temp = temp.right;
      }
    }
  }

  contains(value) {
    if (!this.root) {
      return;
    }

    let temp = this.root;
    while (temp) {
      if (value === temp.value) {
        return true;
      }

      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }


  // MY own try for contains method
  // contains(value) {
  //   if (!this.root) {
  //     return;
  //   }

  //   let temp = this.root;
  //   while (true) {
  //     if (value === temp.value) {
  //       return true;
  //     }

  //     if (value < temp.value) {
  //       if (temp.left === null) {
  //         return false;
  //       }
  //       temp = temp.left;
  //     } else {
  //       if (temp.right === null) {
  //         return false;
  //       }
  //       temp = temp.right;
  //     }
  //   }
  // }

  //MY try
  // minValueNode(currentNode) {
  //   if (currentNode.left === null) {
  //     return currentNode.value;
  //   }
  //   while (currentNode.left) {
  //     currentNode = currentNode.left;
  //   }
  //   return currentNode;
  // }

  minValueNode(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

}

const myBST = new BST();
myBST.insert(10);
myBST.insert(12);
myBST.insert(9);
myBST.insert(4);
myBST.insert(19);
myBST.insert(8);
console.log(myBST)