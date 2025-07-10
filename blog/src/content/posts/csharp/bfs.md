---
title: "BFS"
tags: ["C#", "알고리즘"]
upload: "2025-06-28"
--- 


<aside>
💡 너비 우선 탐색 (BFS, Breadth First Search)

</aside>

DFS와 달리 BFS는 쓰이는 곳이 적다.
주로 사용되는 것이 최단 거리 찾기(길찾기)에 사용된다.

### 개념

- 루트 노드(혹은 다른 임의의 노드)에서 시작해서 인접한 노드를 먼저 탐색하는 방법

### 동작 과정

1. 시작 정점으로부터 가까운 정점을 먼저 방문하고 멀리 떨어져 있는 정점을 나중에 방문하는 순회 방법
2. 즉 깊게(deep) 탐색하기 전에 넓게(wide) 탐색하는 것
3. 두 노드 사이의 최단 경로 혹은 임의의 경로를 찾고 싶을 때 이 방법을 선택함

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

    bool[] found = new bool[6];

    public void BFS(int start)
    {
        found = new bool[6];
        int[] parent = new int[6];
        int[] distance = new int[6];

        Queue<int> q = new Queue<int>();
        q.Enqueue(start);     
        found[start] = true;
        parent[start] = start;
        distance[start] = 0;
		
        while (q.Count > 0)
        {
            int now = q.Dequeue();
            Console.WriteLine("now: " + now);

            for (int next = 0; next < 6; next++)
            {
	              // 인접하지 않았으면.. 스킵
                if (adj[now, next] == 0)
                    continue;
                // 이미 발견한 요소면.. 스킵
                if (found[next])
                    continue;

                q.Enqueue(next);
                found[next] = true;
                parent[next] = now;
                    distance[next] = distance[now]+1;
            }
        }
    }
        
}
```