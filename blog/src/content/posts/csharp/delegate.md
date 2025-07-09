---
title: "delegate (대리자)"
tags: ["C#"]
upload: "2025-06-28"
--- 

## delegate

- 말그대로 대신함.
- 메소드에 대한 참조.
- 함수 자체를 인자로 넘겨주고 함수를 호출함
- 함수 자체를 인자로 넘겨주는 형식 (함수X)
- C++의 함수 포인터와 비슷함.
- 일어날 일들을 함수로 이어 실행할 수 있음

### delegate 사용법

```csharp
//대리자 선언
delegate int Onclicked();

// 함수 자체를 인자로 넘겨주고
static void ButtonPressed(OnClicked clickedFuncition)
{
		// 인자로 받은 함수 호출();
		clickedFunction();
}

static int TestDelegate()
{
		Console.WriteLine("Hello Delegate");
		return 0;
}

static int TestDelegate2()
{
		Console.WriteLine("Hello Delegate2");
		return 0;
}

static void Main(string[] args)
{
		//delegate (대리자)
		ButtonPressed(TestDelegate);
		
		//위쪽 보다 아래쪽으로 사용하는 것이 좋음
		Onclicked oc = new Onclicked(TestDelegate);
		clicked += TestDelegate2;		
}

```

[delegate](https://genesis8.tistory.com/203)