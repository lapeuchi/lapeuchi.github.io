---
title: "불변 객체"
tags: ["js"]
upload: "2025-09-09"
---

## 개요
immutable object, 현대 프로그래밍에서 중요한 요소이다. 

프로퍼티 애트리뷰트가 있듯이 객체에도 애트리뷰트가 있다는 느낌이다.

JS 객체는 매우 유연해서 개발 중 의도치 않은 상황이 생길 수 있다. 이때 객체를 보호하여 의도치 않은 수정을 막는 기능이 있다.

총 3 개의 키워드를 설명할건데, 아래 객체를 기준으로 설명하겠다.
```js
const yuJin = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}
```

## Extensible

객체의 확장 가능 여부를 설정할 수 있다. 즉, 새로운 프로퍼티를 추가하는 것을 금지한다. (삭제, 프로퍼티 애트리뷰트 수정은 가능)

객체가 생성되면 기본적으로 확장 가능한 상태이다. (기본값은 true)

* `Object.isExtentible(object)`: 확장 가능 여부를 반환한다. (기본값 true)
* `Object.preventExtensions(object)`: 객체의 확장을 금지한다.

```js
console.log(Object.isExtensible(yuJin)); // 확장 가능 여부 반환 메소드

yuJin['position'] = 'vocal';

console.log(yuJin);

Object.preventExtensions(yuJin); // 확장 금지 메소드 호출

console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = '아이브'; // 확장이 금지되어 무시된다. (에러메시지는 없음)
console.log(yuJin);

delete yuJin['position']; // 삭제는 가능하다.
console.log(yuJin);
```

출력 결과
```
true
{ name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal' }
false
{ name: '안유진', year: 2003, age: [Getter/Setter], position: 'vocal' }
{ name: '안유진', year: 2003, age: [Getter/Setter] }
```

## Seal
객체가 봉인이 되어있는지에 대한 여부, true가 되면 프로퍼티의 확장, 삭제 애트리뷰트 수정이 불가해진다.
또한 모든 프로퍼티 애트리뷰트에서 configurable이 false가 된다.

* `Object.isSealed(object)`: 봉인이 되어있는지에 대한 여부를 반환한다. (기본은 false)
* `Object.seal(object)`: 객체를 봉인한다.

```js
console.log(Object.isSealed(yuJin2));

// 오브젝트 봉인
Object.seal(yuJin2);

console.log(Object.isSealed(yuJin2));

// 프로퍼티 확장 불가
yuJin2['groupName'] = '아이브';
console.log(yuJin2);

// 프로퍼티 제거 불가.
delete yuJin2['name'];
console.log(yuJin2);

// 프로퍼티 애트리뷰트를 수정불가.
Object.defineProperty(yuJin2, 'name', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));
```

출력 결과
```
{ name: '안유진', year: 2003, age: [Getter/Setter] }
false
true
{ name: '안유진', year: 2003, age: [Getter/Setter] }
{ name: '안유진', year: 2003, age: [Getter/Setter] }
{
  value: '안유진',
  writable: false,
  enumerable: true,
  configurable: false
}
```

## Freezed

위의 두 키워드보다도 객체를 더 강하게 보호한다. 읽기 외에 모든 기능을 막는다. 기본은 false.
또한 모든 프로퍼티의 애트리뷰트에서 writable과 configurable이 false가 된다.

* `Object.isFrozen(object)`: 객체 동결 여부를 반환하는 메소드 (기본은 false)
* `Object.freeze(object)`: 객체를 동결하는 메소드

```js
console.log(Object.isFrozen(yuJin3));

// 객체 얼림
Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

// 확장 불가
yuJin3['groupName'] = '아이브';
console.log(yuJin3);

// 제거 불가
delete yuJin3['name'];
console.log(yuJin3);

// writable과 configurable이 false가 된다.
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));
```
출력 결과
```
false
true
{ name: '안유진', year: 2003, age: [Getter/Setter] }
{ name: '안유진', year: 2003, age: [Getter/Setter] }
{
  value: '안유진',
  writable: false,
  enumerable: true,
  configurable: false
}
```