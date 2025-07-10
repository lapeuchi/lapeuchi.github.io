---
title: "제너릭(Generic)"
tags: ["C#"]
upload: "2025-06-28"
--- 

1. (Generic Type) 제네릭 타입
- 보통 클래스나 인터페이스, 메서드를 사용할 때, 동일한 기능을 수행하지만, 입력하는 데이터 형식만 틀린 경우가 있습니다.
- 이때 매개변수를 일일히 넣어서 클래스나 인터페이스, 메서드를 만들지 않고, 제네릭 타입(Generic Type)을 사용하여 만들 수 있습니다.
- 코드 재사용성이 높습니다.

- 제너릭이 없으면…
    
    우리만의 자료구조를 무식하게 여러 버전으로 만든다고 가정했을 때...
    
    ```csharp
    class MyIntList
    {
    		int[] arr = new int[10];		
    }
    
    class MyFloatList
    {
    		float[] arr = new float[10];		
    }
    
    class MyShortList
    {
    		short[] arr = new short[10];		
    }
    
    class MyObjectList
    {
    		object[] arr = new object[10];		
    }
    
    static void Main(string[] args)
    {
    		
    }
    ```
    
    타입 하나하나 경우를 따져 만들어야 해서 불편하다.
    

## 일반화

```csharp
한정자 반환형식 일반화이름<T> (T 매개변수) (where T : 조건) 
{
    코드 1;
    코드 2;
    코드 3;
    ...
    return 반환값
}
```

- 정의 : 특정 사례들의 공통되는 속성들을 일반적인 개념이나 주장으로 공식화하는 추상화의 한 형태.
- 프로그래밍에서의 정의 : 데이터 타입에서 연관있는 여러 개체 집합을 묶는 것.
- 위의 코드처럼 여러 데이터 타입의 버전을 하나로 줄이기 위함.
- <template변수>를 붙이면 Generic class가 된다. 보통 T를 씀
- T : template의 약자.

```csharp
class MyList<T> 
{
		T[] arr = new T[10];

		public T GetItem(int i)
		{
				return arr[i]
		}
}

class Monster
{

}

static void Test<T>(T input)
{
		
}

static void Main(stirng[] args)
{
		MyList<int> myIntList = new MyList<int>();
		int item = myIntList.GetItem(0);
		MyList<short> myShortList = new MyList<short>();
		MyList<Monster> myMonsterList = new MyList<Monster>(); 

		Test<int>(3);
		Test<float>(3.0f);
}
```

### T에 제약 조건 걸기: " Where T : (조건) "

```csharp
where 형식매개변수 : 제약조건
```

- struct : T는 값 형식으로 제한
- class : T는 참조 형식으로 제한
- new() 매개 변수가 없는 생성자로 제한
- 부모클래스명 : 자식클래스로 제한
- 인터페이스명 : 명시한 인터페이스로 제한
- U : 다른 형식 매개 변수 U로부터 상속받은 클래스로 제한

```csharp
private void general<T> (T value) where T : struct
{
    Console.WriteLine(value);
}

private void Form1_Load(object sender, EventArgs e)
{
    int[] one = { 1, 2, 3 };
    string two = "일반화";
    double three = 45.6;
    bool four = true;

    foreach (int num in one) general<int>(num);
    //general<string>(two);
    general<double>(three);
    //general<object>(four);
}
```