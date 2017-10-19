function getHello(name) {
    return "Hello " + name;
}
var varName = 'Felipe';
document.body.innerHTML = getHello(varName);
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var getCar = function (car) {
    console.log(car.brand, car.name, car.power);
};
var Camaro = new Car();
Camaro.brand = "Chevrovar";
Camaro.name = "Camaro";
Camaro.power = 160;
//Camaro.age = 2017
getCar(Camaro);
//TIPOS BASICOS
var test = false;
var id = 2;
//---------------------------------
var decimal = 5.4;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
//---------------------------------
var nameP = "Felipe";
var car = 'Camaro';
var text = "<p>Name: " + nameP + "</p>\n                    <p>Car: " + car + "</p>";
document.body.innerHTML = text;
//ARRAYS
var arrFruits = ['Apple', 'Banana', 'Peach', 'Watermelon', 'Lemon'];
console.log(arrFruits);
var arrFruitsTS = ['Apple', 'Banana', 'Peach', 'Watermelon', 'Lemon'];
console.log(arrFruitsTS);
//ENUM
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);
console.log(Color[1]);
console.log(Color[2]);
console.log(Color[3]);
//ANY
var list = 3;
console.log(list);
list = 'String';
console.log(list);
//VOID
function printNumber(num) {
    alert(num);
}
printNumber(12);
//DECLARACOES DE VARIAVEIS DE SCOPO
var varCar = 'Ferrari';
function getVarCar(value) {
    var varCar = value;
    return varCar;
}
console.log(getVarCar('Camaro'));
console.log(varCar);
function testScope() {
    return varCar;
}
console.log(testScope());
function testA() {
    var a = 1;
    a = 2;
    var b = testB();
    a = 3;
    return b;
    function testB() {
        return a;
    }
}
console.log(testA());
function f(value) {
    var a = 100;
    var b = 0;
    if (value) {
        b = a + 1;
    }
    return b;
}
console.log(f(true));
console.log(f(false));
//------
function g(condition, x) {
    if (condition) {
        var x_1 = 100;
        // return x;
    }
    return x;
}
console.log(g(true, 10));
console.log(g(false, 10));
