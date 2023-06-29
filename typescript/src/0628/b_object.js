// 객체
var obj = {
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
var obj2 = {
    name: "Jiyun",
    age: 90,
    greet: function () {
        return "Hello, my name is ".concat(this.name);
    },
};
console.log(obj2.greet());
