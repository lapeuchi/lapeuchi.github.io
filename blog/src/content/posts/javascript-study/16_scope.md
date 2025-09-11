---
title: "Scope"
tags: ["js"]
upload: "2025-09-11"
---

## 개요

### 스코프 (scope)
스코프는 변수나 함수의 이름 같이 대상을 식별할 이름을 찾아내기 위한 규칙이다.
선언된 변수에 대해서 접근할 수 있는 유효한 범위를 의미한다.

변수 numberOne를 선언하고
numberOne을 출력하는 함수 하나를 정의하고 바로 실행,  
똑같은 이름으로 함수를 하나 더 만드는데 그 안에 똑같은 이름으로 numberOne을 새로 선언, 출력하게하고 실행해보자.

levelOne을 두 번 호출했는데 어떤 함수의 결과가 나오는지, numberOne은 어떤게 출력되는지 살펴보자.

```js
var numberOne = 20;

function levelOne(){
    console.log(numberOne);
}

levelOne();

function levelOne(){
    var numberOne = 40;

    console.log(numberOne);
}

levelOne();
```

출력 결과
```
40
40
```

둘 다 40이 나왔다. numberOne을 40으로 선언하고 출력한 두 번째 levelOne()을 실행한 것으로 보인다. 20으로 선언한 numberOne과 첫 번째 levelone()은 무시된 것을 알 수 있다.


## JS의 Scope 방식

Scope는 두 가지 방식으로 나뉘다.

* Lexical Scope: 선언된 위치가 상위 스코프를 정한다.
* Dynamic Scope: 실행한 위치가 상위 스코프를 정한다.

JS는 Lexical Scope를 방식을 사용한다.

그럼 JS에서 어떤 스코프 규칙을 가지는지 살펴보자.
>* 전역 스코프(Global scope) : 전역으로 선언된 변수에 대해 접근과 조작이 가능한 유효한 범위, 전역으로 선언된 변수는 어디에서든 참조 할수있다.  
>
>* 지역 스코프(Local scope) : 변수가 블록 내에서 접근이 가능한 유효한 범위. 함수 내에서 유효한 경우의 함수 스코프와 블록 내에서 유효한 경우의 블록 스코프를 의미한다.
>
>* 함수 스코프(Function scope): 함수 내에서 유효한 범위 
>
>* 블록 스코프(Block scope): 블록내에서 유효한 범위
>
>* 전역 변수(Global variable) : 바깥쪽 전역에서 선언된 변수 어디든 참조 가능 
> 
>* 지역 변수(Local variable) : 블록 안에서만 선언된 변수 안에서만 참조 가능, 같은 이름의 전역 변수보다 우선순위가 높다.

개요에 있던 예시에 맞춰 설명해보겠다. 

같은 이름으로 함수 2개를 만들고, 같은 이름으로 변수를 선언하는데 하나는 전역변수 다른 하나는 두 번째 함수 안에서 지역 변수로 선언하였다.

가장 마지막으로 선언된 함수를 실행한다는 것을 알 수 있고
numberOne이 40으로 출력된 이유는 지역 변수가 전역 변수보다 우선순위가 높기 때문이다.

## var와 let, const
var 키워드는 함수 레벨 스코프만 만들어낸다.
let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다

```js
var i = 999;

for(var i = 0; i < 3; i++){
    console.log(i);
}
console.log(`i in global scope : ${i}`)

i = 999;
// block level scope
for(let i = 0; i < 3; i++){
    console.log(i);
}
console.log(`i in global scope : ${i}`);
```
출력 결과
```
0
1
2
i in global scope : 3
0
1
2
i in global scope : 999
```