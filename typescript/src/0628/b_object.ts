// 객체

let obj: { name: string, age: number } = {
    name: "Jiyun",
    age: 90,
};

//! 객체에서 속성 접근
//? 점 표기법
console.log(obj.name); //Jiyun
obj.name = "Jiyun2"; // 객체에서 속성 수정

//? 대괄호 표기법 -> 잘 사용 안함
console.log(obj["age"]); // 90

//! 객체와 함수
let obj2: {
    name: string,
    age: number,
    greet: () => string; // 반환값으로 string

} = {
    name: "Jiyun",
    age: 90,
    greet() {
        return `Hello, my name is ${this.name}`;
    },
};

console.log(obj2.greet());

//! 

interface Obj3 {
    name: string,
    age: number,
    greet: () => string;
};

let obj4: Obj3 = {
    name: "miea",
    age: 20,
    greet() {
        return `Hello, my name is ${this.name}`;
    },
};