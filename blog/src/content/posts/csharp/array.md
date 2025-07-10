---
title: " 배열"
tags: ["C#"]
upload: "2025-06-28"
--- 


```csharp
class Player {}
class Mob {}

class Program
{
	Player player;
	Monster monster_1;
	Monster monster_2;
	Monster monster_3;
	//...
}
```

- 저렇게 하나씩 다 만들어주는 것보다. 자료구조를 이용하여 쉽게할 수 있다.

## 배열 사용법

```csharp
static void Main(string[] args)
{
	int[] scores = new int[5]; // 5 개의 int형 데이터를 담을 수 있는 바구니.
	int[] Coinscores = new int[] {1, 5, 10, 15, 20};
	int[] Itemscores = new int[5] {1, 5, 10, 15, 20};
	int[] bulletScores = {1, 2, 5, 3, 2}
	//5개면 0,1,2,3,4 번째가 변수가 생긴다.
	scores[0] = 10;
	scores[1] = 30;
	scores[2] = 3 - 1 ;
	scores[3] = 50 * 2;
	scores[4] = 43;
	for(int i = 0; i < 5; i++)
	{
			Console.WriteLine(scores[i]); // **i 번째 scores** 출력
	}
}
```

 

- 사용법 : 자료형[] 배열명 = new 자료형[개수]; (위 코드는 네 방법이 있지만 이게 가장 보기 좋다.)

### 배열의 기능

```csharp
//1번 코드
for (int i = 0; i <scores.Length(); i++)
	Console.WriteLine(scores[i]);

//2번 코드
foreach (int score in scores)
{
	Console.WriteLine(score);  
}
```

- 배열명.Length : 배열의 크기
- foreach(int i, in 배열자료형) : 1번 코드의 역할은 물론 수행하며 더 좋음.

[배열을 이용한 알고리즘 & 함수](%E1%84%87%E1%85%A2%E1%84%8B%E1%85%A7%E1%86%AF%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%92%E1%85%A1%E1%86%AB%20%E1%84%8B%E1%85%A1%E1%86%AF%E1%84%80%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%B7%20&%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%89%E1%85%AE%208ebc9aa47f094d62ad8b3bd1641068c8.csv)