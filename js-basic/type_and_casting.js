// 숫자 타입
let inf = Infinity; // 무한대
let minusInf = -Infinity; // 마이너스 무한대
let nan = NaN; // Not a Number

// 문자열 타입
let name = "geniushyeon"
let name2 = 'geniushyeon'
let name3 = `geniushyeon + ${name2}` // 템플릿 리터럴

// 불리언 타입
let isSwitchOff = false

// null
let a
console.log(a) // 아무것도 할당하지 않으면 undefined
let b = null // 이렇게 할당해줘야 함

// 형변환
let numberA = 12
let numberB = "2"
console.log(numberA * numberB) // 24, 묵시적 형변환
console.log(numberA + numberB) // 122
console.log(numberA + parseInt(numberB)) // 14, 명시적 형변환
