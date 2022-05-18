let counter = 0;

const testModule = {
  incrementCounter() {
    counter++
    console.log(`counter value: ${counter}`);
    return counter;
  },
  resetCounter() {
    counter = 0;
    console.log(`resets counter to: ${counter}`);
  },
};

// -------------------
// ES2015+ keywords used: import, export, let, const

// A private counter variable
let myPrivateVar = 0;

// A private function which logs any arguments
// Parentheses are optional in ES2015+ when there is only one parameter
const myPrivateMethod = foo => {
  console.log(foo);
};

const myNamespace = {
  // A public variable
  myPublicVar: 'foo',

  // A public function utilizing privates
  myPublicFunction(bar) {
    // Increment our private counter
    myPrivateVar++;

    // Call our private method using bar
    myPrivateMethod(bar);
  },

  getPrivateCounter() {
    console.log('You have used', myPrivateVar, 'times public function');
    return myPrivateVar;
  }
};


// Default export module, without name
export { testModule, myNamespace };

