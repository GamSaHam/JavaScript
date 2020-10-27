
// scope

function f(x) {
    return x+3;
}
f(5); // 8
// x; // ReferenceError: x is not defined

{
    let x = 'blue'
    console.log(x)
    {

        let x = 3;
        console.log(x);

    }
    console.log(x);
}

console.log(typeof x)
// variable masking 이 이루어진다.
// 정적 스코프 -- 전체적인 스코프 영역
// 블럭 스코프 -- {} 으로 되어진 스코프 영역

let globalFunc;
{
    let blockVar = 'a';
    globalFunc = function() {
        console.log(blockVar)
    }

}
globalFunc()

// globalFunc은 블록안에 할당 받고 , 전역 스코프가 클로저를 형성한다.
// 스코프를 빠져 나왔음에도 블구하고 blockVar에 접근할 수 있다.

let f2;
{
    let o = {note : 'Safe'}
    f2 = function() {
        return o;
    }
}

let oRef = f2();
oRef.note2 = "Not so safe after all!"

console.log(oRef)

// 정적블록에 정의된 것이 블록안에 있는 변수를 사용할때
// 정적블록에 정의된 것은 클로저가 형성이 된다. <- 내부적으로 어떻게 동작하는지는 모름

const message = () => {
    const secret = "I'm a secret!"
    return secret;
}

console.log(message())

// 함수 스코프
{

    {
        var var1 = 1;
    }
    console.log(var1)
    
}

// var 는 let 키워드에 비해 갇는 장점이 존재 하지 않는다.
// ES5 이전에 쓰였던 구문


// 함수 호이스팅 var와는 다르게 함수는 호이스팅이 가능하다.
// 호이스팅이란 선언이 아래 있어도 호출 가능한것
f()
function f() {
    console.log('f')
}

// 함수 표현식은 호이스팅이 불가능 하다.

// f3() error
let f3 = () => { console.log('f3')}











