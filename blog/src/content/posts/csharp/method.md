---
title: "메소드(함수)"
tags: ["C#"]
upload: "2025-07-02"
---
## 메소드(함수)

- 코드를 재사용 할 수 있게 기능별로 묶는것
- 코드가 길어질 때 한곳에 몰아 쓸 수는 없음
- 효율성에 좋다. ex)Console.**WriteLine()**;
- 메소드와 함수는 차이가 있지만 따질 필요는 없다.
- 형식 : **반환명 함수명(매개변수 목록)**

```csharp
using System;

	namespace CSharp
	{
		static int Add(int a, int b)
		{
			int result = a + b;
			return result;
		}
		
		static void Main(string[] args)
		{
			int a = 4;
			int b = 5;
			int result = Program.Add(4, 5);
			Console.WritteLine(result);
			Program.PrintHi();
		}

	static void PrintHi() //void형은 반환이 없다.
	{
		Console.WriteLine("Hi");
	}	

}
```