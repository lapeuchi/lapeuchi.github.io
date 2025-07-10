---
title: "은닉성"
tags: ["C#"]
upload: "2025-07-02"
---

```csharp
class Knight
{
	public int hp = 10;
	private int s = 1;
	protected int a = 2;
}

class SuperKnight : Knight
{
	void Test()
	{
		hp = 10;
		a = 1; // 자식 클래스에서 수정가능한 protected
	}
}

class Program : Knight
{
	static void Main(string[] args)
	{
		Knight knight = new Knight();
		knight.hp = 100;
		knight.s = 10; //s의 보호수준이 private이어서 //오류가 생긴다.
	}
}
```

### 은닉성

- 은닉 : 감추다라는 의미
- 접근 지정자를 사용하여 함수와 변수의 보호수준을 정해주어 사용범위를 지정해줄 수 있다.

### 접근 지정자 사용 이유

- 협업을 할 때 프로그램이 커지면 커질수록 서로 쓴 코드들을 완벽히 이해할 수 없기 때문에 모든 변수와 함수를 공개시켜 놓으면 문제가 생긴다.

### 접근 지정자(한정자) 종류

- public : 모두에게 공유
- private : 자신만
- protected : 자신과 자식클래스만