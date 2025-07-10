---
title: "생성자"
tags: ["C#",]
upload: "2025-06-28"
--- 

- **객체의 초기화를 담당**하는 서브루틴
    - **객체가 처음 생성될 때 호출**되어 맴버(클래스 속의) 변수를 초기화 하고, 필요에 따라 자원을 할당.
    
- 클래스명과 동일
- 반환타입 입력 x
- 인자를 추가하여 여러 생성자를 만들 수 있음
- 생성자 옆에 ' : this() '를 작성하면 기본 생성자를 실행하고,
    - 사용되는 생성자를 실행한다.

```csharp
class Mob
{
	enum _type { boss, field };
	
	public Mob()
	{
		hp = 100;
		attack = 10;				
	}

	public Mob(enum type) : this()
	{
		_type = type
		if(_type == _type.boss)
		{
				hp = 400;
				attack = 30;
		}
	}

	public Mob(enum type) : this()
	{  
	_type = type
	if(_type == _type.boss)
	{
			hp = 400;
			attack = 30;
	}
	}
}
```