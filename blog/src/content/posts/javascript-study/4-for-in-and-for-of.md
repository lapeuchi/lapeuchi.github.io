---
title: "for in / for of"
tags: ["js"]
upload: "2025-09-03"
---

## 개요

결론적으로, for.. in은 "모든 열거 가능한 객체"를 반복해주고 for.. of는 "컬렉션 전용"입니다. (non-Symbol 속성에 대해서만 반복)

## for in

for.. in 문은 상속된 열거 가능한 속성들을 포하하여 객체에서 문자열로 키가 지정된 모든 열거 가능한 속성에 대해 반복합니다. (non-Symbol 속성에 대해서만 반복)

배열과 문자열을 for in에 돌리면 인덱스가 나온다. (문자열은 문자의 배열이다.)
```js
const str = 'hello';
for (let i in str) {
    console.log(i); // str의 인덱스인 0 ~ 4가 출력된다.
}
```

객체를 for in에 돌리면 키 값이 나온다.
```js
const dictionary = {
  원: "인",
  투: "은",
  쓰리: "객체",
};

for (let i in dictionary) {
  console.log(i); // key가 출력됨
}
```

## for out
for.. of 구문은 "반복가능한 객체(Array, Map, Set, String, TypedArray, arguments 객체 등을 포함)"에 대해서 반복하고, 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성한다.

```js
const arr = ["for out은", "배열에 쓰면" "좋아요"];

for (let i in arr) {
    console.log(i); // arr의 모든 요소가 하나씩 출력된다.
}
```