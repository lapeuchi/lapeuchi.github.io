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

아래 두 함수를 통해 프로퍼티에 대한 정보를 볼 수 있다.

* `Object.getOwnPropertyDescriptor(객체 이름, '프로퍼티 키')`: 특정 키에 대한 프로퍼티 애트리뷰트를 반환한다.

* `Object.getOwnPropertyDescriptors(객체 이름);`: 객체의 모든 프로퍼티 애트리뷰트를 반환한다.

### 데이터 프로퍼티 애트리뷰트

아래 예시로 사용방법과 출력 결과를 살펴보자. 데이터 프로퍼티의 애트리뷰트를 출력하는 코드이다.

```js
const yuJin = {
    name: '안유진',
    year: 2003,
}

console.log('1.', Object.getOwnPropertyDescriptor(yuJin, 'year'));
console.log('2.', Object.getOwnPropertyDescriptors(yuJin)); 
```

출력 결과
```
1. { value: 2003, writable: true, enumerable: true, configurable: true }
2. {
  name: {
    value: '안유진',
    writable: true,
    enumerable: true,
    configurable: true
  },
  year: { value: 2003, writable: true, enumerable: true, configurable: true }
}
```
예시 출력처럼 value, writable, enumerable, configurable이 객체로 출력된다.

각각 다음을 의미한다.

* **value**: 프로피터의 값

* **writable**: 값을 수정할 수 있는지 여부. false로 설정하면 프로퍼티 값을 수정할 수 없다.

* **enumerable**: 열거가 가능한지에 대한 여부로, for in이나 loop 같은걸 사용할 수 있으면  true를 반환한다.

* **configurable**: 프로퍼티 애트리뷰트의 재정의가 가능한지에 대한 여부, false일 경우 프로퍼티 삭제나 애트리뷰트 변경이 금지된다. 단, writable이 true인 경우 writable을 변경하는건 가능하다.

### 엑세스 프로퍼티 애트리뷰트

다음은 엑세스 프로퍼티의 애트리뷰트를 조회하는 예제이다.

```js
const yuJin = {
    name: '안유진',
    year: 2003,
    height: 170,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(Object.getOwnPropertyDescriptor(yuJin, 'age'));

```

출력 결과
```
{
  get: [Function: get age],
  set: [Function: set age],
  enumerable: true,
  configurable: true
}
```

데이터 프로퍼티의 애트리뷰트와 다르게 value와 writable 대신, get과 set이 있다. 각각 getter와 setter 함수를 의미하고 있다.

* **get**: getter를 의미한다.

* **set**: setter를 의미한다.

* **enumerable**: 열거가 가능한지에 대한 여부로, for in이나 loop 같은걸 사용할 수 있으면  true를 반환한다.

* **configurable**: 프로퍼티 애트리뷰트의 재정의가 가능한지에 대한 여부, false일 경우 프로퍼티 삭제나 애트리뷰트 변경이 금지된다. 단, writable이 true인 경우 writable을 변경하는건 가능하다.

## 프로퍼티 애트리뷰트를 재정의하는 방법

아래 예시에서 height의 애트리뷰트를 재정의하고 있다.

```js
const yuJin = {
    name: '안유진',
    year: 2003,
    height: 170,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

Object.defineProperty(yuJin2, 'height', {
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true,
})

console.log('1.', yuJin2);
console.log('2,', Object.getOwnPropertyDescriptor(yuJin2, 'height'));

yuJin2.height = 180;
console.log('3.', yuJin2);
```

출력 결과
````
1. { name: '안유진', year: 2003, age: [Getter/Setter], height: 172 }
2. { value: 172, writable: true, enumerable: true, configurable: true }
3. { name: '안유진', year: 2003, age: [Getter/Setter], height: 180 }
````

아래에서 각 애트리뷰트가 값에따라 어떤 변화를 가지는지 살펴보자

### writable이 false인 경우

아래 예시는 애트리뷰트의 writable이 false기 때문에 프로퍼티의 value 수정이 되지 않고 있는 코드다.

```js
Object.defineProperty(yuJin2, 'height', {
    writable:false,
});
console.log('1.', Object.getOwnPropertyDescriptor(yuJin2, 'height'));

yuJin2.height = 172; // 값 수정 시도
console.log('2.', yuJin2);
```

출력 결과
```
1. { value: 180, writable: false, enumerable: true, configurable: true }
2. { name: '안유진', year: 2003, age: [Getter/Setter], height: 180 }
```

### enumerable이 false인 경우
name의 enumerable를 false로 정의하니 name이 열거가 되지 않는 모습이다. 출력문에 name이 빠져있다.
```js
Object.defineProperty(yuJin2, 'name', {
    enumerable:false,
});

console.log(Object.keys(yuJin2));
for(let key in yuJin2){
    console.log(key);
}
console.log(yuJin2);

console.log(yuJin2.name);
```

출력 결과
```
[ 'year', 'age' ]
year
age
{ year: 2003, age: [Getter/Setter] }
안유진
```

### configurable이 false인 경우

```js
Object.defineProperty(yuJin2, 'height', {
    writable: true,
    configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// writable은 true기에 값을 수정할 수 있음
Object.defineProperty(yuJin2, 'height', {
    value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// configurable이 false여도 writable은 true기에 false로 변경할 수 있음
Object.defineProperty(yuJin2, 'height', {
    writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// 에러 발생 코드, height가 재정의 불가 속성이되어 에러 메시지가 출력된다.
Object.defineProperty(yuJin2, 'height', {
    writable: true,
}); 
```

출력 결과
```
{ value: 170, writable: true, enumerable: true, configurable: false }
{ value: 172, writable: true, enumerable: true, configurable: false }
{ value: 172, writable: false, enumerable: true, configurable: false }
TypeError: Cannot redefine property: height
    at Function.defineProperty (<anonymous>)
    at Object.<anonymous>...(생략)
```