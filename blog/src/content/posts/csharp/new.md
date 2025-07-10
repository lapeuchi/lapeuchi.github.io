---
title: "new"
tags: ["C#"]
upload: "2025-07-02"
---

- 부모 클래스의 함수와 이름은 같지만 새로운 함수로 재정의가 필요할 때 사용
- 부모의 A함수와 자식의 A함수는 완전 다른 함수.
- new는 붙이지 않아도 상관없다. (가독성 차이)

- 코드 (펼치기 / 접기)
    
    ```csharp
    class Player
    {
    		public int hp;
    		public int attack;
    
    		public void Move()
    		{
     				Console.WriteLine("Player Move!");
    		}
    }
    
    class Knight : Player
    {
    		public new void Move()
    		{
    				Console.Write("Knight Move!");
    		}
    }
    
    public static void main(string[] args)
    {
    		Knight knight = new Knight();
    		knight.Move();
    		//출력 : Knight Move!
    }
    ```