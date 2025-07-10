---
title: "리스트 List"
tags: ["C#", "자료구조"]
upload: "2025-06-28"
--- 

## 배열의 문제점

- 할당할 수가 적으면 배열을 써도 문제없지만 많아지면 메모리 낭비로 이어진다.

## 자료구조 : List

- 키워드 namespace : System.Collections.Generic
- 크기를 정확히 정할 수 없을 때 크기를 유동적으로 늘릴 수 있는 자료구조.  (→ 동적 배열)
- 배열과 달리 값이 하나 사라지면 다른 값들의 순서를 하나씩 옮겨 빈자리를 채운다.
    - 리스트는 순차적으로 이어지지 않은 자료를 논리적으로 이어진 것 처럼 사용할 수 있게 해준다.

### List 사용법

- 문법 : List<dataType> listName

```csharp
List<int> list = new List<int>();
```

### 자료 삽입&삭제

```csharp
list.Add(1); //list[0] = 0;
//list[0] = 1; 같이 사용시 오류발생

for(int i = 0; i < 5; i++)
	list.Add(i) //[0, 1, 2, 3, 4]

	list.Remove(3) // [0, 1, 2, 4]
  //만약 수가 겹치면 앞에 있는 값을 삭제함.

  list.Clear(); //리스트의 원소들을 모두 삭제. [없음]

	for(int i = 0; i < list.Count; i++)
		Console.WriteLine(list[i];
	
	foreach(int num in list)
		Console.WriteLine(num);
```