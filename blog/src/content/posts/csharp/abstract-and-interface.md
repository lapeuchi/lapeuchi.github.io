---
title: "추상화(abstract)와 인터페이스(interface)"
tags: ["C#"]
upload: "2025-07-02"
---

## keyword : abstract

- 클래스 앞에 abstract를 쓰면 추상 클래스가 된다.
- 추상클래스의 함수에 abstract를 쓰면 함수도 추상적으로 바꿀 수 있음
- 하나의 부모만 상속받을 수 있어서 유동성이 떨어진다.
- virtual과 달리 자식클래스에서 꼭 정의를 해주어야한다.
- 가상화(virtual)과 비슷한 느낌.

### abstract 사용법

- 클래스명 앞에, 추상화를 할 함수앞에 붙여쓴다.
- 추상 클래스 내 추상화하는 함수는 선언만 한다.
- 선언한 추상함수는 자식에서 재정의한다.
- abstract 사용 예시 코드
    
    ```csharp
    abstract class Mob
    {
    		public abstract void Shout(); //추상 함수는 선언만 한다.
    }
    
    class Orc : Mob
    {
    		public override void Shout()
    		{
    				Console.WriteLine("록타르 오가르")
    		}
    }
    
    class Slime : Mob
    {
    		public override void Shout()
    		{
    				Console.WriteLine("끈적한 소리")
    		}
    }
    ```
    

## keyword : interface

- abstract와 달리 인터페이스를 사용하면 여러 부모를 상속받을 수 있다. (유동적)

### interface 사용법

- ' interface 이름 '
- 인터페이스에서 함수를 선언만 한다.
- 인터페이스를 상속받는 자식에서 함수를 정의한다.
- interface 사용 예시 코드
    
    ```csharp
    abstract class Mob
    {
    		public abstract void Shout(); //추상 함수는 선언만 한다.
    }
    
    class Orc : Mob
    {
    		public override void Shout()
    		{
    				Console.WriteLine("록타르 오가르")
    		}
    }
    
    interface IFlyable
    {
    		void Fly();
    }
    
    class FlyableOrc : Orc, IFlyable
    {
    		void Fly()
    		{
    				Console.WriteLine("날아요우!");
    		}
    }
    ```

|  | 추상 클래스 | 인터페이스 |
| --- | --- | --- |
| **접근 지정자** | 반드시 public이어야 하는 추상 메서드를 제외한
모든 멤버는 private으로도 선언될 수 있다. | 명시하지 않아도 모든 메서드는 public으로 고정이다.재정의도 반드시 public이어야 한다. |
| **구현** | 추상 메서드를 제외한 모든 메서드는 구현을 포함할 수 있다. | 구현을 포함할 수 없다. |
| **속도** | 비교적 빠르다. | 비교적 느리다. 하지만 무시할 수 있는 수준이다. |
| **인스턴스화** | 할 수 없다. | 할 수 없다. |
| **필드** | 가질 수 없다. | 가질 수 있다. |
| **메서드** | 모든 형태의 메서드를 가질 수 있다. | 추상 메서드만 가질 수 있다.
abstract 키워드를 포함하진 않는다. |