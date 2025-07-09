---
title: "상속성"
tags: ["C#"]
upload: "2025-07-02"
---

```csharp
using Console;

class Player //부모 클래스 혹은 기반 클래스
{
		public int id;
		public int hp;
		public int attack;
    public static int cnt;
		public Player()
		{
				WirteLine("Player 생성자 호출!");
		}
		public void Move()
		{
				WriteLine("Move");
		}
		public Player(int hp)
		{
				WriteLine("hp 생성자 호출!");
		}
}

class Mage : Player // 자식 클래스 / 파생 클래스
{		
		int a;
		public Mage() : /*this()*/(base(100) // = Player(10)
		{
				//부모 생성자의 인자를 넘겨줄 때
				//base()를 사용한다.
				this.a = 10;   //내 a = 10
				base.hp = 100; //부모의 hp = 100
				WriteLine("Mage 생성자 호출!");
		}

		static public Mage CreateMage()
		{
				Mage mage = new Mage();
				mage.hp = 100;
				mage.attack = 1;
				return knight;
		}
}

class Program
{
		static void Main(string[] args)
		{
				Mage mage = Mage.CreateMage();
				//출력값 : Player 생성자 호출!
								 //Mage 생성자 호출!
				//base 사용시 출력값 : hp 생성자 호출!
														//Mage 생성자 호출!
				mage.Move() //출력값 : Move
		}
}

```

### 사용 방법

- 사용 방법 : 공통적인 부분들을 부모 클래스에 담아 자식 클래스들에 상속시켜준다.
- 상속 방법 : 클래스명 옆에 " : (부모 클래스명)

### 용어, 키워드

- 상속을 해주는 상위 클래스 : 부모 클래스
- 상속을 받는 클래스 : 자식 클래스
- 부모 클래스의 기능을 자식 클래스에서 쓸 수 있음
- 자식 클래스의 생성자 호출 전 부모 클래스의 생성자가 먼저 호출된다.
- " :  **base(인자값)** "로 어떤 생성자를 호출할지 고를 수 있음.
- 부모 클래스에 접근하려면 " **base.** "를 사용해야 한다.