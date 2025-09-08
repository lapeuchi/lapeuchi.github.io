---
title: "객체(objects) 타입을 만드는 3가지 방법"
tags: ["js"]
upload: "2025-09-08"
---

## 개요
js를 공부하면서 object 타입에 대해 혼란스러운 부분이 있었다.

1. 아래 방법처렴 object를 작성하고 객체를 생성하는 방법
```js
const yuJin = {
    name: '안유진',
    year: 2003,
};
```

2. class와 new 키워드를 사용하는 방법
   
1번 방법에서 object를 생성하고 객체를 생성하는 것이라고 익혀놔서 object와 객체는 같은 의미인데도 불구하고 두 방법을 누구는 객체라 그러고 누구는 오브젝트라 그래서 둘이 다른건가 싶었다.

결론은 똑같은 object 타입이고 그냥 만드는 방식만 다른것 뿐이었다.

object 타입의 데이터를 생성하는 3가지 방법과 차이점에 대해 알아보자.

## 1. object를 작성하고 객체를 생성하는 방법
```js
const yuJin = {
    name: '안유진',
    year: 2003
};
console.log(yuJin) // 출력: { name: '안유진', year: 2003 }
```

## class와 new 키워드를 이용한 방법
object를 작성하고 객체를 생성하는 방법과 차이점은 **출력할 때 클래스 타입이 앞에 출력된다.**
```js
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}
const yuJin = new IdolModel('안유진', 2003); // IdolModel { name: '안유진', year: 2003 }
```

## 함수로 만들기
클래스가 있기 전 버전부터 사용되던 오래된 방법이다. 그 만큼 클래스와 유사한 부분이 있다.

생성자를 만들듯이 구조를 만들어서 new로 객체를 생성할 수 있다.

클래스를 작성할 때 생성자에서 this 키워드를 사용해 선언부의 프로퍼티 작성을 생략하듯이 함수 안에서 this 키워드를 사용한다.

클래스 방식처럼 **출력할 때 함수 이름이 앞에 출력된다.**

```js
function IdolFunction(name, year){
    this.name = name;
    this.year = year;
}

const gaEul = new IdolFunction('가을', 2002);
console.log(gaEul); // IdolFunction { name: '가을', year: 2002 }
```