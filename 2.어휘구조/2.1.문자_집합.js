// 자바스크립트 프로그램은 Unicode 문자 집합을 사용해 작성된다.
//ECMAScript 5 표준은 Unicode 3이상을 지원해야 한다.

// 2.1.1 대소문자 구분
// 키워드, 변수, 함수, 식별자 모두 항상 대소문자를 구분해 입력한다.
// ex) while (o) , While(x)
// 그러나 HTML에 태그 및 속성이름은 대소문자를 구별하지 않는다 XHTML 은 대소문자를 구별한다.

// 2.1.2 공백, 줄바꿈, 제어 문자
// 자바스크립트는 프로그램 코드 내의 토큰들 사이에 있는 공백들을 무시한다.

// 2.1.3 유니코드 이스케이프 시퀀스
// "cafe''" === 'caf\u00e9'

// 2.1.4 유니코드 정규화
// "e" \u00E9로 표현 할수 있다.

// 2.2
// 자바스크립트는 두가지 주석을 제공한다.
// //와 /* */

// 2.3. 리터럴(literal)은 직접나타나는 데이터 값이다.
12 // 숫자
1.2 // 숫자1.2
"Hello World" // 문자열
'Hi' // 다른 문자열
true // 불리언
false // 불리언
var rex = /javascript/gi;// 정규표현식
null // 객체가 존재 하지 않음
var obj = { x:1, y:2} // 객체 초기자
var arr = [1,2,3,4] // 배열 초기자

// 2.4 식별자
// 식별자(identifier)는 간단히 말해 이름이다.
// 자바스크립트의 식별자의 첫 글자는 알파벳, 밑줄 혹은 달러 표시여야 한다.
// 이어지는 문자들은 숫자, 밑줄 혹은 달러 표시여야 한다.

// 2.4.1 예약어
// 자바스크립트는 몇 가지 식별자를 미리 선점하고있다.

// 2.5.1 선택적인 세미콜론 사용
// 문장이 각각 다른 줄에 작성 되어있으면 세미클론을 생략 할 수 있다.

/* example
a = 10 b = 20; //error

a = 10  // ok
b = 20
*/

/*
var a
a
=
3

// 위에 코드는 아래와같이 해석된다. var a 에서 자동으로 var a;로 해석되어지기 떄문에

var a; a=3
*/ 

// 선택적이지만 혼돈을 방지하기 위해 필수적으로 세미클론을 사용하는 것을 권장한다.




