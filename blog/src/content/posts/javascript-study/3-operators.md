---
title: "JS의 특별한 연산자"
tags: ["js"]
upload: "2025-09-03"
---

## 개요
기본적인 산술 연산, 할당 연산 같이 다른 언어와 사용 방식과 내용이 비슷하면 생략하겠다.

## 비교 연산자
JS의 비교연산자는 괴랄하다.

* '==' (느슨한 동등 비교, Loose Equality Comparison)  
두 피연산자(값)의 타입을 자동으로 변환한 뒤 값의 동등 여부를 판단한다.

* '===' (엄격한 동등 비교, Strict Equality Comparison)  
값과 데이터 타입이 모두 같을 때만 true를 반환한다. (다른 언어처럼 가능 웬만하면 이걸로 쓰자.)

```js
console.log(1 == 1); // true
console.log(1 == '1'); // true
console.log(0 == ''); // true
console.log(false == 0); // true
console.log(true == '1'); // true

console.log(5 === '5'); // false

```

// 부정은 !=, !==로 하면 된다.

```js
console.log(true != '1'); // true
console.log(true !== '1'); // false
```

## 지수 연산자
JS는 지수연산을 지원한다. '**'로 표기한다.

2^3을 출력하는 예시
```js
console.log(2 ** 3); // 출력: 8
```

## null 연산자
'??'의 왼쪽 값이 null 혹은 undefined면 오른쪽 값을 반환하고 아니면 왼쪽 값을 반환한다.

```js
let name;
console.log(name); //-> undefined
name = name ?? 'lapeuchi';
console.log(name); // 출력: lapeuchi

name = name ?? '아이브'; // 위에서 값을 할당해줘서 값이 변하지 않는다.
console.log(name); // 출력: lapeuchi
```