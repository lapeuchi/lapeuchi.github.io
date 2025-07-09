---
title: "다형성"
tags: ["C#"]
upload: "2025-06-28"
--- 

```csharp
class Player
    {
        public int hp;
        public int attack;

        public virtual void Move()
        {
            Console.Write("Player Move");
        }
    }
    class Knight : Player
    {
        public override void Move()
        {
            Console.Write("Knight Move");
        }
    }

    class Mage : Player
    {
        public override void Move()
        {
            Console.Write("Mage Move");
        }
    }

...

int Test(Player player) 
{ 
    player.Move();
}
```
    

## 다형성의 개념

- **상속**하는 함수라도 **업 캐스팅**할 때 자식마다 **다르게** 호출할 때 사용

### 키워드 : virtual & override

- **virtual** : 가상함수
- **override** : 오버라이딩
    - 오버로드와 다름(면접 단골 난제.)

## 다형성 이용방법

- 부모 클래스에서 다형성을 이용할 함수에 가상함수를 선언하고
- 자식 클래스에서 override 함수를 재정의한다.

### 키워드  sealed

- 오버라이딩을 할 때 같이 사용된다 (사용할 일 없음)
- 손자 클래스에서의 오버라이딩을 못하게 봉인시킨다.
    - 상속받은 그대로 사용만 가능

```csharp
class Player
{
    public int hp;
    public int attack;

    public virtual void Move()
    {
        Console.Write("Player Move");
    }
}
class Knight : Player
{
    public sealed **override** void Move()
    {
        Console.Write("Kight Move");
    }
}

class SuperKnight : Knight
{
    public override void Move()  // 봉인되었기 때문에 컴파일 에러 발생.
    {
        Console.Write("Kight Move");
    }
}
```