---
title: "C# 배열, 동적 배열, 연결 리스트 비교 - List<T> vs Array<T> vs ArrayList"
tags: ["C#", "자료구조"]
upload: "2025-06-28"
---

## ✅ 배열 (Array)

- 사용할 방 개수를 고정해서 계약 (변경 불가)  
- 연속된 방을 배정 받아 사용  
- ✔ 장점: 연속된 메모리  
- ❌ 단점: 크기 변경 불가  
- 같은 타입만 저장 가능 (type-safe)  
- 다차원 배열도 지원

### 🔸 예제 코드

```csharp
class ArrayTest
{
    int[] a = new int[3];

    void Main()
    {
        a[0] = 1;
        a[1] = 3;
        a[2] = 51;
    }
}
```

## ✅ 동적 배열 (List<T>, ArrayList)
크기 유동적 (동적으로 방 추가 가능)

연속된 방을 사용하지만, 초과 시 이사 발생

✔ 장점: 유동적인 공간 확보

❌ 단점: 중간 삽입/삭제 시 이동 비용 발생

List<T>는 제네릭 기반으로 type-safe

ArrayList는 다양한 타입 저장 가능하나 type-unsafe (박싱/언박싱 발생)

### 🔸 기본 예제
```csharp
List<int> a = new List<int>(); // 특정 타입만 저장 가능 (int)
a.Add(1);
a.Add(2);
a.Add(3);

ArrayList b = new ArrayList(); // 다양한 타입 저장 가능
b.Add("문자열");
b.Add(13.41);
b.Add(1);
```

### 🔸 직접 구현 예제 (MyList<T>)
```csharp
class MyList<T>
{
    const int DEFAULT_SIZE = 1;
    T[] _data = new T[DEFAULT_SIZE];

    public int Count;
    public int Capacity { get { return _data.Length; } }

    public void Add(T item)
    {
        if (Count >= Capacity)
        {
            T[] newArray = new T[Count * 2];
            for (int i = 0; i < Count; i++)
                newArray[i] = _data[i];
            _data = newArray;
        }

        _data[Count++] = item;
    }

    public T this[int index]
    {
        get => _data[index];
        set => _data[index] = value;
    }

    public void RemoveAt(int index)
    {
        for (int i = index; i < Count - 1; i++)
            _data[i] = _data[i + 1];

        _data[--Count] = default(T);
    }
}
```
## ✅ 연결 리스트 (LinkedList<T>)
연속되지 않은 메모리 공간을 사용

✔ 장점: 중간 삽입/삭제에 유리 (O(1))

❌ 단점: 인덱스 접근은 느림 (Random Access 불가)

C#에는 제네릭 형태인 LinkedList<T>만 공식 제공됨

### 🔸 직접 구현 예제 (MyLinkedList<T>)
```csharp
class MyLinkedListNode<T>
{
    public T Data;
    public MyLinkedListNode<T> Next;
    public MyLinkedListNode<T> Prev;
}

class MyLinkedList<T>
{
    public MyLinkedListNode<T> Head = null;
    public MyLinkedListNode<T> Tail = null;
    public int Count = 0;

    public MyLinkedListNode<T> AddLast(T data)
    {
        var newNode = new MyLinkedListNode<T> { Data = data };

        if (Head == null)
            Head = newNode;

        if (Tail != null)
        {
            Tail.Next = newNode;
            newNode.Prev = Tail;
        }

        Tail = newNode;
        Count++;
        return newNode;
    }

    public void Remove(MyLinkedListNode<T> node)
    {
        if (Head == node) Head = Head.Next;
        if (Tail == node) Tail = Tail.Prev;

        if (node.Prev != null) node.Prev.Next = node.Next;
        if (node.Next != null) node.Next.Prev = node.Prev;

        Count--;
    }
}
```

## 요약

| 항목         | Array<T>                 | ArrayList              | List<T>                 | LinkedList<T>              |
|--------------|--------------------------|------------------------|-------------------------|-----------------------------|
| 크기         | 고정                     | 가변                   | 가변                    | 가변                        |
| 타입 안전성  | ✅ (type-safe)           | ❌ (object 기반)       | ✅ (제네릭)             | ✅ (제네릭)                 |
| 성능         | 빠름 (연속 메모리)       | 느림 (박싱/언박싱)    | 빠름 (제네릭)          | 삽입/삭제에 최적화         |
| 임의 접근    | O(1)                     | O(1)                   | O(1)                    | ❌ O(n)                     |
| 삽입/삭제    | ❌ 불가                  | ❌ 느림                | ❌ 느림                 | ✅ 빠름 (O(1))              |

