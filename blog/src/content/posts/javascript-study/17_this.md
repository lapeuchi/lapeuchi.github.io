---
title: "this"
tags: ["js"]
upload: "2025-09-11"
---

## 개요

JS는 Lexical Scope를 사용하기 때문에 함수의 상위 스코프가 정의 시점에 평가된다.
하지만 this 키워드는 객체가 생성되는 시점에 바인딩이 결정된다.

```js
const testFunction = function(){
    return this;
}

console.log(testFunction() == global) // true

const yuJin = {
    name: '안유진'
    year: 2003,
    
    sayHello: function(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    },
}

console.log(yuJin.sayHello()); // 안녕하세요 저는 안유진입니다.

function Person(name, year){
    this.name = name;
    this.year = year;
    
    this.sayHello = function(){
        return `안녕하세요 저는 ${this.name}입니다.`;
    }
}

const yuJin2 = new Person('안유진', 2003);
console.log(yuJin2.sayHello()); // 안녕하세요 저는 안유진입니다.

Person.prototype.dance = function(){
    return `${this.name}이 춤을 춥니다.`;
}

Person.prototype.dance2 = function(){
    function dance3(){
        return `${this.name}이 춤을 춥니다.`;
    }
    
}
console.log(yuJin2.dance2()) // undefined이 춤을 춥니다.
```

## JS this의 맵핑
객체의 메소드로, 가장 상위 레벨에 함수를 선언하면 this가 자동으로 실행하는 대상 객체로 맵핑이 된다.  
하지만 만약에 그 외의 위치에 함수를 선언하면 함수의 디스는 모조건 글로벌 오브젝트에 맵핑된다.

> this가 맵핑되는 3가지 경우와 상황
>1. 일반 함수 호출시 this가 최상위 객체 (global 또는 window)를 가리킨다.
>2. 메소드로 호출시 호출된 객체를 가리킨다.
>3. new 키워드를 사용해서 객체를 생성했을 땐 객체를 가리킨다.

JS는 다른 객체지향 언어와 달리 this를 어디에서 썼냐에 따라 달라진다.

### global/window

JS 파일이 실행되면 자동으로 생성되는 객체이다. JS 엔진을 Node.js에서 실행을 할 때 필요한 값들을 들고 있다.
만약 웹에서 진행을 한다 하면 window 객체랑 똑같은 경우라고 볼 수 있다.  
(웹에서 실행하면 window, node로 실행하면 global 객체가 생긴다. 잘못 참조시 참조 에러가 발생한다.)

생성자 함수를 만들고 new 없이 함수를 호출해보면 undefined가 된다. this가 위의 1번 상황처럼 일반 함수를 호출했고 this가 최상위 객체를 가리키고 있기 때문이다.

```js
function Idol(name) {
    this.name = name;
}

const yuJin = IdolModel('안유진');
console.log(yuJin); // undefined
console.log(global.name); // 안유진
```

## 디스를 원하는 값으로 맵핑하는 방법

함수 3가지가 있다. 모두 같은 역할을 하는데 함수의 인자를 받는 방법이 다르다.
모두 함수를 통해 호출할 수 있다. (`functionName.apply()`)
>1. apply(object, arglist): 인자를 배열로 받는다. 함수값을 바로 반환한다.
>2. call(object, arg1, arg2, ...) ,로 인자를 구분하여 받는다. 함수값을 바로 반환한다.
>3. bind(object, arg1, arg2, ...): apply랑 비슷한데 함수 자체를 반환한다.

```js
function returnName(){
    return this.name;
}

console.log(returnName()); // undefined -> this가 global에 맵핑되어 this.name은 undefined가 된다.

const yuJin3 = {
    name: '안유진',
}

console.log(returnName.call(yuJin3)); // 안유진
console.log(returnName.apply(yuJin3)); // 안유진

/**
 * 1) call -> 컴마를 기반으로 아규먼트를 순서대로 넘겨주고
 * 2) apply ->  아규먼트를 리스트로 입력해야한다.
 */
function multiply(x, y, z){
    return `${this.name} / 결과값 : ${x * y * z}`; 
}

console.log(multiply.call(yuJin3, 3, 4, 5)); // 안유진 / 결과값 : 60
console.log(multiply.apply(yuJin3, [3, 4, 5])); // 안유진 / 결과값 : 60

/**
 * bind()
 */
const laterFunc = multiply.bind(yuJin3, 3, 4, 5);
console.log(laterFunc);
console.log(laterFunc());
```
