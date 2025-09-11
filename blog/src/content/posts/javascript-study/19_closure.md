---
title: "closure"
tags: ["js"]
upload: "2025-09-11"
---

## 개요

>Closure의 정의  
>environment within which hat function was declared.  
>클로저는 어떤 함수와 해당 함수가 선언된 lexical 환경의 조합이다.  

쉽게 얘기하면 closure는 상위 함수보다 하위 함수가 더 오래 살아있는 경우를 얘기한다.


```js
function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber();
}

console.log(getNumber()); // 5
```

innerGetNumber()는 lexical scope 룰에 의해 상위 스코프에서부터 number 값을 가져올 수 있고, 5가 잘 출력된 것을 볼 수 있다. 

그런데 이 상황은 하위 함수가 상위 함수보다 오래 살아있는 상황이 아니다. 
반환할 때 innerGetNumber()를 실행하고서 반환을 해주면 call stack에서 innerGetNumber()가 사라지고 다음에서야 getNumber()가 사라질 것이다. 근데 이 상황은 그렇지 않다는 것이다.

그럼 innerGetNumber()가 getNumber()보다 오래 살아있는 방법은 무엇일까?

아까는 innerGetNumber()를 실행하고서 반환을 해주었지만 이번엔 함수 자체를 반환해보자.
```js
function getNumber() {
    var number = 5;

    function innerGetNumber() {
        return number;
    }

    return innerGetNumber;
}

const runner = getNumber();

console.log(runner); // [Function: innerGetNumber]
console.log(runner()); // 5
```

이번에도 5가 잘 출력되었다. runner에 담긴 innerGetNumber()를 실행한 상황은 이미 getNumber()가 실행이 된 이후이다.
getNumber()의 execution context가 끝난 다음, call stack에서 사라진 다음에 실행했다.

상위 함수보다 하위 함수가 더 오래 살아있는 이 경우를 closure라고 한다.

상위 함수에서 하위 함수를 반환함으로써 상위 함수가 먼저 실행이 끝나고 하위 함수를 나중에 실행할 수 있는 기능이다.

## closure 활용

### 데이터 캐싱: 복잡하고 오래걸리는 연산이 있는 경우
엄청 복잡하고 오래걸리는 계산이 있다고 생각해보자. 그 계산을 끝내고 결과를 가지고 있는 하위 함수를 반환 받음으로써 자원과 시간을 절약할 수 있다. 

```js
function cacheFunction() {
    // 아래 계산은 매우 오래걸린다는 가정을 했을때
    var number = 10 * 10;

    function innerCacheFunction(newNumb){
        return number * newNumb;
    }

    return innerCacheFunction;
}

const runner2 = cacheFunction(); // 여기서 복잡하고 오래걸리는 연산을 한 번만 하게 된다.
console.log(runner2(10)); // 1000
console.log(runner2(20)); // 2000
```

### 데이터 캐싱: 특정 값을 반복적으로 변환해야 할 때
마찬가지로 하위 함수에서 값을 기억하는 것을 활용할 수 있다.
```js
function cacheFunction2(){
    var number = 99;

    function increment(){
        number ++;
        return number;
    }

    return increment;
}

const runner3 = cacheFunction2();

console.log(runner3()); // 100
console.log(runner3()); // 101
console.log(runner3()); // 102
```

### 생성자 함수에서 정보 은닉(private)을 사용할 때

은닉할 프로퍼티에 this를 빼고 일반적인 변수를 선언하면 private 변수처럼 사용할 수 있다.

this를 쓰지 않았기 때문에 property처럼 참조는 못한다. 함수를 이용해서 사용할 수 있겠다.

```js
function Idol(name, year){
    this.name = name;

    var _year = year;

    this.sayNameAndYear = function(){
        return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
    }
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear()); // 안녕하세요 저는 안유진입니다. 2003에 태어났습니다.

console.log(yuJin._year); // undefined -> this를 사용하지 않아서 property처럼 엑세스를 할 수 없다.
```