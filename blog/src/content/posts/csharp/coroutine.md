---
title: "코루틴 (Coroutine)"
tags: ["C#"]
upload: "2025-06-28"
--- 

## 특징
> 유니티 코루틴은 실행을 일시 중지하고 재개할 수 있는 특별한 메서드이다.

실행 도중에 제어권을 유니티 엔진에 반환해 다른 작업을 처리할 수 있게 한다.

- 함수의 상태를 저장/복원이 가능하다.
- 원하는 타입으로 반환이 가능하다.

## 용도
- 뭔가를 몇 초 뒤 실행해야할 때
- 엄청 오래 걸리는 작업을 비동기로 처리 가능
- 이외에 여러가지 상황에 쓸 수 있어 응용이 무긍무진하다.

## 코루틴 반환 클래스

반환은 **yield return**의 형식을 지켜야 한다. ~~까지 중단하라는 의미이다.

### null
Update()가 끝날 때까지 대기한다.

```csharp
IEnumerator CoTest()
{
    yield return null;
}
```

### WaitForEndOfFrame()
프로그램에서 한 프레임워크가 완전히 종료될 때까지 대기한다, 즉 모든 Update()가 끝나고 화면 렌더링까지 끝날 때 까지 대기한다.

```csharp
IEnumerator CoTest()
{
    yield return WaitForEndOfFrame();
}
```

### WaitForFixedUpdate()
FixedUpdate()가 끝날 때까지 대기한다.
```csharp
IEnumerator CoTest()
{
    yield return WaitForFixedUpdate();
}
```

### WaitForSeconds(float t)
t초가 지날 때까지 대기한다. (Time.timeScale의 영향을 받는 시간을 의미)
```csharp
IEnumerator CoTest()
{
    yield return WaitForFixedUpdate(1.0f);
}
```

### WaitForSecondsRealtime(float t)
현실 시간으로 t초가 지날 때까지 대기한다. (Time.timeScale의 영향을 받지않는 절대적인 시간을 의미)
```csharp
IEnumerator CoTest()
{
    yield return WaitForSecondsRealtime(1.0f);
}
```

### WaitUntil(Func<bool> predicate)
predicate가 true를 반환할 때 까지 대기한다.
```csharp
public bool isDead = false;
IEnumerator CoTest()
{
    isDead = false;
    yield return WaitUntil(()=> isDead == true); // true면 실행
	Debug.Log("죽음");
}
```

### WaitWhile(Func<bool> predicate)
predicate가 가 false를 반환할 때 까지 대기한다.
```csharp
public bool isLive = true;
IEnumerator CoTest()
{
    isDead = true;
    yield return WaitWhile(()=> isLive == false); // false면 실행
	Debug.Log("죽음");
}
```

### StartCoroutine(IEnumerator routine);
인자로 들어간 routine이 종료될 때 까지 대기한다.
```csharp
public bool isDead = false;
IEnumerator CoTest()
{
    isDead = false;
    yield return StartCoroutine(CoSubTest()); // CoSubTest()가 끝나는 1초 뒤에 CoTest()가 재개된다.
	Debug.Log("죽음"); 
}

IEnumerator CoSubTest()
{
    yield return new WaitForSeconds(1f); 
}
```

## 예제

i가 1000의 약수일 때 Stop하는 코루틴이다. 코루틴으로 Update() 처럼 프레임마다 반복하고 싶으면 반복문에 null을 반환하여 사용한다.
```csharp
public IEnumerator CoGetEnumerator()
{
    for(int i = 1; i < 1000000; i++)
    {
        if (i % 1000 == 0)
            yield return null;
    }
}
```