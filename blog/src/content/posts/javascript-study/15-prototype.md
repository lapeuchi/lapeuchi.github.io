---
title: "Prototype"
tags: ["js"]
upload: "2025-09-10"
---

## __proto__

빈 객체를 만들고.
```js
const testObj = {};
```

`testObj.__proto__`를 출력해보자
```js
console.log(testObj.__proto__);
```
출력 결과
```
[Object: null prototype] {};
```
분명히 아무 프로퍼티 없는 빈 객체였는데 `testObj.__proto__`를 출력하니 놀랍게도 에러도 없고 뭔가 출력됐다.

`__proto__`는 모든 객체에 존재하는 프로퍼티이다.
클래스 상속에서 부모 클래스의 레퍼런스에 해당되는 값. 

## prototype

생성자 함수를 만들고,

```js
function IdolModel(name, year) {
    this.name = name;
    this.year = year;
}
```

static 값인 prototype을 출력해보자.

```js
console.log(IdolModel.prototype);
```
출력 결과
```
{}
```

객체가 하나 출력되었다. 안에 아무것도 없는데 감춰진 것이다. 하지만 보는 방법이 있다.
```js
console.dir(IdolModel.prototype, {
    showHidden: true,
});
```

출력 결과
```
<ref *1> {
  [constructor]: [Function: IdolModel] {
    [length]: 2,
    [name]: 'IdolModel',
    [arguments]: null,
    [caller]: null,
    [prototype]: [Circular *1]
  }
}
```

객체가 출력된다. `prototype`은 객체인걸 알 수 있다. `constructor`라는 key가 있고 `IdolModel` 함수가 value값으로 들어가 있다.

`prototype`에 `constructor`라는 키가 있으니 `IdolModel`과 같은건지 비교해보자
```js
console.log(IdolModel.prototype.constructor === IdolModel);
```
출력 결과
```
true
```

true가 나왔다. 둘은 같고 객체라는건 `constructor`는 `IdolModel`과 같은 메모리 공간을 참조하고 있다는 것이다.

그럼 `constructor.prototype`과 `IdolModel.prototype`을 비교한건 어떨까?
```js
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype);
```
출력 결과
```
true
```

이것도 true가 나왔다. 아까게 true면 이것도 당연한 것이다. 이처럼 서로가 서로를 참조하고 있는 상태를 **circular reference**라고 한다.

이번엔 값이 채워진 객체를 만들고 `__proto__`와 `IdolModel.prototype`를 비교하고  
빈 객체인 `testObj`의 `__proto__`와 `Object.prototype`을 비교해보자

```js
const yujin = new IdolModel('안유진', 2003);
console.log(yujin.__proto__ === IdolModel.prototype)
console.log(testObj.__proto__ === Object.prototype);
```
출력 결과
```
true
true
```
둘 다 true가 출력되었다.

## 정리 및 prototype chain (프로토타입 체인)

* prototype
**함수(특히 생성자 함수나 클래스)**가 자동으로 갖는 특별한 프로퍼티.  
이 프로퍼티는 **객체(Prototype Object)**를 가리키고, 인스턴스들이 공유할 메소드와 속성을 정의하는 공간이다.

* __proto__
인스턴스가 내부적으로 연결하고 있는 참조, 실제로는 생성자의 prototype을 가리킨다.  
이 두 개가 연결되면서 프로토타입 체인이 동작 → 상속과 메서드 재사용이 가능해짐

정리하자면 이렇다.

1. **생성자 함수(또는 클래스)**는 `prototype`이라는 프로퍼티를 가진다.

2. 객체의 `__proto__`은 생성자의 `prototype`을 참조한다.

3. 이를 따라가면 최상위 클래스인 `Object.prototype`까지 연결되는 prototype chain이 만들어진다.