// 튜플 : 형태가 횟수가 지정

let dayAndEvent: [number, string];

dayAndEvent = [1225, "Christmas"];

let [day, event_] = Math.random() > 0.5 ? [1225, "Christmas"] : [314, "whiteDay"];

//! 튜플의 할당 가능성
const A = [false, 123];
// const AB: [boolean, number] = A;

// 타입이 같더라도 배열을 튜플에 할당 할 수 없다.

//! 나머지 매개변수

// (string | number)[] : 배열
function logIn(name: string, value:number) {
    console.log(`${name} has ${value}`);
}

const pairArray = ["seungah", 1];

// logIn(...pairArray);

//! 튜플 추론
function helloAndHi(input: string) {
    return[input[0], input.length];
}

const [hello, hi] = helloAndHi("Hello");