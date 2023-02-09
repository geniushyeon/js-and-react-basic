let person = new Object() // 생성자 방식
let person2 = {} // 객체 리터럴 방식

let example = {
    key: "value", // 객체 프로퍼티
    key2: "value2",
    key3: function() {
        // 함수도 value로 들어갈 수 있음
    }
}

console.log(example.key)
console.log(example['key'])

const getPropertyValue = (key) => {
    return example[key]
}

console.log(getPropertyValue('key'))

const geniushyeon = {
    name: "지니어스현", // 멤버
    age: 25,
    say: function() {
        return `${this.name}은 ${this.age}살`
    } // 메소드
}

// 프로퍼티 추가
geniushyeon.location = "한국"

// 프로퍼티 삭제
delete geniushyeon.location // 메모리에서 지워지지 않음
geniushyeon.location = null; // 메모리에서 지워짐
console.log(geniushyeon)
console.log(geniushyeon.say())

// 객체에 해당 프로퍼티가 있는지 확인
console.log(`name: ${"name" in geniushyeon}`) // true
console.log(`location: ${"location" in geniushyeon}`) // true