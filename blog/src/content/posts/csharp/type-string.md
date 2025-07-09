---
title: "문자열"
tags: ["C#"]
upload: "2025-07-02"
---

- 코드

```csharp
static void Main(string[] args)
{
	string name = "Harry Potter";
	
	// 1. 찾기
	bool found = name.Countains("Harry"); // true반환 (Harry를 포함함)
	int index = name.IndexOf('z'); // 6 반환 (6 번째 포함됨)

	// 2. 변형
	name += "Junior" //Harry Potter Junior
	string lowerCaseName = name.ToLower(); //소문자로 반환
	string upperCaseName = name.ToUpper(); //대문자로 반환
	string newName = name.Replace('r', 'l'); //r을 l로 바꿔서 반환
	
	// 3. 분할
	string[] names = name.Split(new char[] { ' ' });
	//names[0] = Harry
	//names[1] = Potter
	//names[2] = Junior

	string substringName = name.Substring(5);
	//Harry **Potter Junio**r 반환(인자값 부터)
}
```