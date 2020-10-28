// 배열
// 비균질적
// Array생성자를 써서 배열을 만들수도 있다.
let arr = [];

arr.push(1);
let popValue = arr.pop()
console.log(popValue)

arr.unshift("a");
arr.unshift("b");
console.log(arr)
let shiftValue = arr.shift();
console.log(shiftValue)

let arr2 = [1,2,3];
arr2 = arr2.concat(4,5,6);
arr2 = arr2.concat([7,8,9])

console.log(arr2)

console.log(arr2.slice(3))
console.log(arr2.slice(2,4))

console.log(arr2.splice(1,1))

let arr3 = [1,2,3,4];
console.log(arr3.copyWithin(1,2)) // 사용할일 없을듯.

let arr4 = [1,2,3];
arr4.fill(0,1,2)
console.log(arr4)

arr4.reverse();

console.log(arr4)

let arr5 = [5,4,3,2,1];
arr5.sort();
console.log(arr5);

let arr6 = [{name: 'Suzanne'}, {name: "Jim"}, {name: "Trevor"}]
arr6.sort();
console.log(arr6); // 바뀌지 않음

arr6.sort((a,b) => {
    if(a.name > b.name){
        return 1;
    }else if(a.name < b.name){
        return -1;
    }else{
        return 0;
    }
});

console.log(arr6)


let arr7 = [1,2,3,4,5,2];
let resultIndexOf = arr7.indexOf(2)
console.log(resultIndexOf)

let resultLastIndexOf = arr7.lastIndexOf(2);
console.log(resultLastIndexOf)

let arr8 = [{id: 5, name: 'Judith'}, {id: 7, name: "Fancis"}]

// findIndex 함수 표현식 사용
let resultFindIndex = arr8.findIndex(o => o.id === 7)
console.log(resultFindIndex)

// find 객체 반환
let resultFind = arr8.find(o=> o.id === 7)
console.log(resultFind)

// some
let resultSome = arr8.some(o=> o.id === 7)
console.log(resultSome)

// every
let resultEvery = arr8.every(o=>o.id === 7)
console.log(resultEvery)

// map
let cart = [ { name: "Widget", price: 9.95}, {name: "Gadget", price: 22.95} ]
let names = cart.map(x => x.name)
console.log(names)

// filter
let cards = ['H', 'C', 'D', 'S']
let resultFilter = cards.filter(val => val !== 'H')
console.log(resultFilter)

// reduce
const arr9 = [1, 2, 3, 4]
const sum = arr9.reduce((a, x) => a += x, 2)
console.log(sum)

let arr10 = [1, 2, 3, 4];
delete arr10[1];
console.log(arr10)
console.log(arr10.join(','))









