// 문자열은 16비트 값들이 연속적으로 나열된 변경이 불가능한 값으로, 각 문자는 유니코드 문자로 표현 된다.
// 문자열은 0이 시작이다. 그래서 빈 문자열은 길이가 0이다.

// 3.2.1 문자열 리터럴
// 문자열은 작은 따옴표 혹은 큰 따옴표로 표현할 수 있다.
// ECMAScript 5부터 \ 백슬레쉬를 이용 하여 문자열 줄바꿈을 통하여 문자를 정의할 수 있다.

// example
// var str;
// str = 
// "Hello\
// World";

// console.log(str);

// 작은 따옴표를 표현하려면 작은 따옴표로 감싸진 아포스트로피를 '이스케이프' 시키기 위해
// 백슬레쉬가 필요하다.

// example
// console.log("O\'Reilly");

//<button onclick = "alert('Thank you');">Click Me</button> 이런형식으로 많이 쓰인다.

// 3.2.2.문자열_리터럴_내의_이스케이프_문자열
// var val = '\u0022';

// console.log(val);

// 3.2.3.문자열_다루기
// + 연산자를 사용하여 문자열을 붙일 수 있다.
// var msg = "Hello" + " " + "Wolrd";
// console.log(msg);

// 문자열 길이를 알고 싶으면 length 프로퍼티를 사용하라
// console.log("Hello World".length);

// example
// var s = "Hello,World";

// console.log(s.charAt(0)); // "H"
// console.log(s.charAt(s.length-1)); // "d"
// console.log(s.substring(1,4)); // "ell"
// console.log(s.slice(1,4)); // "ell"
// console.log(s.slice(-3)); // "rld"


// console.log(s.substr(1,4)); // "ello" -- 시작점과, 문자열 갯수
// console.log(s.substring(1,4)); // "ell" -- 시작점과, 끝나는 지점

// // substring 과 slice 는 똑같이 동작하지만 음수가 들어가면 동작이 달라진다.

// console.log(s.slice(-3,-2));
// console.log(s.substring(-2, 3)); // 마이너스가 0으로 취급된다.

// console.log(s.indexOf("l"));
// console.log(s.lastIndexOf("l"));

// console.log(s.indexOf("l",4)); // 문자열 4이후 l이 나온 위치
// console.log(s.split(",")[0]); //  문자열 , 나누기
// console.log(s.replace("o", "t")); // 문자 하나를 t로 전환
// console.log(s.replace(/o/gi, "t")); // 모든 문자 "o"는 "t"로 전환


// 3.2.4. 패턴 매칭
// 자바스크립트는 문자 패턴을 나타내는 객체를 생성하기 위해 RexExp() 객체를 생성한다.
// 자바스크립트 정규표현식은 펄(Perl)위 구문을 따른다.

var rex;

// rex = /^HTML/; // HTML
// rex = /[1-9][0-9]*/; // 0이 아닌 숫자
// rex = /\bjavascript\b/i; // 대소문자 구문이 없는 javascript
// console.log(rex.test("avascript"));

// var text = "testing: 1, 2, 3"; // 간단한 문자열
// var pattern = /\d+/g; // 하나 이상의 모든 숫자와 일치
// console.log(pattern.test(text)); // 일치하는 문자가 있는지
// console.log(text.search(pattern)); // 일치하는 문자의 인덱스 반환
// console.log(text.match(pattern)); // 일치하는 문자의 배열을 반환
// console.log(text.replace(pattern, "#")); // 정규표현식으로 replace
// console.log(text.split(/\D+/));

//3.3. 불리언 값
// 불리언 값은 true , false 로 표현된다.
// var a = 20;
// a == 10;

// console.log(a);

// undefined;
// null;
// 0;
// -0;
// NaN;
// "";

// 다음은 모두 불리언 false로 변한다.
// if(null == undefined){
// 	console.log("== operation");
// }

// var o = 10;
// if(o){
// 	console.log("Variable o is defined");
// }































