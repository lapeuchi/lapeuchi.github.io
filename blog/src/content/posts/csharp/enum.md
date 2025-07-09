---
title: "열거형"
tags: ["C#"]
upload: "2025-07-02"
---

- 하나의 그룹
- 사용법 : enum 이름
- 

```csharp
enum Choise  
{
	 Rock = 1;
	 Paper = 2;
	 Scissors = 0;
}

switch(choice) //입력받은 정수
{
	case (int)Choice.Scissors:
	break;

	case (int)Choice.Rock:
	break;

	case (int)Choice.Paper:
	break;

	default
	break;
}

```