# 분기문 : if, else, else if

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

```

[비트 연산](%E1%84%87%E1%85%B5%E1%84%90%E1%85%B3%20%E1%84%8B%E1%85%A7%E1%86%AB%E1%84%89%E1%85%A1%E1%86%AB%2013e840af764b413eb770529027328fda.md)