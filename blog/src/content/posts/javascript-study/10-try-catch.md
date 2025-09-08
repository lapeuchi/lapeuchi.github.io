---
title: "try-catch"
tags: ["js"]
upload: "2025-09-05"
---

## try-catch

```js
function runner() {
    try {
        console.log('Hello');

        // throw new Error('큰 문제가 생겼습니다!');

        console.log('Code Factory');
    } catch (e) {
        console.log('---catch---');
        console.log(e);
    } finally {
        console.log('---finally---');
    }
}
runner();
```
Exception 구분을 하기 위해서 catch 블럭에서 타입으로 체크해줘야 한다.
```js
try {
  throw new TypeError("타입 에러 발생!");
} catch (e) {
  if (e instanceof TypeError) {
    console.log("타입 에러 처리");
  } else if (e instanceof ReferenceError) {
    console.log("참조 에러 처리");
  } else {
    console.log("기타 에러");
  }
}

```