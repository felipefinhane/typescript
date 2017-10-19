function getHello(name:string ) {
    return "Hello " + name;
}

var varName = 'Felipe';

document.body.innerHTML = getHello(varName);


interface iCar {
    brand:string;
    name:string;
    power:number;
    //age: number
}


class Car {
    brand:string;
    name:string;
    power:number;
}

var getCar = function(car:iCar) {
    console.log(car.brand, car.name, car.power)
};

var Camaro = new Car();
Camaro.brand = "Chevrovar";
Camaro.name = "Camaro";
Camaro.power= 160;
//Camaro.age = 2017

getCar(Camaro);


//TIPOS BASICOS

var test:boolean = false;
var id:number = 2;

//---------------------------------

var decimal:number = 5.4;
var hex:number = 0xf00d;
var binary:number = 0b1010;
var octal:number = 0o744;

//---------------------------------

var nameP:string = "Felipe";
var car:string = 'Camaro';
var text:string = `<p>Name: ${nameP}</p>
                    <p>Car: ${car}</p>`;

document.body.innerHTML = text;

//ARRAYS
var arrFruits:string[] = ['Apple', 'Banana', 'Peach', 'Watermelon', 'Lemon'];
console.log(arrFruits);

var arrFruitsTS:Array<String> = ['Apple', 'Banana', 'Peach', 'Watermelon', 'Lemon'];
console.log(arrFruitsTS);


//ENUM
enum Color {Red = 1, Green, Blue};
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);
console.log(Color[1]);
console.log(Color[2]);
console.log(Color[3]);


//ANY
var list:any = 3;
console.log(list);
list = 'String';
console.log(list);


//VOID
function printNumber(num:number) : void {
    alert(num);
}

printNumber(12);


//DECLARACOES DE VARIAVEIS DE SCOPO
var varCar:string = 'Ferrari';

function getVarCar(value:string):string {
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


function f(value:boolean) {
    let a  = 100;
    let b = 0;
    if (value) {
        b = a + 1;
    }
    return b;
}

console.log(f(true));
console.log(f(false))


//------
function g(condition:boolean, x:number):number {
    if (condition) {
        let x = 100;
        // return x;
    }
    return x;
}

console.log(g(true, 10));
console.log(g(false, 10));