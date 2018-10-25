// 자바스크립트 타입은 원시타입(primitive type)과 객체타입(object type)
// 으로 나눈다.

// 원시타입으로 숫자, 텍스트나열(문자, string), 불리언, (null, undefined) 독립적인 타입
// 객체타입(object) 이름과 값을 갖는 프로퍼티의 집합이다. 배열,함수도 객체타입의 한종류 이다.
// new 를 사용하는 함수가 있는데 생성자(constructor)라고 한다.
// 객체 종류에는 Date, RexExp, Error 등이 있다.

// 자바스크립트 인터프리터는 메모리를 관리하는데 가비지 컬랙션을 수행한다.
// 객체만이 메서드를 소유한다. null 과 undefined는 자바스크립트에서 유일하게 메서드를 가질 수 없는 값이다.
// 객체 , 원시
// 메서드 있는, 메서드 없는
// 수정가능한(mutable), 수정할수 없는(immutable)
// 객체와 배열은 수정가능한 타입이다.
// 숫자, 불리언, null, undefined 는 수정할 수 없는 타입이다.

// 자바스크립트의 값은 타입 변환이 자유롭다.
// 변수는 var 키워드로 선언한다. 
// 자바스크립트의 어휘 유효범위(scope)를 사용한다.
// 함수 밖에 선언된 변수는 전역변수이고 프로그램 어디서든 사용할 수 있다.

// 함수 안에 선언된 변수는 유효범위가 함수 영역이며 오직 함수 안에서만 사용할 수 있다.

// 3.1 숫자
// 다른 프로그래밍 언어들과 다르게 자바스크립트는 정수 값과 실수값을 구분하지 않는다.
// 자바스크립트에서는 모든 숫자를 실수로 표현한다.
// 자바스크립트의 숫자는 IEEE 754 표준에서 정의한 64비트 실수 형태로 표현
// 프로그램에 등장하는 숫자를 숫자 리터럴(numeric literal)이라고 한다.

// 3.1.1 정수 리터럴
// 자바스크립트에서 10진수 정수는 숫자를 일렬로 나열한 것이다.

/* example
0
3
1000
*/

/* 
// 16진수 0x, 0X로 시작한다.
0xff
*/

/*
// 8진수는 0으로 시작한다.
0123
// 1*64 + 2*8 + 3*1 == 83
*/

// ECMAScript5 엄격모드에서는 8진수 리터럴을 명시적으로 금지하고 있다.

// 3.1.2 부동소수점 리터럴
// 부동소수점 리터럴은 소수점을 가질 수 있다.
// 부동소수점 리터럴은 지수 표기법(exponential notation)으로도 표현할 수 있다.
/* example
6.02e4 // 6.02 * 10^4 == 60200
*/

// 3.1.3 산술 연산
// 자바스크립트에서는 산술 연산자를 사용하여 숫자를 다룬다.
// Math 객체를 통해서 수치 연산에 쓰이는 다양한 함수와 상수들이 프로퍼티 형태로 정의되어 있다.
// 자바스크립트의 산술 연산은 오버플로와 언더플로, 0으로 나누는 에러를 발생 시키지 않는다.
// 오버플로는 Infinity라고 표햔되고
// 언더플로는 0을 돌려준다. 정의되지 않는 값은 NaN으로 출력된다. 0/0

// Infinity, NaN 전역변수로 미리 정의된다.
// ECMAScript5 에서는 Infinity와 NaN을 읽기 전용 값으로 정의한다.
// Number 객체는 Infinity NaN을 따로 상수로 정의되어있다.

/*
Infinity;
Number.POSITIVE_INFINITY;
1/0;

Number.MAX_VALUE + 1; // 1.7976931348623157e+308

// -Infinity
Number.NEGATIVE_INFINITY;
NaN;
Number.NaN;
0/0;
Number.MIN_VALUE/2 // underflow 0
*/

/*
var x=NaN;
if(x == NaN){
	console.log("is NaN");
}
// 위와 같이 사용할 수 없다. 아래와 같이 사용 해야 한다.

if(isNaN(x)){
	console.log("is NaN");
}
*/

/*

var x=Infinity;
if(x == Infinity){
	console.log("is Infinity");
}

//x = NaN;
//x = Infinity;
//x = -Infinity;
if(isFinite(x)){ // 위 3개일 경우 true를 리턴한다.
	console.log("is Finite");
}

*/

/*

var zero = 0;
var negz = -0;

console.log(zero === negz) // true
console.log(1/zero === 1/negz) //false

*/

// 3.1.4. 이진 부동소수점과 반올림
// 이진표현법으로는 0.1과 같은 간단한 값도 정확하게 표현할 수 없다.

//example
/*
var x = 0.3 - 0.2;
var y = 0.2 - 0.1;

console.log(x==y);
*/


// 자바스크립트의 결함이 아니라 부동소수점 숫자를 사용하는 프로그래밍 언어에서 볼
// 수있는 공통적인 현상이다.
// 소수점이 포함된 달러 대신 정수 값이 센트로 화폐단위를 변경하는 경우처럼 말이다.

















