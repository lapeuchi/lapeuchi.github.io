---
title: "객체"
tags: ["js"]
upload: "2025-09-04"
---

## 객체 선언

```js
let yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function() {
        return `${this.name}이 춤을 춥니다.`;
    }
};

console.log() // 출력: { name: '안유진', group: '아이브', dance: [Function: dance] }

console.log(yuJin.name) // 출력: 안유진
console.log(yuJin['name']); // 출력: 안유진

console.log(yuJin.dance()); // 출력: 안유진이 춤을 춥니다.
console.log(yuJin['dance']()); // 출력: 안유진이 춤을 춥니다.

```

## 변수를 사용해 객체 선언

```js
const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin1 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance: function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}
```

## 객체를 수정하는 법

```js

const yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function() {
        return `${this.name}이 춤을 춥니다.`;
    }
};

yuJin2['group'] = '뉴 네오 아이브'; // 키에 대응하는 데이터 수정
console.log(yuJin2); // 출력: { name: '안유진', group: '뉴 네오 아이브', dance: [Function: dance] }

yuJin2['englishName'] = 'An Yu Jin'; // 데이터 추가
console.log(yuJin2); 
/* 출력:
{
  name: '안유진',
  group: '뉴 네오 아이브',
  dance: [Function: dance],
  englishName: 'An Yu Jin'
}
*/

delete yuJin2['englishName']; // 데이터 제거
console.log(yuJin2); // 출력: { name: '안유진', group: '뉴 네오 아이브', dance: [Function: dance] }
```

### const로 선언한 객체의 특징
1. 객체 자체를 변경할 수 없다.
2. 객체 안의 프로퍼티나 메서드는 변경할 수 있다.

## Object 멤버 메소드

```js
const wonYoung = {
    name: '장원영',
    group: '아이브',
}

// 모든 키값 다 가져오기 
console.log(Object.keys(wonYoung)); // 출력: [ 'name', 'group' ]

// 모든 벨류값 다 가져오기
console.log(Object.values(wonYoung)); // [ '장원영', '아이브' ]
```

## 프로퍼티 축약
객체 리터럴에서 프로퍼티 축약(Property shorthand) 문법을 쓸 수 있다.

아래 예시를 보자
name: name → 키(name)와 값(name이라는 변수)이 같을 때, name, 으로 줄여 쓸 수 있다.

```js
const name = '안유진';

// 이건 프로퍼티를 중복으로 선언한 것이다. name: name과 name은 같은 의미이다.
const yuJin = {
    name: name,
    name,
};

// 이렇게 줄일 수 있다.
const yuJin2 {
    name
}

console.log(yuJin); // 출력: 안유진
console.log(yuJin2); // 출력: 안유진

```