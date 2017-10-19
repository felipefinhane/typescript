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