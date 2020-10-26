let obj = {}

obj.color = 'yellow'; 

obj["not an identifier"] = 3;

const SIZE = Symbol();

obj[SIZE] = 9;

obj.SIZE = 10;

console.log(obj);

// 객체 프로퍼티 제거
// delete 객체 프로퍼티
delete obj.SIZE;

console.log(obj);

const s = "hello";

// 일시적인 객체 프로퍼티에 할당 , 임시 객체는 즉시 파괴되므로 s.rating은 undefined
s.rating = 3;
console.log(s.rating);

// 배열은 특수한 객체
// 자바스크립트 배열은 동적 배열, 리크드 리스트를 혼합
// 배열크기가 고정되지 않음
// 데이터 타입의 요소를 가리지 않음
// 배열 요스는 0으로 시작

const array = [1, 'two', 3, function () { console.log('Hello World')}, null, {}, [1,2,3]]

array.forEach(element => {
    console.log(typeof element)
});

console.log(array.length);

array[0] = 2;

console.log(array);

// 마지막 쉼표를 허용함
// trailing comma
let array2 = [
    1,
]

console.log(array2[0])

// Date type
let now = new Date();
console.log(now);

let halloween = new Date(2020, 9 ,31);
console.log(halloween)

// month, date, day, hours, minutes, milliseconds
halloween.getFullYear();

// 정규표현식
let emailRex = /[a-z0-9]/;
console.log(typeof emailRex)

// Map , Set

let numStr = "33.3"
let num = Number(numStr)
console.log(typeof num + " value:"+ num)

let numDecimal = parseInt('15', 10)
let numHexaDecimal = parseInt('15', 16)
console.log(numDecimal + "," + numHexaDecimal)

let d = new Date();
console.log(typeof d.valueOf() + " ,value="+d.valueOf())

// 삼항 연산자
let n = true ? 1 : 0
console.log(typeof n + ",value=" + n)

//toString

// Bolean
const n2 =0;
console.log(!!n2)
console.log(typeof Boolean(n2))























