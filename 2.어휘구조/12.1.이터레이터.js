
const book = [
    "Twinkle, twinkle, little bat!"
   ,"How I wonder what you're at!"
   ,"Up above the world you fly,"
]

const it = book.values();

let current = it.next();
while(!current.done){
    console.log(current.value)
    current = it.next()
}

class Log {

    constructor() {
        this.messages = [];
    }

    add(message) {
        this.messages.push({message, timestamp: Date.now()})
    }

    [Symbol.iterator]() {
        return this.messages.values();
    }

}

const log = new Log();
log.add('first day at sea')
log.add('spotted whale')
log.add('spotted another vessel')

for(let entry of log) {
    console.log(`${entry.message} @ ${entry.timestamp}`)
}

class FibonacciSequence {
    [Symbol.iterator]() {
        let a = 0, b = 1;
        return {
            next() {
                let rval = { value:b , done:false }
                b += a;
                a = rval.value;
                return rval;
            }
        }
    }
}


const fib = new FibonacciSequence();
let i =0;
for(let n of fib){
    console.log(n);
    if(++i > 9) break;
}


// 제네레이터
function* rainbow() {
    yield 'red';
    yield 'orange';

}

const it2 = rainbow();

console.log(it2.next())
console.log(it2.next())

// 이터레이터를 반환 하므로 for...of 루프를 사용할 수 있다.
for(let color of rainbow()) {
    console.log(color)
}

function* interrogate() {
    const name = yield "What is your name?";
    const color = yield "What is your favorite color?";
    return `${name}'s favorite color is ${color}.`;
}

const it3 = interrogate();
console.log(it3.next())
console.log(it3.next('Ethan'))
console.log(it3.next('orange'))

function* abc() {
    yield 'a';
    yield 'b';
    return 'c';
}

const it4 = abc();
console.log(it4.next())
console.log(it4.next())
console.log(it4.next())













