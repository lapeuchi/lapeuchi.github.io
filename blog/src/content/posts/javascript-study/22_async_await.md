---
title: "Async & Await"
tags: ["js"]
upload: "2025-09-12"
---

```js
bool v = true;
const getPromise = (seconds)=> new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (v)
            resolve('완료');
        else
            rejeect('실패')
    }, seconds * 1000)
});

async function runner(){
    try{
        const result1 = await getPromise(1);
        console.log(result1);
        const result2 = await getPromise(2);
        console.log(result2);
        const result3 = await getPromise(1);
        console.log(result3);
    }catch(e){
        console.log('---catch e---');
        console.log(e);
    }finally{
        console.log('---finally---');
    }
}

runner();
```
출력 결과
```
완료
완료
완료
---finally---
```
만약 v가 false이면, 출력결과는 '에러'가 하나 출력될 것이다.