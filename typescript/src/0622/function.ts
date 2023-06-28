// 함수

//! 함수 매개변수

function sing(song: string) {
    console.log(`Singing: ${song}`)
}

//! 필수 매개변수
function sing2(first: string, second: string) {
    console.log(`${first} / ${second}`);
}

// sing2("hello"); // 2개 인수인데 한개만 가져왓음 오류
sing2("hello", "hi");
// sing3("hello", "hi", "bye"); //2개인수인데 세개 가져옴 오류

//! 선택적 매개변수 (넣을지 말지 고민되는 부분 을 선택적 매개변수로 지정)

function music(song: string, singer?: string) { //?<는 선택사항 타입에 무조건 undifined 포함
    console.log(`Song: ${song}`);

    if(singer) {
        console.log(`Singer: ${singer}`);
    }
}

music("clap");
music("clap", undefined);
music("clap", "seventeen");

function announceMusic(song: string, singer: string | undefined) {

}

// announceMusic("clap"); // 유니언 이라 오류 발생 2개인수인데 1개만 가져옴 (오류)
announceMusic("clap", undefined);
announceMusic("clap", "seventeen");

//! 기본 매개변수
function rateSong(song: string, rating = 0) { //? 기본값 0으로 정의
    console.log(`${song} gets ${rating} rate`);
}

rateSong("Hello"); // Hello gets 0 rate

rateSong("Hello", 5); // Hello2 gets 5 rate
// rateSong("hello3", "5");

//! 나머지 매개변수
//...스프레드
function singerToSing(singer: string, singer2: string, ...songs: string[]) { //? singer: "A" singer2: "B"가 들어가게 됌
    for (const song of songs) {
        console.log(`${song}, by ${singer}`)
    }
}
singerToSing("A", "B", "C", "D");
// singerToSing("A", 123); -> string 타입이기때문에 넘버가 올수 없다

//! 반환 타입
function singSongs(songs: string[], count = 0) : number { 
    return songs.length ? singSongs(songs.slice(1), count + 1 ) : count;
}

// 화살표 함수
const singSongs2 = (songs: string[], count = 0) : number =>
    songs.length ? singSongs(songs.slice(1), count + 1 ) : count;

//! 함수타입
let singSong3: () => string; //? 매개변수 없고 string타입 반환

let inputAndOutput: (songs: string[], count?: number) => number;

//
const songs = ["A", "B", "C"];

function playSongs(getSong: (index: number) => string) {
    for (let i = 0; i < songs.length; i++) {
        console.log
            (getSong(i));
    }
}

function getSong(index: number) {
    return `${songs[index]}`;
}
playSongs(getSong);

// function getSong2(index: string) {
//     return `${songs}`;
// }
// playSongs(getSong2);

//! void 반환 타입
// 값을 반환하지 않을때 사용

function logSong( song: string | undefined): void { //? 반환할 값이 없을때 void타입을 선언
    if(!song) {
        return;
    }
    console.log(`${song}`);
    // return true;
}

// void로 반환하도록 선언된 타입 위치에 전달된 함수가 반환된 모든 값을 무시하도록 설정하는데 유용

//! never 반환 타입
// (의도적으로) 항상 오류를 발생시키거나 무한 루프를 실행하는 함수
// 타입스크립트에서 제어 흐름을 분석

//! 함수의 오버로드
// 오버로드 시그니처
function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number) : Date;

// 구현 시그니처
function createDate(monthOrTimestamp: number, day? : number, year? : number) {
    return day === undefined || year === undefined ? new Date(monthOrTimestamp) : new Date(year, monthOrTimestamp, day);
}

createDate(295820544);
createDate(7, 27, 2023);
// createDate(4, 5);
