---
title: "C#에서의 메모리 할당"
tags: ["C#"]
upload: "2025-06-28"
--- 

CLR이 자동 메모리 관리 기능을 제공한다.

이 기능의 중심에는 가비지 콜렉션이 있다.

가비지 컬렉션은 프로그래머로 하여금 컴퓨터가 무한한 메모리를 가지고 있는 것처럼 간주하고 코드를 작성할 수 있게 한다.

가비지: 더 이상 사용하지 않는 객체

CLR 안에는 이러한 가비지 컬렉션을 담당하는 가비지 컬렉터라는 것이 있다.

가비지 컬렉터는 객체 중에 쓰레기인 것과 쓰레기가 아닌 것을 완벽하게 분리해 쓰레기만 수거한다.

하지만 가비지 컬렉터 또한 CPU와 메모리 자원을 소모한다.

때문에 가비지 콜렉터가 최소한으로 이 자원을 사용할 수 있게 만들 수 있다면 성능을 아낀 자원의 양만큼 끌어올릴 수 있게 된다.

# C#의 메모리 관리 장점

메모리 해제에 신경 쓰지 않아도 된다.

이미 삭제된 메모리에 접근하는 실수를 방지해준다.

잘못된 캐스팅으로 엉뚱한 메모리에 접근하지 않게 한다.

# 가비지 컬렉터 (GC : Garbage Collector)

가비지 컬렉터는 사용하지 않는 메모리를 정리하는데 동작 횟수가 많을수록 성능에 심각한 영향을 끼친다. 힙(heap) 영역에 메모리가 계속 쌓이다 특정 시점에 GC에 의해 사용되지 않는 메모리가 해제된다. Root Reference에서 사용하는 객체와 그 객체에서 할당한 객체를 찾고 나머지를 참조하지 않는 메모리 영역으로 간주해서 해제한다. 해제 후 남은 메모리를 재배치하고 다음 객체를 할당할 메모리의 포인터 위치도 재배치한다.

- **가비지: 프로그램이 실행되면서 어디에서든 더 이상 참조되지 않는 메모리**

### 가비지의 발생

### + operator를 통한 문자열 조합

모든 객체가 ToString()을 지원하기 때문에 알아서 변환, 조합된다. 이때 string 인스턴스가 생성되기 때문에 가비지가 많이 생성된다. 따라서 문자열 조합 시 새로운 객체를 생성하지 않는 StringBuilder를 사용해야 한다.

```csharp
public void Print()
{
    for (int index = 0; index < name.Length; index++)
    {
        string output = "[" + index + "]" + name;
        Console.WriteLine(output);
    }
}
```

```csharp
private StringBuilder sb = new StringBuilder();

public void Print()
{
    sb.Clear();
    for (int index = 0; index < name.Length; index++)
    {
        sb.Append("[");
        sb.Append(index);
        sb.Append("] ");
        sb.Append(name);
        sb.AppendLine();
    }
    Console.WriteLine(sb.ToString());
}
```

### 메서드 안에서 생성한 객체

클래스를 인스턴싱 할 때 반드시 new를 해줘야 한다. 이때 heap에서 메모리 할당이 일어난다. 만약 어떤 메서드 안에서 new로 생성된 인스턴스는 메서드를 빠져나오면 더 이상 사용하지 않는 가비지가 된다.

```csharp
public class Vector2
{
    public float x, y;

    public Vector2(float x, float y)
    {
        this.x = x;
        this.y = y;
    }
}

public void Print(float x, float y)
{
    Vector2 v = new Vector2(x, y);
    Console.WriteLine($"Vector = ({v.x}, {v.y})");
}
```

만약 이를 구조체로 바꾼다면 ne로 인스턴스를 만들어도 value type이기에 stack 영역에 메모리가 할당되며 메소드를 빠져나가면 자동으로 삭제된다.

```csharp
public struct Vector2
{
    public float x, y;

    public Vector2(float x, float y)
    {
        this.x = x;
        this.y = y;
    }
}

public void Print(float x, float y)
{
    Vector2 v = new Vector2(x, y);
    Console.WriteLine($"Vector = ({v.x}, {v.y})");
}
```

### Boxing

value type 객체를 reference type 객체로 포장하는 과정이다. 값을 Object 인스턴스 내부에 래핑하고 힙에 저장한다. 수행하는 데에만 많은 계산 과정이 필요하다. 문제는 boxing 과정에서 힙에 메모리를 할당하게 되고 가비지를 생성하게 된다.

```csharp
int i = 123;
// The following line boxes i.object o = i;
```

![](https://blog.kakaocdn.net/dn/cRmvRC/btqSKNBBS4c/sTE0lUIldarP8OSu4mZi00/img.gif)