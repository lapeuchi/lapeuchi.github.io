---
title: "object 와 var"
tags: ["C#",]
upload: "2025-06-28"
--- 

```csharp
static void Main(~~~)
{
		var obj1 = 3;
		var obj2 = "hello world"

		object obj3 = 3;
		object obj4 = "hello world";

		int num = (int)obj3;
		string str = (string)obj4;
}
```

### object

- **아무런 타입에 같다 붙여도 소화 가능 하다.**
- **타입이 진짜 object 타입이 됨.**
- c#의 자료형들은 object타입을 상속받아 만들어져서 변환이 가능.
- 간편해도 속도가 느림
- 참조 타입

### var

- 타입을 명시적으로 입력해주지 않아도 컴파일러가 타입을 **때려 맞춤.**
- 복사 타입