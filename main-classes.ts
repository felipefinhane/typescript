class Car {
    constructor (
        public name:string,
        public color:string,
        public power:number
    ){
    };

    printCar():void {
        console.log(this.name, this.color, this.power);
    }
}

var camaro = new Car('Camaro', 'Yellow', 155);
camaro.printCar();

class Car2 {
    private _name:string;
    private _color:string;
    private _power:number;
    
    public static list:Array<string> = [];

    constructor(name:string, color:string, power:number) {
        this._name = name;
        this._color = color;
        this._power = power;
        Car2.list.push(name);
    }

    set name(name:string) {
        this._name = name;
    }

    get name():string {
        return this._name;
    }

    set color(color:string) {
        this._color = color;
    }

    get color():string {
        return this._color;
    }

    set power(power:number) {
        this._power = power;
    }

    get power():number {
        return this._power;
    }
    
}


var ferrari = new Car2('Ferrari', 'Red', 245);
console.log(Car2.list);
console.log(ferrari);
console.log(ferrari.name);
console.log(ferrari.color);
console.log(ferrari.power);

var mustang = new Car2('Mustang', 'Blue', 189);
console.log(Car2.list);
