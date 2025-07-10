---
title: "코루틴 (Coroutine)"
tags: ["C#"]
upload: "2025-06-28"
--- 

## 특징

- 함수의 상태를 저장/복원이 가능하다.
- 원하는 타입으로 반환이 가능하다.
    - 응용하는 것이 무긍무진함.

## 용도

- 엄청 오래 걸리는 작업을 잠시 끊음
- 원하는 타이밍에 함수를 잠시 Stop/복원하는 경우

```csharp
// i가 1000의 약수일 때 Stop하는 코루틴
public IEnumerator GetEnumerator()
{
		for(int i = 1; i < 1000000; i++)
		{
				if (i % 1000 == 0)
						yield return null;
		}
}
```