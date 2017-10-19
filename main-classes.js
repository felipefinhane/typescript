var Car = /** @class */ (function () {
    function Car(name, color, power) {
        this.name = name;
        this.color = color;
        this.power = power;
    }
    ;
    Car.prototype.printCar = function () {
        console.log(this.name, this.color, this.power);
    };
    return Car;
}());
var camaro = new Car('Camaro', 'Yellow', 155);
camaro.printCar();
var Car2 = /** @class */ (function () {
    function Car2(name, color, power) {
        this._name = name;
        this._color = color;
        this._power = power;
        Car2.list.push(name);
    }
    Object.defineProperty(Car2.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car2.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car2.prototype, "power", {
        get: function () {
            return this._power;
        },
        set: function (power) {
            this._power = power;
        },
        enumerable: true,
        configurable: true
    });
    Car2.list = [];
    return Car2;
}());
var ferrari = new Car2('Ferrari', 'Red', 245);
console.log(Car2.list);
console.log(ferrari);
console.log(ferrari.name);
console.log(ferrari.color);
console.log(ferrari.power);
var mustang = new Car2('Mustang', 'Blue', 189);
console.log(Car2.list);
