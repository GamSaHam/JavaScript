// 자바스크립트에서는 함수도 객체이다.

// default 형식
function f(a = 0){

    console.log(a)
}

f();

const o = {
    name: 'Wallance',
    speak() { return `My name is ${this.name}!` }
}

console.log(o.speak())

const speack = o.speak;
console.log(speack === o.speak)
console.log(speack()) // My name is undefined!

// 이러한 사황때문에 this를 잘 사용하지 않음

// 익명 함수
const f2 = function() {
    return "hello!"
}

// arrow function
const f3 = () => "hello!"

console.log(f2())
console.log(f3())


// call과 apply, bind

// call
const bruce = {name : 'Bruce'}
const madeline = {name: 'Madeline'}

function greet() {
    console.log(`Hello, I'm ${this.name}!`);
}


greet(); // "Hello, I'm undefined!" - this는 어디에도 묶이지 않는다.
greet.call(bruce); // "Hello, I'm Bruce!"



function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occupation = occupation;
}

update.call(bruce, 1949, 'singer')
console.log(bruce)

// apply 는 배열로 매개변수를 받는거 외에 call 과 같다.
update.apply(madeline, [1955, 'actor'])
console.log(madeline)

// bind
const updateBruce = update.bind(bruce)

updateBruce(1904, "actor")
updateBruce.call(madeline, 1274, "king") // medeline 값은 변하지 않음 bind딩 되어서

console.log(bruce)
console.log(madeline)

// bind 를 사용하면 call이나 apply 가 무시 되무로 사용에 유의해야 한다.



























