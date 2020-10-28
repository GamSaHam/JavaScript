
let o = { a: 1, b: 2}

// hasOwnProperty - 상속된 프로퍼티가 for in 에 나타날 위험을 제거한다.
for(let prop in  o){

    if(!o.hasOwnProperty(prop))
        continue;

    console.log(`${prop}`)
}

const SYM = Symbol();

const o2 = { apple: 1, xochitl: 2, ballon: 3}

// Object.keys 를 사용할 경우 hasOwnProperty를 사용하지 않아도 된다.
Object.keys(o2).forEach(prop => console.log(`${prop}`))
console.log("\n")
Object.keys(o2)
    .filter(prop => prop.match(/^x/))
    .forEach(prop => console.log(`${prop}`));

// Class
// type object이다.
class Car {

    constructor(userGear){
        this.userGears = ['P', 'N', 'R', 'D']
        this.userGear = this.userGears[0];
    }

    shift(gear){
        this.userGear = gear
    }
}

const car1 = new Car();

console.log(car1)
console.log(typeof car1)
console.log(car1 instanceof Car)

car1.shift('D')
console.log(car1)

const Car2 = (function(){
    const carProps = new WeakMap();

    class Car2 {
        constructor(){
            this._userGears = ['P', 'N', 'R', 'D']
            carProps.set(this, {userGear: this._userGears[0]})
        }
        
        get userGear() {return carProps.get(this).userGear}
        set userGear(value) {
            if(this._userGears.indexOf(value) < 0)
                throw new Error(`Invalid gear: ${value}`)
            carProps.get(this).userGear = value
        }
        shift(gear) {this.userGear = gear}
    }

    return Car2;
})();

let car2 = new Car2();

car2.shift('N')
console.log(car2.userGear)

class Es6Car {}
function Es5Car() {}

// class 는 함수형이다.
console.log(typeof Es6Car)
console.log(typeof Es5Car)

// 프로토 타입

















