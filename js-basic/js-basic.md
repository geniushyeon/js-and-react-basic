# 자바스크립트의 자로형
## 원시 타입
Primitive Data Type
- String
- Number(정수, 실수 모두 포함)
- Boolean
- Undefined
- Null
## 비원시 타입
Non-Primitive Data Type
- Object
- Array
- Function

# 함수
## 호이스팅
- 함수 선언식으로 선언된 함수는 호이스팅되어 프로그램 실행 전에 프로그램 최상단으로 끌어올려짐
```javascript
console.log(hello2())

function hello2() {
    return "안녕하세요"
}

// 결과: 안녕하세요
```
- 함수 표현식은 호이스팅이 이루어지지 않음
```javascript
console.log(hello())

let hello = function() {
    return "안녕하세요"
}

// 결과: hello is not a function
```

## 화살표 함수
```javascript
let hello = () => "안녕하세요 여러분"
```
