// class Subject {
//   constructor() {
//     this.observers = [];
//   }

//   attach(observer) {
//     this.observers.push(observer);
//   }

//   detach(observer) {
//     this.observers = this.observers.filter((obs) => obs !== observer);
//   }

//   notify() {
//     this.observers.forEach((observer) => observer.update());
//   }
// }

// class Observer {
//   constructor() {
//     this.state = null;
//   }

//   update() {
//     this.state = Math.random();
//   }
// }

// const subject = new Subject();

// const observer1 = new Observer();
// const observer2 = new Observer();

// subject.attach(observer1);
// subject.attach(observer2);

// subject.notify();

// console.log(observer1.state); // 0.9888675392895412
// console.log(observer2.state);

// subject.detach(observer1);

// subject.notify();

// console.log(observer1.state); // 0.9888675392895412
// console.log(observer2.state);

//----------------------------------------------------------------------------------------------------

// ES2015+ keywords/syntax used: class, constructor, let
class ObserverList {
  constructor() {
    this.observerList = [];
  }

  add(obj) {
    return this.observerList.push(obj);
  }

  count() {
    return this.observerList.length;
  }

  get(index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index];
    }
  }

  indexOf(obj, startIndex) {
    let i = startIndex;

    while (i < this.observerList.length) {
      if (this.observerList[i] === obj) {
        return i;
      }
      i++;
    }

    return -1;
  }

  removeAt(index) {
    this.observerList.splice(index, 1);
  }
}

class Subject {
  constructor() {
    this.observers = new ObserverList();
  }

  addObserver(observer) {
    this.observers.add(observer);
  }

  removeObserver(observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
  }

  notify(context) {
    const observerCount = this.observers.count();
    for (let i = 0; i < observerCount; i++) {
      this.observers.get(i).update(context);
    }
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(context) {
    console.log(`${this.name} got notified: ${context}`);
  }
}

// Concrete Subject
class ConcreteSubject extends Subject {
  constructor(element) {
    // Call the constructor of the super class.
    super();
    this.element = element;

    // Clicking the checkbox will trigger notifications to its observers
    this.element.onclick = () => {
      this.notify(this.element.checked);
    };
  }
}

// Concrete Observer

class ConcreteObserver extends Observer {
  constructor(element) {
    super();
    this.element = element;
    this.name = 'concrete observer' + Math.round(Math.random() * 100);

    // console.log(typeof ConcreteObserver.instance === 'object');
    // if (typeof ConcreteObserver.instance === 'object') {
    //   return ConcreteObserver.instance;
    // }
    // ConcreteObserver.instance = this;
  }

  // Override with custom update behaviour
  update(value) {
    super.update(value);
    this.element.checked = value;
  }
}

// References to our DOM elements
const addBtn = document.getElementById('addNewObserver');
const container = document.getElementById('observersContainer');
const controlCheckbox = new ConcreteSubject(
  document.getElementById('mainCheckbox')
);

const addNewObserver = () => {
  // Create a new checkbox to be added
  const check = document.createElement('input');
  check.type = 'checkbox';
  const checkObserver = new ConcreteObserver(check);

  // Add the new observer to our list of observers
  // for our main subject
  controlCheckbox.addObserver(checkObserver);

  // Append the item to the container
  container.appendChild(check);
};

addBtn.onclick = addNewObserver;

// observer pattern with singleton
