---
title: "메소드 오버로딩"
tags: ["C#"]
upload: "2025-06-28"
--- 


```csharp
class Program
{
	static int Add(int a, int b)
	{
		return a+b;
	}

	static int Add(int a, int b, int c)
	{
		return a+b+c;
	}
	
	static void Main(string[] args)
	{
		int a = 5;
		int b = 3;
		int c = 4;
		Console.WriteLine(a,b);
		Console.WriteLine(a,b,c);
	}
}
```

## 오버로딩

- 함수명을 다른 매게변수 개수, 형식으로 재선언, 재정의 하는 것
- 함수의 매개변수를 다르게 하여 여러상황을 해결할 수 있음

### 선택적 매개변수

```csharp
//..생략
static void Add(int a, int b, int c = 0, float d = 1.0f)
{
	return a+b+c-d;
}

static void Main(stirng[] args]
{
	Add(1, 2, d:2.0f, c:3);    //필요없는건 입력할 필요 없이 쓸 
} //매개변수를 지정하고 값을 입력해서 쓸 수 있음
```

- 함수의 매개변수를 초기화해주고 추가 옵션으로 사용할 수 있음