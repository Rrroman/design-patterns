class Driver {
  execute(command) {
		command.execute();
	}
};

class Engine {
	constructor() {
		this.state = false;
	}

	on() {
		this.state = true;
	}

	off() {
		this.state = false;
	}
};

class OnStartCommand {
	constructor(engine) {
		this.engine = engine;
	}

	execute() {
		this.engine.on();
	}
};

class OnSwitchOffCommand {
	constructor(engine) {
		this.engine = engine;
	}

	execute() {
		this.engine.off();
	}
};


const myEngine = new Engine();
console.log(myEngine)
const onStartCommand = new OnStartCommand(myEngine);
const onSwitchOffCommand = new OnSwitchOffCommand(myEngine);

const driver = new Driver();
driver.execute(onStartCommand);
console.log(myEngine)
driver.execute(onSwitchOffCommand);
console.log(myEngine)

// Manager example
class OrderManager {
  constructor() {
    this.orders = [];
  }

  execute(command, ...args) {
    return command.execute(this.orders, ...args);
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

function PlaceOrderCommand(order, id) {
  return new Command(orders => {
    orders.push(id);
    console.log(`You have successfully ordered ${order} (${id})`);
  });
}

function CancelOrderCommand(id) {
  return new Command(orders => {
    orders = orders.filter(order => order.id !== id);
    console.log(`You have canceled your order ${id}`);
  });
}

function TrackOrderCommand(id) {
  return new Command(() =>
    console.log(`Your order ${id} will arrive in 20 minutes.`)
  );
}

const manager = new OrderManager();

manager.execute(new PlaceOrderCommand("Pad Thai", "1234"));
manager.execute(new TrackOrderCommand("1234"));
manager.execute(new CancelOrderCommand("1234"));
