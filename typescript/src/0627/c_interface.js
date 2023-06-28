// 인터페이스
var student6;
student6 = {
    born: 2000,
    name: "seungah",
};
function printLabel(labbelledOdj) {
    console.log(labbelledOdj.label);
}
var mtObj = { size: 0, label: "Size 10 Object" };
printLabel(mtObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
//! 익명 인터페이스
var ceo = { name: "jiyun", age: 88 };
function printCeo(me) {
    console.log(me.etc ? "".concat(me.name, " ").concat(me.age, " ").concat(me.etc) : "".concat(me.name, " ").concat(me.age));
}
