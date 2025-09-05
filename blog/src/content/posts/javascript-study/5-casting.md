---
title: "형변환"
tags: ["js"]
upload: "2025-09-04"
---

## 명시적 형변환

### toString()

```js
console.log(typeof (99).toString(), (99).toString()); // 출력: string 99
console.log(typeof (true).toString(), (true).toString()); // 출력: string true
console.log(typeof (Infinity).toString(), (Infinity).toString()); // 출력: string Infinity
``` 

### string to number (parse 함수)
```js
console.log(typeof parseInt('0'), parseInt('0.99')); // 소숫점 이하를 버린다.(내림) 출력: number 0
console.log(typeof parseFloat('0.99'), parseFloat('0.99')); // 출력: number 0.99
console.log(typeof +'1', +'1'); // 출력: number 1
```

## 암묵적 형변환

### number to string

``` js
let age = 21;
let age2String = age + '';
```

### boolean으로 변환

boolean으로 변환을 할 때 앞에 '!!'를 붙여야 한다. ('!'를 하나만 사용하면 부정을 의미해 값이 바뀐다. 두 번 사용해서 바꾸고 원래대로 다시 바꾸는 것이다.)

boolean type으로 변환했을 때, false를 반환하는 경우는 다음과 같다.
1) 아무 글자도 없는 String
2) 값이 없는 경우
3) 0

object type은 무조건 true를 반환한다. (array, object, 등)

```js
console.log(!!'asdkfjhalksdfjasdfx'); // 출력: true

console.log(!!''); // 출력: false

console.log(!!0); // 출력: false
console.log(!!'0'); // 출력: true
console.log(!!'false'); // 출력: true
console.log(!!false); // 출력: false
console.log(!!undefined); // 출력: false
console.log(!!null); // 출력: false

console.log(!!{}); // 출력: true
console.log(!![]); // 출력: true
```