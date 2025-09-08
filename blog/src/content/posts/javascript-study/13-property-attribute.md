---
title: "프로퍼티 애트리뷰트"
tags: ["js"]
upload: "2025-09-08"
---

## 개요

property attribute를 설명하기 전 프로퍼티는 두 종류로 나눌 수 있다.

1. 데이터 프로퍼티
키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티

2. 액세서 프로퍼티
자체적으로 값을 가지지 않지만 다른 값을 가져오거나 설정할 때 호출되는 함수로 구성된 프로퍼티. ex) getter, setter

프로퍼티 애트리뷰트는 데이터 프로퍼티의 속성값에 대한 내용이다.

## 프로퍼티 애트리뷰트

JS는 프로퍼티에 대한 애트리뷰트가 존재한다.

### 프로퍼티 애트리뷰트를 조회하는법

아래 두 함수를 통해 프로퍼티에 대한 정보를 볼 수 있다.

* `Object.getOwnPropertyDescriptor(객체 이름, '프로퍼티 키')`: 특정 키에 대한 프로퍼티 애트리뷰트를 반환한다.

* `Object.getOwnPropertyDescriptors(객체 이름);`: 객체의 모든 프로퍼티 애트리뷰트를 반환한다.

아래 예시로 사용방법과 출력 결과를 살펴보자.

```js
const yuJin = {
    name: '안유진',
    year: 2003,
}

console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));
// 출력: { value: 2003, writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptors(yuJin)); 
/* 출력:
{
  name: {
    value: '안유진',
    writable: true,
    enumerable: true,
    configurable: true
  },
  year: { value: 2003, writable: true, enumerable: true, configurable: true }
}
*/
```
예시 출력처럼 value, writable, enumerable, configurable이 객체로 출력된다.

각각 다음을 의미한다.

### 프로퍼티 애트리뷰트의 종류
* **value**: 프로피터의 값

* **writable**: 값을 수정할 수 있는지 여부. false로 설정하면 프로퍼티 값을 수정할 수 없다.

* **enumerable**: 열거가 가능한지에 대한 여부로, for in이나 loop 같은걸 사용할 수 있으면  true를 반환한다.

* **configurable**: 프로퍼티 애트리뷰트의 재정의가 가능한지에 대한 여부, false일 경우 프로퍼티 삭제나 애트리뷰트 변경이 금지된다. 단, writable이 true인 경우 writable을 변경하는건 가능하다.
