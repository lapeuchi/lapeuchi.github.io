---
title: "static"
tags: ["C#", "알고리즘"]
upload: "2025-06-28"
--- 

## DFS 알고리즘

<aside>
💡 깊이 우선 탐색(DFS, Depth-First Search)

</aside>

### 개념

그래프에서 **깊은 부분을 우선적으로 탐색하는 알고리즘**
DFS는 **스택 자료구조 혹은 재귀함수**를 이용

### 동작 과정

1. 탐색 시작 노드를 스택에 삽입하고 방문 처리합니다.
2. 스택의 최상단 노드에 방문하지 않은 인접한 노드가 하나라도 있으면 그 노드를 스택에 넣고 방문 처리. 
방문하지 않은 인접 노드가 없으면 스택에서 최상단 노드를 꺼냅니다.
3. 2의 과정을 수행할 수 없을 때까지 반복

### 코드

```csharp
class Graph
{
    int[,] adj = new int[6, 6]
    {
        { 0, 1, 0, 1, 0, 0},
        { 1, 0, 1, 1, 0, 0},
        { 0, 1, 0, 0, 0, 0},
        { 1, 1, 0, 0, 1, 0},
        { 0, 0, 0, 1, 0, 1},
        { 0, 0, 0, 0, 1, 0}
    };

    List<int>[] adj2 = new List<int>[]
    {
        new List<int>() { 1, 3 },
        new List<int>() { 0, 2, 3 },
        new List<int>() { 1 },
        new List<int>() { 0, 1, 4 },
        new List<int>() { 3, 5 },
        new List<int>() { 4 }
    };

		// 1. 우선 now부터 방문하고
    // 2. now와 연결된 정점들을 하나씩 확인하여,
    //    [아직 미발견 상태]라면 방문한다.
    bool[] visited = new bool[6];
		
		// 2차원 배열
    public void DFS(int now)
    {
        Console.WriteLine("now: " + now);
        // now 부터 방문
        visited[now] = true;

        for (int next = 0; next < 6; next++)
        {
            // 연결되어 있지 않으면... 스킵
            if (adj[now, next] == 0)
                continue;

            // 이미 방문했다면... 스킵
            if (visited[next] == true)
                continue;

            DFS(next);
        }
    }
		
		// List
    public void DFS2(int now)
    {
        Console.WriteLine("now: " + now);

        // now부터 방문
        visited[now] = true;

        foreach (int next in adj2[now])
        {
            // 이미 방문했다면.. 스킵
            if (visited[next])
                continue;

            DFS2(next);
        }
    }

		// 연결이 끊어진 그래프에서도 모든 그래프를 탐색할 수 있게하는 메소드
    public void SearchAll()
    {
        visited = new bool[6];
        for (int now = 0; now < 6; now++)
        {
            if (visited[now] == false)
            {
                DFS(now);
            }
        }
    }
}
```