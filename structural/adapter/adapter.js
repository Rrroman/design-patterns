class Engine2 {
	simpleInterface() { console.log('Engine 2.0 - tr-tr-tr') }
}

class EngineV8 {
	complicatedInterface() { console.log('Engine V8! - wroom wroom!') }
}

class EngineV8Adapter {
	constructor(engine) {
		this.engine = engine;
	}

	simpleInterface() {
		this.engine.complicatedInterface();
	}
}

class Auto {
	startEngine(engine) {
		engine.simpleInterface()
	}
}

const myTesla = new Auto();
myTesla.startEngine(new EngineV8Adapter(new EngineV8()));
