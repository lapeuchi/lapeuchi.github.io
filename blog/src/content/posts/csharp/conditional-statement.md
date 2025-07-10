---
title: "조건문"
tags: ["C#"]
upload: "2025-06-28"
--- 

분기문 : 조건을 입력하여 여러 상황에 맞는 처리를 할 수 있음

조건이 참이면 중괄호 속 명령을 실행한다.

```csharp
int hp = 10;
bool isDead = (hp <= 0);

if(isDead) //죽었을 때 (hp <= 0)
{
	 Console.WriteLine("You are dead");
}
else // 죽지 않았을 때 (hp > 0 || !isDead)
{
	 Console.WriteLine("You are alive");
}

if(hp > 50 && isDead == false)   //체력이 50을 초과하고 
{                                //죽지 않았을 때                                       
	Console.WriteLine 
}
else if (hp >= 100 && !isDead) //체력이 100이상이고 죽지 않았을 때
{
	Console.WriteLine("You are Healthy")
}


## switch

- int범위 이하의 정수와 문자, String만 사용가능
- switch(조건 기준 변수)
- case(switch의 매게 변수가 가져야 할 조건)

```csharp
int choice = 0;
switch (choise)
{
	case 0: //choise가 0인 경우
		Console.WriteLine("0");
		choise
		break; //조건문 탈출
	case 2: //choise가 2인 경우
		Console.WriteLine("2");
		break;
	default //나머지인 경우
		Console.WriteLine("?");
		break;
}

```

## 삼항 조건 연산자

```csharp
bool isPair = ((number % 2) == 0 ? true : false;
// isPair에 number를 2로 나누어 떨어지면 true 아니면 false를 저장한다.
```