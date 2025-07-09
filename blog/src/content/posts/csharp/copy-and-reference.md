---
title: "C#의 복사와 참조"
tags: ["C#",]
upload: "2025-06-28"
--- 

```csharp
// ref 참조
class Knight
{
	public int hp;
	public int attack;

	//deef copy 깊은 복사
	public Knight Clone()
	{
		//clone을 호출해 새 knight를 만들어 자신이 가지고 있던 
		//값을 넣고 return.
		Knight knight = new Knight;
		knight.hp = hp;
		knight.attack = attack;
		return knight;
	}
}

// copy 복사
struct Mage
{
	public int hp;
	public int attack
}

class Program
{
	static void KillMage(Mage mage)
	{
		mage.hp = 0;
	}
	static void KillKnight(Knight knight)
	{
		knight.hp = 0;
	}
	static void Main(string[] args)
	{
		Mage mage; //struct는 new가 없어도 에러가 없다.
		mage.hp = 100;
		KillMage(/*ref */mage); //결과 hp : 100
		//함수에 복사값을 넘겨주어서 결과가 바뀌지 않는다.
		//ref를 사용하면 참조를 하여 hp가 0이 될 것이다.
	
		Knight knight = new Knight();
		knight.hp = 100;
		KillKnight(knight) //결과 hp : 0
	
		Mage mage2 = mage;
		mage2.hp = 0; 
		
		Knight knight2 = knight;
		knight.hp = 0;  //hp = 0;
		
		Knight knight3 = new Knight();
		knight.hp = knight.hp;
		knight.attack = knight.attack;

		//깊은 복사 사용 예시
		Knight knight4 = knight.Clone();
		kngiht4.hp = 0;
	}
}
```

## class와 struct의 차이

- class로 선언된건 기본적으로 참조를 해서 넘기고
- struct는 기본적으로 복사를해서 넘긴다 (원본에는 영향이 없음).
    - 참조가 필요하면 ref를 사용한다.

## 깊은 복사

- class속에 별도의 Clone() 객체를 만들어 클래스의 변수들만 똑같이 넣어주어 return을 해주는 것