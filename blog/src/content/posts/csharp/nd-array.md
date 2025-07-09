---
title: "다차원 배열"
tags: ["C#"]
upload: "2025-07-02"
---

```csharp
static void Main(string[] args)
{
	int[,] arr = new int[2, 3];		
	int[,] arr = new int[2, 3] { {1, 2, 3}, {1, 2, 3} };		
	// 2F [방1, 방2, 방3]
	// 1F [방1, 방2, 방3]
			

	arr[0, 0] = 1;
	arr[1, 0] = 1;		
}
```

- 사용법 : arr[a][b] , arr[a, b]

### 다차원 배열 함수

- arr.Length() : 전체 원소 개수
- arr.GetLength(0) : 행의 개수
- arr.GetLength(1) : 열의 개수

## arr[a][b]와 arr[a, b]

```csharp
static void Main(string[] args)
{
	int[,] map = new int[2, 3]; //단점 : 수가 고정되서 들어감.
	
	//아래의 코드를 사용하기도 한다.
	int[][] a = new int[3][];
	a[0] = new int[3];
	a[1] = new int[6];
	a[2] = new int[2]

	a[0][0] = 1;
}
```

### 예시 코드

- 2차원 배열의(y, x좌표) 맵 랜더링
    
```csharp
class Map
{
	int[,] tiles = 
	{   // 1 = 벽, 0 = 길
		{ 1, 1, 1, 1, 1 },
		{ 1, 0, 0, 0, 1 },
		{ 1, 0, 0, 0, 1 },
		{ 1, 0, 0, 0, 1 },
		{ 1, 1, 1, 1, 1 },
	}
	public void Render()
	{
		ConsoleColor defaultColor = Console.ForegroundColor;
		for (int y = 0; y < GetLength(1); y++)
		{
			for (int x = 0; x < GetLength(2); x++)
			{
				if (tiles[y, x] == 1)
					Console.ForegroundColor = ConsoleColor.Red;
				else 
					Console.ForegroundColor = ConsoleColor.Green;
				Console.Write("O");
			}
			Console.WriteLine();
		}
		Console.ForegroundColor = defaultColor;
	}

	static void Main(string[] args)
	{
		Map map = new Map();
		map.Render();
	}
}
```