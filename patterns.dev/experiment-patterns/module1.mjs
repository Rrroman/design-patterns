// Usage:

// Import module from path
import { testModule, myNamespace } from './module2.mjs';

// Increment our counter
testModule.incrementCounter();
testModule.incrementCounter();
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();

myNamespace.myPublicFunction('Bob');
myNamespace.myPublicFunction('Hello World!');
myNamespace.getPrivateCounter();