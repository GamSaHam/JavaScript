// 상속
class Vehicle {
    constructor() {
        this.passengers = [];
        console.log("Vehicle created")
    }

    addPassenger(p) {
        this.passengers.push(p)
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        console.log("Car created");
    }
    
    deployAirbags() {
        console.log("BWOOSH!")

    }

}

const c = new Car();
c.addPassenger("Alice")

console.log(c);
console.log(c instanceof Car)
console.log(c instanceof Vehicle)


class Super {
    constructor() {
        this.name = 'Super'
        this.isSuper = true
    }
}

Super.prototype.sneaky = 'not recommended!'

class Sub extends Super {
    constructor() {
        super();
        this.name = 'Sub'
        this.isSub = true
    }
}

const obj = new Sub();

for(let p in obj) {
    console.log(`${p}:${obj[p]}`)
    console.log(obj.hasOwnProperty(p) ? '' : '(inherited)')
}
console.log("Object.keys")
Object.keys(obj).forEach(key => {
    console.log(key)
});


























