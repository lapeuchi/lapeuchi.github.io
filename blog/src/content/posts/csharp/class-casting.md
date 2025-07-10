---
title: "클래스 형변환"
tags: ["C#"]
upload: "2025-07-02"
---

- 참고 사이트
    
    [C# 클래스의 형변환, (is- as) - 네이버 블로그.url](C_%ED%81%B4%EB%9E%98%EC%8A%A4%EC%9D%98_%ED%98%95%EB%B3%80%ED%99%98_(is-_as)_-_%EB%84%A4%EC%9D%B4%EB%B2%84_%EB%B8%94%EB%A1%9C%EA%B7%B8.url)
    
- 응용 코드
    
```csharp
class Player
{
	protected int hp;
	protected int attack;
}

class Knight : Player
{

}

class Mage : Player
{
	public int mp;
}

class Program
{
	static void EnterGame(Knight k)
	{
			
	}

	static void EnterGame(Mage m)
	{
			
	}
	
	//위처럼 사용하면 직업이 늘어나면 곤란해진다.
	//Knight와 Mage 둘다 Player를 상속받았기 때문에
	//Player 타입으로 받아서 사용할 수 있다.

	//하지만 Mage는 mp를 사용해서 아래를 쓸 수 없다.
	//그래서 상속관계인 클래스간 형식 변환이 가능.
	static void EnterGame(Player player)
	{
		//형변환에 실패해 크래쉬가 남.
		//또한 컴파일 단계에서 못잡아 실행시 클남
		//Mage mage = (Mage)player;
		//mage.mp = 100;
	}

	static void Main(string[] args)
	{
		Knight knight = new Knight();
		Mage mage = new Mage();
		
		//Mage -> Player : 100 % 문제없이 가능
		Player magePlayer = mage;	
		//Player -> Mage : ? 
		Mage mage2 = (Mage)magePlayer;
	
		EnterGame(knight);
		EnterGame(mage);
	}
}
```
    

## 기본 코드

```csharp
class Player
{
	public int hp;
	public int attack;
}
class Knight : Player
{
	public void Move() { Console.Write("Kight Move"); }
	public void Attack() { Console.Write("Kight Attack"); }
}

class Mage : Player
{
	int mp;

	public void Move() { Console.Write("Maze Move"); }
	public void Attack() { Console.Write("Maze Attack"); }
}
```

## 자식 → 부모(업 캐스팅)

- 자식 타입의 객체를 부모 타입의 변수로 참조하는 것이 가능함.
- 부모로부터 **상속 받은 맴버들만 호출 가능**
    - 자식 객체를 참조하고 있어도 부모 변수로 상속 받지 않은 자식만의 맴버를 호출하려 하면 컴파일 에러 발생

```csharp
Knight knight = new Knight(); 
Player player = knight; // 문제 X.

player.hp = 10; // 문제 X
player.Move();  // 컴파일 에러 (자식객체의 맴버 호출)
```

## 부모 → 자식(다운 캐스팅)

- 자식타입의 객체를 참조하던 부모 타입 변수를 다시 자식타입으로 형변환이 가능함
- 묵시적 형변환이 안됨 (명시적 형변환 필요)
    - 부모타입 변수가 어떤 타입의 객체를 가리키는지 알 수 없음 → 컴파일 에러 발생.
        - 객체가 메모리 할당 →  해당 코드가 실행되는 런타임 때 발생.

- 명시적 형변환은 런타임 에러가 발생할 수 있다.
    - 가능여부는 실행해야 알 수 있음

```csharp
Player player = new Knight();
Knight knight = player; // 컴파일 에러 (묵시적(자동) 형변환 안됨)
Knight knight = (Knight)player; // 컴파일 에러 X (명시적 형변환 필요)
```

### 다운 캐스팅 : 에러 없는 경우

- 다시 원래 타입의 객체로 돌려주는 케이스.

```csharp
Player player = new Knight(); // 자식 -> 부모 -> 자식
Knight knight = (Knight)player; // 문제 X
```

### 다운 캐스팅 : 에러가 발생하는 경우

- **부모 타입 변수가 자식 'A' 타입 객체를 참조**하고 있을 때 **자신만 정의되어 있는 맴버를 가진 자식 'B' 타입의 객체**를 참조하지 못한다.
    - 자식들이 가진 맴버변수가 다를 때.

```csharp
Player player = new Knight(); 자식(Kngiht) -> 부모 -> Mage
Mage mage = (Mage)player; // 런타임 에러 발생 (Mage는 mp라는 자신만의 맴버 변수를 가짐)
//Maze 타입의 변수 mage로 Knight 타입의 객체를 참조할 수 없음
// -> Knight타입의 객체를 가리키고 있는 Player는 Mage로 형변환 될 수 없음.
```

## 다운 캐스팅 런타임 에러 방지 키워드 & 문법

### 키워드 : is

<aside>
💡 **A is B  :** A 변수가 B 타입의 객체를 참조함을 bool로 반환

</aside>

```csharp
Player player = new Knight();

bool isMage = (player is Mage) // 결과 : false

if(isMage == true)
	 Mage mage = (Mage)Player;
```

### 키워드 : as

<aside>
💡 A as B : A 변수를 B타입으로 형변환 가능시 형변환 진행 후 그 결과를 bool로 리턴. 불가능 시 null 반환.

</aside>

```csharp
Player player = new Mage();

Mage mage = (Player as Mage)
if (mage != null)
		Mage mage = (Mage)player;
```