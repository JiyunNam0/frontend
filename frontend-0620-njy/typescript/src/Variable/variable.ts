// var
// 함수레벨스코프, 호이스팅

function varExample() {
    // console.log(varVariable); //undefined
    var vayVariable = 'Hello Var';
    console.log(vayVariable); //Hello Var
}

varExample();

// let
// 블록레벨요소 블록({}) 내에서만 접근 가능
// 재선언은 불가능 재할당은 가능
// 호이스팅은 발생o, 초기화 이전에 변수에 접근하려고 하면 Reference Error 가 발생
// TDZ(temporal dead zone) 임시 사각 지대 오류 발생

function letExample() {
    // console.log(letVariable); // 선언되기전에 사용x Reference Error 발생
    let letVariable = 'Hello Let';
    console.log(letVariable); // Hello Let 
}

letExample();

// const
// 블록레벨요소 블록({}) 내에서만 접근 가능
// 재선언 불가능 , 재할당도 불가능
// 상수를 선언할 때 사용하는 변수, 선언과 동시에 초기화를 해야한다.

function constExample() {
    // console.log(constVariable); // 선언되기전에 사용x Reference Error 발생
    const constVariable = 'Hello Const';
    console.log(constVariable); // Hello Const
    // constVariable = 'Bye Const'; //에러 발생
}

constExample();

// 변수선언
// (타입스크립트에서 선언방식) -> 변수 변수명: 타입 = 값; 
// let Car = 'BMW';
let car: string = 'BMW';

// 타입 추론(Type inference)
let color = "red"; //'color'는 자동으로 문자열 타입으로 추론됩니다.
// color = 1;

// 변수명(식별자) 지정 방법
/**
 *  식별자 : 변수, 함수, 클래스등을 고유하게 구분하는 이름
 * 
 *  식별자 규칙
 *  알파벳 문자, 달러($)기호, 밑줄(_)로 시작 / 이후에 숫자로 포함 가능
 *  공백을 포함할 수 없음(x)
 *  특수문자 포함할 수 없음(x)
 *  예약어를 사용할 수 없음(x) -> let const var ...
 * 
 */

let computer: string = "samsung book3";
let $name: string = "Jiyun";
let _color: string = "blue";
// let let: string = "Hello Const";
  


