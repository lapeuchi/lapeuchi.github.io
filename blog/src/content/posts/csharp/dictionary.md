---
title: "Dictionary"
tags: ["C#", "자료구조"]
upload: "2025-06-28"
--- 

## Dictionary

- 리스트와 비슷함.
- 리스트보다 빠르게 값을 찾을 수 있음
- Hashtable 기법을 사용함
- 리스트보다 메모리를 많이 씀

```csharp
class Monster
{
		public Monster(int id) {this.id = id}
		public int id;
}

static void Main(string[] args)
{
		Dictionary<int, Monster> dic = new Dictionary<int, Monster>();
		
		dic.Add(1, new Monster(1));
		// 삽입 방법 1. 
		dic[5] = new Monster(5)
		// 삽입 방법 2. 
		
		dic.Clear(); //모두 삭제.
		
	  for(int i = 0; i < 10000; i++)
		{
				dic.Add(i, new Monster(i));
		}
	  
	  Monster mon = dic[2000]; //만약 2000번째를 못찾으면 -> 프로그램 다운.
    
		//위를 방지하기 위해...
	  bool found = dic.TryGetValue(20000, out mon); //20000 번에는 없어서 false를 반환.
   
		dic.Remove(1000);  //1000 번 째 삭제.
		
		
}
```