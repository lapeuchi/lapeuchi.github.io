---
title: "함수"
tags: ["js"]
upload: "2025-09-04"
---


## 함수 선언

``` js

function calculate1() {
    console.log((3 * 10 / 2 % 3).toString());
}
calculate(); // 출력: 0

function calculate2(number) {
    console.log((number * 10 / 2 % 3).toString());
}
calculate(4); //출력: 2

function multiply1(x, y) {
    console.log(x * y);
}
multiply1(2, 4); // 출력: 8

function multiply2(x, y) {
    return x * y;
}
console.log(multiply2(1, 20)); // 출력: 20

// 함수를 변수처럼 쓸 수 있다.
const multiply3 = function (x, y) {
    return x * y;
}
console.log(multiply3(4, 5)); //출력: 20

function print(x) {
    return function (y) {
        return function (z) {
            return `x: ${x} y: ${y} z:${z}`
        }
    }
}
console.log(print(3)(4)(5)); // 출력: x: 3 y: 4 z:5
```

## Arrow 함수

``` js 

const multiply1 = (x, y) => {
    return x * y;
}
console.log(multiply1(3, 4)); // 출력: 12

const multiply2 = (x, y) => x * y;
console.log(multiply2(4, 5)) // 출력: 20

const multiply3 = x => x * 2;
console.log(multiply4(2)) // 출력: 2

const multiply4 = x => y => z => `x: ${x} y: ${y} z:${z}`;
console.log(multiply4(2)(5)(7)); // 출력: x: 2 y: 5 z:7

```

## arguments 키워드

함수에서 입력받는 값에대한 정의를 **매개변수(Parameter)**라고 한다.
매개변수가 있는 함수를 사용할 때 실제로 넣는 값을 **인자(Argument)**라고 한다. 

사용방법은 2가지가 있다.
1. 함수에 매개변수가 정의되어 있으면 함수에서 **`arguments`** 키워드를 사용할 수 있다. `arguments`는 인자들의 배열을 반환한다.
2. 무한한 인자를 받을 수 있는 매개변수로 사용할 수 있다.

```js
const multiply = function (x, y, z) {
    console.log(arguments);
    return x * y * z;
}

console.log(multiply(4, 5, 6));
// 출력 1: [Arguments] { '0': 4, '1': 5, '2': 6 }
// 출력 2: 120

const multiplyAll = function (...arguments) {
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10)); // 출력: 1814400

```