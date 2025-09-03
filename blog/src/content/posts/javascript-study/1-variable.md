---
title: "변수 선언과 할당"
tags: ["js"]
upload: "2025-09-03"
---

## 변수의 선언과 할당

변수를 선언하는 키워드는 총 3가지가 있다. let, const, var.

여기서 const는 변수가 아니라 상수선언 키워드이다.

### let
웬만하면 이걸 사용하길 권장한다. 일반적인 변수를 선언할 때 쓰이는 키워드다.
선언을 하고 값을 할당하지 않으면 undefined로 채워진다.

```javascript
let ive = '아이브';
console.log(ive);

ive = '안유진';
console.log(ive);

let name;
console.log(name) // 출력: undefined
```

### const
이건 변수가 아니라 상수를 선언하는 키워드다. 선언과 동시에 할당을 해주어야 한다.

```js
const aespa = '에스파';
console.log(aespa);

// const의 값을 변경하면 실행시 에러가 발생한다.
//aespa = '윈터';
```

### var
초기 JavaScript 변수 선언 방식, let과 const가 생겨난 현대 JavaScript에서 권장하지 않는 방법이다.

선언 방법은 let과 같아서 생략하겠다.

var의 문제점
1. 한번 선언된 변수를 다시 선언할 수 있다.
```js
var name = "lapeuchi";
var name = "lapasd";
```
2. 변수 호이스팅 문제
```js
console.log(name); // 출력: undefined
var name = "lapeuchi";
console.log(name); // 출력: lapeuchi
```
name이 선언되지 않은 상태에서 접근했는데 에러없이 잘 실행된다. 다른 언어였으면 참조관련 에러가 나왔을 것이다.

위 상황처럼 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 호이스팅(hoisting)이라 한다.