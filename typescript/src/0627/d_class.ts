// 클래스

// 기본형태
// class 클래스 이름 {
// [ private | protected | public ] 속성이름: 속성타입
// }

class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name= name;
        this.age = age;
    }

    greet() {
        return `Hello, ${this.name}`;
    }
}

let user = new User("jiyun", 50);
console.log(user);

// 클래스의 생성자(constructor) -> 메서드
class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        // 생성자의 매개변수에 (public과 같은 접근 재한자를 붙이면) 해당 매개변수의 이름을 가진 속성이 클래스에 선언된 것처럼 동작
    }
}

let jiyun: Student = new Student("jiyun", 66);
console.log(jiyun);

class Student2 {
    constructor(public name: string, public age: number) {
    }
}

let jiyun2: Student2 = new Student2("jiyun2", 66);
console.log(jiyun2);

//접근제어가
// 클래스 속성은 public, private, protected와 같은 접근 제한자를 속성 이름 앞에 붙일 수 있다.

//만약 생략하면 모두 public으로 간주

// public(기본값): 어디서든 접근 가능
// 클래스 내부, 하위 클래스, 인스턴스 등 모든 곳에서 해당 맴버를 볼 수 있다,
// 명시적 표시 x

class Car {
    public color: string;

    constructor(color: string) {
        this.color = color;
    }
}

// private: 오직 해당 클래스 내부에서만 접근 가능
// 클래스 외부 ,하위 클래스에서는 이멤버를 볼 수 없습니다.

class Car2 {
    private engineOn: boolean;

    constructor() {
        this.engineOn = false;
    }

    startEngine() {
        this.engineOn = true;
    }
}

// new Car2(true).engineOn; 

//protected 해당 클래스와 하위 클래스 내부에서 접근이 가능
// private 유사하게 외부에서는 볼수 없지만, protected는 하위 클래스에서는 접근 가능

class Vehicle {
    protected speed: number;

    constructor() {
        this.speed = 0;
    }
}

class Car3 extends Vehicle {
    accelerate() {
        this.speed += 10;
    }
}

// 캡슐화와 정보은닉 등의 객체지향 프로그래밍 원칙을 적용하는데 도움
// 클래스 내부 상태를 보호, 사용자에게 클래스의 사용방법을 더 명확하게 전달

// 클래스의 인터페이스 구현
interface Person {
    name: string;
    age: number;
}

class PerA implements Person { //? 생성자 사용 안할때 느낌표 
    name!: string;
    age!: number;
}

// 추상 클래스

// abstract 키워드 사용

abstract class teacher {
    abstract name: string; //해당 속성을 상속하는 다른 클래스에서 이속성이나 메서드를 구현
    constructor (public age? : number) {}
}

// 속성 앞에 abstract 사용하면 new연산자를 사용해서 객체를 만들수 없음

// 클래스의 상속
class Animal {
    move(distance: number = 0) {
        console.log(`Animal moved ${distance}`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("woof!!!");
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);

// static 속성
// 정적인 속성을 가질 수 있다.

class ABC {
    static initValue = 1;
    // 클래스 객체에서는 직접적으로 접근할수 없음
    // 오직 클래스 자체에서만 접근 가능
    // 상속 x, 하위클래스에서 재정의 x
}

let inVal = ABC.initValue;
