class OfficialDealer {
  constructor() {
    this.customers = [];
  }
  orderAuto(customer, auto, info) {
    const name = customer.getName();
    console.log(`Order name: ${name}. Order auto is ${auto}`);
    console.log(`Additional info: ${info}`);
    this.addToCustomersList(name);
  }
  addToCustomersList(name) {
    this.customers.push(name);
  }
  getCustomerList() {
    return this.customers;
  }
}

class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }
  getName() {
    return this.name;
  }
  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info);
  }
}
 


const mediator = new OfficialDealer();
const bob = new Customer('Bob', mediator);
bob.makeOrder('Tesla', 'I want to buy a Tesla with new engine');

const mike = new Customer('Mike', mediator);
mike.makeOrder('Audi', 'I want to buy a Audi with a good price');

console.log(mediator.getCustomerList().join(', '));

