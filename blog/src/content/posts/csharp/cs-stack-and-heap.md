---
title: "스택과 힙"
tags: ["C#",]
upload: "2025-06-28"
--- 


### 스택

기본적으로 값 형식이 저장된다.
프로그램을 실행하는데 필요한 메모리 공간, 메소드가 호출되는데 필요한 메모리가 스택에 저장된다. → 지역변수, 매개변수, 리턴 값 등

메모리가 꽉차는 것을 방지, 효율적으로 사용하기 위해 Stack 자료구조와 똑같은 방식으로 작동한다. LIFO(후입선출) 방식으로 가장 나중에 저장된 값을 가장 먼저 반환하는 것이다.

메소드의 호출이 끝나는 순간, 스택메모리에서 LIFO 순서대로 삭제 합니다.

```csharp
public void StackEx()
{
	int a = 1;
	int b = 2;
	a = 10;
	b = 20;
}
```


### 힙

기본적으로 참조 형식이 저장된다.

힙은 메모리 제한이 없다(스택에 비해 많음).

new 키워드를 이용해서 생성한 메모리가 저장된다. → 자료구조, 클래스

```csharp
public class Test
{
	private float x; // 힙
	private float y; // 힙

	public int Add(int i//스택, bool j//스택)
	{
		char a = 'a' // 스택
		int b = 5; // 스택
		exStackHeap ex = new StackHeap(); // 힙

		return 3;
	}
}
```

위 그림에서 전역변수 "x"와 "y"도 힙(Heap)에 저장된다, 클래스를 생성할때 new 키워드로 생성하기 때문에, 메소드가 아닌 전역변수도 힙(Heap)에 저장된다.

```csharp
public void HeapEx(){

	//전역변수
	public int num; 

	// 메소드
	public void Heap(){

            int[] array = new int[3]{0, 1, 2};

            HeapEx ex01 = new HeapEx();
            ex01.num = 10;

            HeapEx ex02 = ex01;
            ex02.num = 20;
    }
}
```

![](https://blog.kakaocdn.net/dn/brjWzn/btqANEpd0t1/dpWICsWx7gLzNvlU396Tx0/img.jpg)

![](https://blog.kakaocdn.net/dn/cfRKO4/btqAQk35Yv4/FqnxB3JId1PaND8BHWHoL1/img.jpg)

|  | **스택** | **힙** |
| --- | --- | --- |
| **접근 속도**  | 매우 빠름 | 느린 접근 (상대적) |
| **메모리 크기** | 제한이 있음(OS마다 다름) | 제한 없음 |
| **삭제** | 메소드 종료시 LIFO로 삭제 | GC가 관리
(직접 관리해야 하기도 함) |
|  **변수 접근** | 해당 메소드 내에서만 접근 가능 | 전역적으로 접근 가능 |