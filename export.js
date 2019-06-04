const PI = 3.14159;
const product = (num1, num2) => {
    return num1 * num2;
}
class objectExample {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

// module.exports.PI = PI;
// module.exports.product = product;
// module.exports.objectExample = objectExample;

module.exports = { PI : PI, product : product, objectExample : objectExample };