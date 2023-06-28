//타입 애너테이션

let phone;
phone = "Galaxy";

phone.toUpperCase();
phone = 123;
// phone.toUpperCase();

let phone2: string;
phone2 = "IPhone";

//? 타입형태
//타입스크립트는 변수에 할당된 값이 원래 타입과 일치하는지 확인하는것 이상을 수행

let phone3 = "Galaxy S23";
phone3.length;
// phone3.push('!'); //'string' 형식에 'push' 속성이 없습니다

const artist = {
    firstName: "Jiyun",
    lastName: "Nam"
};

// artist.middleName; //{ firstName: string; lastName: string; }' 형식에 'middleName' 속성이 없습니다.