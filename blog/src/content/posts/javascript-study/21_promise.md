---
title: "Promise"
tags: ["js"]
upload: "2025-09-11"
---

## Callback Hell (콜백 지옥)

프로그래밍을 할 때 콜백 안에 콜백을 넣는 방식은 좋지 않은 방법이다. 이런식으로 콜백이 얽히고 얽힌 것을 콜백 헬이라고 한다.

```js
function waitAndRun(){
    setTimeout(()=>{
        console.log("1번 콜백");

        setTimeout(()=>{
            console.log("2번 콜백");
            // setTimeo....
        })
    })
}
```

## Promise
콜백 지옥을 해결하기 위해 있는 것이 Promise이다. 비동기 작업의 개수가 많아져도 들여쓰기가 깊어지지 않는다.

promise의 콜백에서 resolve()를 호출하면 then의 콜백이 실행되고 reject()를 호출하면 catch의 콜백이 실행되는 구조이다. resolve는 성공을, reject는 문제가 생겼을 때 호출하면 된다.

> Promise(callback(resolve, reject)): 함수 안에 콜백이 들어간다.
> * resolve: then의 콜백을 호출하는 함수이다. then에 인자를 넘겨줄 수 있다.
> * reject: resolve와 다른 경우(error 발생, 등)의 인자를 then에 넘겨줄 수 있다.
> * promise.then(callback(res)): Promise에 넣은 콜백에서 resolve() 혹은 reject()가 실행되면 호출되는 콜백을 매개변수로 받는다.
```js

let isResolved = true;

const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(isResolved){
            resolve('성공')
        }else{
            reject('에러');
        }
        
   }, 2000);
});

getPromise(3)
    .then((res) => {
        console.log('--- first then ---');
        console.log(res);
    })
    .catch((res)=>{
        console.log('--- first catch ---');
        console.log(res);
    })
    .finally(()=>{
        console.log('--- finally ---');
    });
```
대략 2초뒤에 then()의 콜백이 실행되었다.

resolve의 인자로 넣은게 timeoutPromise.then 콜백의 res로 넘어와 '성공'이 출력되었다. 만약 reject가 호출되었다면 catch 콜백이 실행되어 '에러'가 출력되었을 것이다.

### promise를 반환하는 함수를 만들어 활용하기

아래 예시는 then에서 promise 객체를 반환해서 계속 then을 이어가는 코드이다.
콜백이 중첩되었지만 처음의 콜백 지옥보다 보기가 그나마 쉬워졌다.
> 추가로 Promise 콜백에 사용할 매개변수도 정의해줄 수 있다. (예시 seconds 참고)

```js
const getPromise = (seconds) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('완료');
    }, seconds);
});

getPromise(3)
    .then((res) => {
        console.log('first then:', res); // first then: 완료 --> 3초 기다리고 출력됨
        return getPromise(1);
    }).then((res)=> {
        console.log('second then:', res); // second then: 완료 --> 1초 기다리고 출력됨
        //return getPromise(...
    });
```
