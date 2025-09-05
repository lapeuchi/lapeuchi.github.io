---
title: "값 복사 & 참조 복사"
tags: ["js"]
upload: "2025-09-04"
---

## copy by value
copy by value, 값에 의한 전달

기본적으로 모든 primitive 값은 copy by value.

```js
let original = 'hello';
let clone = original;
clone += ' world';

console.log(original); // 출력: hello 
console.log(clone); // 출력: hello world
console.log(original === clone); // 출력: false
```

## copy by reference
copy by reference, 참조에 의한 전달

기본적으로 객체는 copy by reference.

```js 
let originalObj = {
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;

originalObj['group'] = '에스파';

console.log(originalObj); // 출력: { name: '안유진', group: '에스파' }
console.log(cloneObj); // 출력: { name: '안유진', group: '에스파' }
console.log(originalObj === cloneObj); // 출력: true

```

### spread operator 관련 
```js
const yuJin = {
    name: '안유진',
    group: '아이브'
}

const yuJin2 = {
    ...yuJin,
};
console.log(yuJin2); // 출력: { name: '안유진', group: '아이브' }
console.log(yuJin2 === yuJin); // 출력: false

const yuJin3 = {
    year: 2003,
    ...yuJin,
};
console.log(yuJin3); // 출력: { year: 2003, name: '안유진', group: '아이브' }

const yuJin4 = {
    name: 'lapeuchi',
    ...yuJin,
};
console.log(yuJin4); // 출력: { name: '안유진', group: '아이브' }

const yuJin5 = {
    ...yuJin,
    name: 'lapeuchi',
}
console.log(yuJin5); // 출력: { name: 'lapeuchi', group: '아이브' }

const numbers = [1, 3, 5];
const numbers2 = [
    ...numbers,
    10,
];
console.log(numbers2); // 출력: [ 1, 3, 5, 10 ]
```