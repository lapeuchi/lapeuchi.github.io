---
title: "데이터 타입"
tags: ["js"]
upload: "2025-09-03"
---

## 데이터 타입
Primitive Type이 여섯 종류가 있고 Object Type이 있다.

Primitive Types
1) Number (숫자): 정수, 실수, Infinity
2) String (문자열)
3) Boolean (불리언): true, false
4) undefined (언디파인드): 선언만 하고 정의를 하지 않은 상태
5) null (널): 직접 null이라고 할당을 한 상태
6) Symbol (심볼): 유일무의한 값이 필요할 때 사용한다. 할당이 필요하면 Symbol 함수를 호출한다.

* ObjectType (객체): Function(함수), Array(배열), Object(객체)가 객체 타입.

JS는 dynamic typing 언어이다. 변수 타입을 명시적으로 선언하지 않고 값에 의해 타입을 '추론'한다.


## Number
정수, 실수를 포함하는 숫자 타입

``` js
const age = 32
const tempature = -10;
const pi = 3.14;
console.log(typeof(pi)) //출력: number

// Infinity도 숫자
const inf = Infinity;
const nInf = -Infinity;
```

## String
문자열 타입
``` js
const code = 'ㅁㄴㅇㄴ'
console.log(typeof(code)) //출력: string
```

## Boolean
``` js
const isTall = 180 > 160;
console.log(isTall); //출력: true
console.log(typeof(code)); //출력: boolean
```

## undefined
선언만 하고 정의를 하지 않은 상태
``` js
let undef;
console.log(undef); // 출력: undefined
console.log(typeof undef) // 출력: undefined
```

## null
직접 null이라고 할당을 한 상태 타입은 null이라고 출력된다.

```js
let thisIsNull = null;
console.log(undef); // 출력: null
console.log(typeof undef) // 출력: object
```

typeof를 출력해 봤는데 null이 아니라 object가 나온 이유는 null이 빈 참조를 나타내는 데 자주 사용되기 때문이다. 그래서 원시 자료형으로 생각해도 되지만 엄밀히 말해서는 null은 객체이고 참조 자료형이다.

## Object

### map
key:value 형태의 쌍으로 이루어져 있다.

```js
const dictionary = {
    red: '레드',
    orange: '오렌지',
    yellow: '옐로'
}

console.log(dictionary);
console.log(dictionary['red']); // 출력: 레드
console.log(dictionary['orange']); // 출력: 오렌지
console.log(dictionary['yellow']); // 출력: 옐로

console.log(typeof dictionary); // 출력: { red: '레드', orange: '오렌지', yellow: '옐로' }
```

### array
Array 타입
값을 리스트로 나열할 수 있음

array의 index 개념
0 부터 시작해서 1씩 올라간다.
```js
const iveMembers = [
    '안유진', // 0
    '가을', // 1
    '레이', // 2
    '장원영',
    '리즈',
    '이서'
];

console.log(iveMembers); // 출력: [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
console.log(iveMembers[0]); // 출력: 안유진
console.log(typeof(iveMembers)); // 출력: object
```

## typeof 키워드 
데이터 타입을 비교하는데 쓰이는 키워드 결과로 문자열을 반환한다.

```js
let a = 1
console.log(typeof a == 'number'); // 옆에 변수를 띄어쓰거나
console.log(typeof(a) == 'number'); // 함수처럼 ()안에 변수를 써도 된다.
```