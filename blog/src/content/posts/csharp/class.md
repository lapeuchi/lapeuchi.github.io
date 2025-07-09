---
title: "클래스 class"
tags: ["C#"]
upload: "2025-06-28"
--- 

```csharp
class Main
{
		//필드
		public int hp;
		private int attack;
		protected int speed;
		
		//생성자
		public Main()
		{

		}
		
		//함수(메소드)
		public void Attack()
		{

		}
}
```

```csharp
class Knight
{
	//knight라는 객체의 설계도라고 봐도 됨 (기사맛 붕어빵 틀)
	public int hp;
	public int attack;
	//class에서 변수를 선언하는 곳을 field라고 한다

	public void Move()
	{
		Console.WriteLine("Move");
	}
	public void Attack()
	{
		Console.WriteLine("Attack");
	}
	//field 아레는 메소드를 정의한다.
}

class Program
{
	static void Main(string[] args)
	{
		Knight knight = new Knight;
		//Knight knight = null;  
		//존재하지 않는 객체로 선언 (오류남)
	

		//객체를 새로 만들 때 new를 사용한다.
		//붕어빵이 틀에서 만들어짐
		//new가 없으면 변수가 할당되지 않아 오류가 남

		knight.hp = 100;
		knight.attack = 10;
		knight.Move();
		knight.Attack();
	}
}
```