---
title: "프로퍼티 (Property)"
tags: ["C#"]
upload: "2025-06-28"
--- 

## 프로퍼티

- 변수같은 함수
- 함수와 변수를 섞은 느낌
- 은닉성을 챙길 수 있음

### 프로퍼티 사용법

- 클래스에 중괄호 있는 변수를 선언.
- get{}과 set{}의 내용을 정의하는데..
    - get에는 반환을
    - set에는 get에서 반환받은 것을 value(키워드)로 대입연산

```csharp
// 프로퍼티 선언 정의
public int Hp
{
		get { return hp; }
		set { hp = value; }
}

//public int Hp { get; set; } = 100;
```

- 프로퍼티 사용 예시 코드
    
    [](%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%20%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%8B%E1%85%B3%E1%86%B7%20a5ab13bfc138480fbf010374daed8183.md)
    
    ```csharp
    //클래스 생략
    class Knight
    {
    		// 변수, Getter & Setter 패턴
    		protected int hp;
    		public int GetHp() { return hp; }
    		public void SetHp(int hp) { this.hp = hp; }
    		
    		// 프로퍼티 선언 정의
    		public int Hp
    		{
    				get { return hp; }
    				set { hp = value; } //value에는 get의 return이 들어간다.
    		}
    
    }
    
    static void Main(//생략)
    {
    		Knight knight = new Knight();
    		knight.SetHp(100);	
    		// 프로퍼티 사용
    		kngiht.Hp = 1000;
    		int hp = knight.Hp;
    }
    ```
    
    - 변수와 Getter & Setter는 자주쓰이는 패턴이다.