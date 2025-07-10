---
title: "static"
tags: ["C#"]
upload: "2025-06-28"
--- 

- 아래처럼 필드의 변수들이 같은 class에 있긴 하지만 객체마다, 인스턴스마다 다를 수 있다.

```csharp
class Knight 
{
    //필드
    public int hp;
    static public int cnt; //한 개만 존재
    //생성자
    public Knight() 
    {
        counter++;
        hp = 100;
        attack = 10;
    }
	//함수
    public void Move() {}
}

class Program
{
    static void Main(string[] args)
    {
        Knight knight = new Knight();
        knight.hp = 10;
        Knight knight2 = new Knight();
        knight2.hp = 80;
        Knight knight3 = new Knight();
        knight3.hp = 200;
        //hp가 인스턴스마다 다를 수 있음
    }
}
```

- static : 정적
- static으로 선언을 하면 각 인스턴스의 종속적인 것이 아닌 class에 종속적인게 된다.
    - 즉, 인스턴스가 아무리 생성되어도 한 개만 존재한다.
- 인스턴스들은 변수와 함수를 공유하여 사용할 수 있음
    - ex ) 움직이는 함수, 공격 함수, 기본 hp, ...
    
      
    
- **this**키워드를 사용할 수 없음 (어느 하나의 객체가 가지고 있지 않기 때문)