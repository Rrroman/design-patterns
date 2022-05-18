class TeslaCar {

	constructor(model, price, interior, autopilot) {
		this.model = model;
		this.price = price;
		this.interior = interior;
		this.autopilot = autopilot;
	}

	produce() {
		return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
	}
}
 
const prototypeCar = new TeslaCar('Model S', 25000, 'black', true);
const myTesla = prototypeCar.produce();
const myTesla2 = prototypeCar.produce();
 
myTesla2.model = 'Model X';
myTesla2.autopilot = true;
 
console.log(myTesla, myTesla2);
