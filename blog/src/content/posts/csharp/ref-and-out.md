---
title: "한정자 : ref, out"
tags: ["C#"]
upload: "2025-06-28"
--- 

```csharp
using System

namespace CSharp
{
	class Program
	{
		static void AddOne(int num)
		{
			number += 1;		
		}

		static void Main(string[] args)
		{
				int a = 0;
				Program.AddOne(a);
				Console.WriteLine(a); //0 
		}
	}
}
```

함수에서 0을 1을 증가시키기는 하는데

함수와 a의 메모리는 딴판이다.

따라서 결과값은 1이 0이 나온다.

1이 나오게 하려면 a의 메모리를 바꿔주어야 한다.

즉 참조를 하여야한다. 

참조를 할 때는 " ref "로 명시를 해주어야 한다.

### 참조

- 간단히 진퉁
- ref를 사용해서 할 수 있다.

### 복사

- 기본적으로 아무것도 명시하지 않았을 때
- 보통 ref(참조)를 사용하기 보다 **복사**로 변수에다가 담아주는게 더 좋다...
- 간단하게 짭퉁

### ref

- 호출되는 메서드에서 매개 변수로 사용되는 변수의 값을 영구적으로 변경할 때
- 호출에 사용되는 변수의 값을 전달 하는 대신변수에 대한 참조 자체가 전달된다.
- 메소드를 실행하는 동안 매개 변수의 변경 내용이 메서드에 대한 매개 변수로 사용되는 원레 변수에 유지되도록 한다.
- 즉, 기존 변수를 메서드에서 수정하려 할 때 사용한다.
- 사용법 : 매게변수 앞에 ref입력 (매게 변수로 담는 변수는 초기를 해줘야 한다.)

```csharp
class Program
{
	static void AddOne(ref int number)
	{
		number += 1;
	}

	static int AddOne2(int number)
	{
		return number + 1;
	}

	static void Main(string[] args)
	{
		int a = 0;
		Program.AddOne(ref a);
		a = Program.AddOne2(a);

		Console.WriteLine(a);
	}
}
```

### out

- ref 키워드와 매우 비슷한 효과를 가짐
- out을 사용해 선언된 매개 변수의 수정 내용은 메소드 외부에서도 볼 수 있다.
- out 매개변수의 모든 초기 값이 매서드 내에서 무시됨
- out 매개변수는 메소드를 진행하는 동안 할당해야 한다.
- 즉, 메서드 내에서 생성된 값을 반환할 때 사용한다.
- 여러개 반환이 가능하다.
- 사용법 : 매게변수 앞에 out입력

```csharp
class Program
{
	static void Divide(int, a, int b, out int result1, out int result2)
	{
		result1 = a / b;
		result2 = a % b;
	}

	static void Main(string[] args)
	{
		int num1 = 10;
		int num2 = 3;

		int result1;
		int result2;
		Divide(10, 3, out result1, out retult2);
	}
}
```