const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('event', () => {
    console.log('event has occurred');
});

eventEmitter.on('sum', (num1, num2) => {
    console.log(num1 + num2);
});

eventEmitter.emit('event');
eventEmitter.emit('sum', 6, 9);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let rajat = new Person('Rajat');

rajat.on('name', () => {
    console.log(`Nice to meet you. My name is ` + rajat.name);
});

rajat.emit('name');