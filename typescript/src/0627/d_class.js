// 클래스
// 기본형태
// class 클래스 이름 {
// [ private | protected | public ] 속성이름: 속성타입
// }
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.greet = function () {
        return "Hello, ".concat(this.name);
    };
    return User;
}());
var user = new User("jiyun", 50);
console.log(user);
