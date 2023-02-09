
let hello = function() {
    return "hello"
} // 함수 표현식

function hello2() {
    return "안녕하세요"
} // 함수 선언식

const helloText = hello()
console.log(hello())
console.log(helloText)

// 콜백 함수
// 함수의 파라미터로 함수를 넘김
const checkMood = (mood, goodCallback, badCallback) => {
    if (mood === "good") {
        goodCallback()
    } else {
        badCallback()
    }
}

const cry = () => {
    console.log("action: cry")
}

const sing = () => {
    console.log("action: sing")
}

const dance = () => {
    console.log("action: dance")
}

checkMood("sad", sing, cry)
