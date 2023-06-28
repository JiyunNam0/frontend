// 인터페이스

// 타입 별칭 vs 인터페이스

type Human = {
    born: number;
    name: string;
}

interface Human2 {
    born: number;
    name: string;
}

let student6: Human;

student6 = {
    born: 2000,
    name: "seungah",

}

// student6 = "Oad";

//? 인터페이스
// 타입 검사기가 타입 별칭보다 더 빨리 작동
// 오류 메시지를 더 구체화하여 보여줌

interface LabelledValue {
    label: string;
}

function printLabel(labbelledOdj: LabelledValue) {
    console.log(labbelledOdj.label);
}

let mtObj = {size: 0, label: "Size 10 Object"};
printLabel(mtObj);

//? 선택적 프로퍼티

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig) : {color: string, area: number} {
    let newSquare = { color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({color: "black"});
console.log(mySquare);

interface User1 {
    name: string;
    age: number;
    etc?: boolean; //선택속성
}

//! 익명 인터페이스

let ceo: {
    name: string;
    age: number;
    etc?: boolean;
} = {name: "jiyun", age: 88};

function printCeo(me: {name: string, age: number, etc?: boolean}) {
    console.log(
        me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`
    )
}

printCeo(ceo);

//! 읽기전용 속성 (외부사람들이 수정이 불가)
interface Page {
    readonly text: string;
}

function read(Page: Page) {
    //text의 속성을 수정하지 않고 읽는것

}

//! 인터페이스 확장 
// extends

interface Writting2 {
    title: string;
}

interface Book extends Writting2 {
    pages: number;
}

let myBook: Book = {
    pages: 200,
    title: "hello",
}