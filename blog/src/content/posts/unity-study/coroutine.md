---
title: "코루틴"
tags: ["Unity", "C#"]
upload: "2025-06-28"
--- 

### 개념

간혹 Update가 아닌 곳에서도 반복적으로 코드가 실행되어야할 필요가 있을 때가 있다.
이럴 때 코루틴을 사용하는 것이 매우 효과적이다.

또한, 업데이트문을 사용하면 원하든 원하지 않든 업데이트문이 매 프레임마다 계속 반복적으로 실행되지만,
코루틴을 사용한다면 자신이 필요한 순간에만 반복하고 필요하지 않을 때에는 전혀 사용하지 않음으로써 자원관리를 매우 효과적으로 할 수 있다.

그 밖에도 당장 실행되는게 아니라 일정 시간동안 멈춰있다가 그 뒤에 동작하게 하거나 특정 조건을 부여해서 코드가 실행되도록 할 수도 있다.

유니티에서 yield return으로 반환할 타입으로 여러 편리한 기능을 추가해줘서, 

**시간 관리** 등 코루틴을 더 유동적으로 쓸 수 있다 (스킬 쿨타임 등)

```csharp
yield return new WaitForSecond(Skill_A_CoolTime);
```

```csharp
//Console에 폭탄에 불을 붙이고 몇 초 후 터지는 로그를 남기는 코루틴
protected override void Init()
{

    StartCoroutine(ExplodeAfterSeconds(5.0f));
    StartCoroutine("ExplodeAfterSeconds", 8.0f);
}

IEnumerator ExplodeAfterSeconds(float seconds)
{
    Debug.Log("치이이익~");
    yield return new WaitForSeconds(seconds); // seconds만큼의 시간이 흐를 동안 정지 (초 단위)
    Debug.Log("퍼엉!");
}
```