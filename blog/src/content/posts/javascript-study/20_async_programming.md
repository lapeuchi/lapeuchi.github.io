---
title: "JS의 비동기 프로그래밍"
tags: ["js"]
upload: "2025-09-11"
---

## 개요

JS는 싱글스레드이다. 어느 한 순간에 동시에 단 하나의 작업만 실행 할 수 있다.
이 단점을 비동기 프로그래밍으로 어느정도 극복할 수 있다.

## Sync Programming (동기 프로그래밍)

오래 걸리는 작업을 표현하기 위해 2초간 반복문을 실행하는 함수를 작성한 것이다.

```js

function longWork() {
    const now = new Date();

    const milliseconds = now.getTime();
    // 2초 
    const afterTwoSeconds = milliseconds + 2 * 1000;
  
    // 2초가 지나면 반복 종료
    while(new Date().getTime() < afterTwoSeconds){

    }

    console.log('완료');
}

console.log('Hello'); // Hello
longWork(); // 완료
console.log('World'); // World
```

프로그램을 실행하면
'Hello'가 출력되고 longWork()의 긴 작업이 끝나는 2초 정도 후 '완료'가 출력되고 함수가 종료된다. 마침내 'World'가 출력됨을 확인할 수 있다.

우리가 큰 서비스를 개발하개 되었을 때, 동기 프로그래밍만 한다면 긴 작업이 생겼을 때 사용자가 대기하는 상황이 많아질 것이다.

## Async Programming
비동기 프로그래밍을 통해 싱글스레드로 자바스크립트 런타임을 실행하더라도 효율적으로 스레드를 사용할 수 있다.
비동기 프로그래밍을 하면 긴 작업을 하는동안 다른 작업을 할 수 있게 해준다.

JS에서 기본으로 제공해주는 함수인 `setTimeout(callback, time)`가 있다. time 후에 callback을 실행해주는 역할을 한다. `setTimeout`은 비동기로 실행되는 함수이다.

아래는 setTimeout()으로 2초 후 '완료'를 출력하는 함수를 작성한 것이다.
```js
function longWork(){
    setTimeout(()=>{
        console.log('완료');
    }, 2000);
}

console.log('Hello');
longWork();
console.log('World');
```
출력 결과
```
Hello
World
완료
```

동기 프로그래밍 예제 처럼 2초를 기다리라고 한건 똑같은데 출력 순서는 바뀌었다.
longWork()가 종료되고 '완료' 출력되었음을 알 수 있다. 

setTimeout은 2초 뒤에 '완료'를 출력하려고 한다. 그 2초의 시간 동안 스레드를 사용할 수 있게된다.

## Event Loop
결론은 비동기 프로그래밍을 통해 싱글스레드로 자바스크립트 런타임을 실행하더라도 효율적으로 스레드를 사용할 수 있다는 것이다.

실제로 이 효율이라는게 어디서 나오는지 확인해보자.

우선 Event Loop의 개념을 알아햐 한다.

JS 엔진은 싱글 스레드이다. 스레드, 메모리 힙, 콜 스택 모두 하나씩 있다.

동기 함수 A(), C()와 비동기 함수 B()가 있다고 생각해보자.

동기 함수 A()를 호출하면 콜스택에 올라간다. A() 실행 중 비동기 함수인 B()가 호출되어 콜스택에 올라간 상황이라고 생각해보자.

비동기 함수가 실행되면 call stack에서 Task Queue(또는 Event Queue)로 옮겨진다.
비동기 함수가 call stack에서 빠져나왔기 때문에 call stack을 막고 있지 않게 된다.
그래서 비동기 함수 B()의 작업을 수행할 수 있는 것이다.

setTimeout()에서 2초를 기다리라 했었을 때, queue 안에서 2초 기다리고 있는 것이다.

이 상황에 C()를 호출하여 call stack에 들어갔다 금방 끝나 빠져나왔다고 하자.

B()가 동기 함수였다면 차례대로 A, B, C가 콜스택에 쌓이고 C, B, A 순서로 종료되었을 텐데

B()가 비동기 함수여서 B() 실행 전 까지 C()가 종료되고 A()까지 종료될 수 있다.

JS 런타임이 생성되는 순간 이벤트 루프가 생성되는데 이벤트 루프는 task queue를 바라보며 종료된 함수를 계속 체크를 한다.
queue에서 끝난 함수가 있으면 다시 콜스택으로 옮긴다. B()가 올라가면서 B() 안의 비동기 작업이 끝났으니 B()안의 동기로 실행될 작업이 시작된다. 그리고 끝나면 call stack에서 내려간다.

이게 event loop이다.

함수에 비동기 작업이 있으면 Call Stack에서 Task Queue로 넘어갔다 비동기 작업이 끝나면 다시 돌아오는 과정이 event loop이다.