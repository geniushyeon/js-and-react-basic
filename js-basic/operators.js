let a = "1"
let b = "2"

console.log(a + b) // 12, 연결 연산자

// 논리 연산자
console.log(!true) // false
console.log(true && true) // true
console.log(true && false) // false
console.log(true || false) // true

// 비교 연산자
console.log(1 == "1") // true, 값만 비교
console.log(1 === "1") // false, 타입까지 비교

// 타입 연산자
console.log(typeof a) // String

// 널 변환 연산자
let number; // undefined
number = number ?? 10 // 값이 없다면 10을 대입하고, 값이 있으면 그 값을 그대로 대입
console.log(number) // 10