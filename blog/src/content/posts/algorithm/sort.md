---
title: "정렬 알고리즘"
tags: ["알고리즘"]
upload: "2025-07-02"
---

## 용어

- **정렬** : 리스트에 포함된 원소들을 일정한 순서에 따라 재비치 하는 것
    - 빠르고 쉬운 탐색을 위함, 자료의 순서를 정하거나 탐색하는 등의 문제 해결 중 필수작업
- **키(key)값** : 정렬의 기준이 되는 속성 값

- **버블 정렬**
    - 두 인접한 원소 간의 비교와 교환의 과정을 반복하는 알고리즘
    - 리스트의 맨 앞에 있는 원소를 비교하여 큰 값을 뒤로 보내는 과정을 반복
    - 마지막 원소까지 반복 실행하면 가장 큰 원소가 맨 뒤에 위치.
    - 리스트의 뒤쪽부터 정렬이 완료된다.
    

```cpp
int i, j, temp;
for (i = n - 1; i>0; i--)
{
	for (j=0; j<i; j++)
	{
		if (list[j] > list[j+1])
		{
			temp=list[j];
			list[j] = list[j+1];
			list[j+1] = temp;
		}
	}
}
```

- **선택 정렬**
    - 리스트의 원소 중 최솟값을 찾아 맨 앞의 값과 교체하는 과정을 반복하는 알고리즘
    - 리스트의 앞쪽부터 정렬이 완료된다.
    - 선택 정렬이란 이름은 가장 작은 수를 선택하는 연산을 지칭함.
    

```cpp
for(int i = 0; i < 9; i++)
{
	for(int j = i+1; j < 10; j++)
	{
		if(data[i] > data[j])
		{
			temp = data[i];
			data[i] = data[j];
			data[j] = temp;
		}
	}
}
```

- **삽입 정렬**
    - 리스트의 원소를 한 걔씩 삽입하는 과정을 반복적으로 수행하는 알고리즘
    - 리스트의 앞쪽부터 정렬이 완료된다.
    

```cpp
for(int i = 1; i < 5; i++)
{
	int j = i;
	while((j > 0) && arr[j - 1] > arr[j])
	{
		temp = arr[j - 1];
		arr[j - 1] = arr[j];
		arr[j] = temp;
		j--;
	}
}
```

- **퀵 정렬**
    - 리스트의 원소 중 하나를 피벗(기준)으로 선택 후 원소와의 크기 비교를 통해 나머지 원소들을 분할하는 과정을 재귀적으로 반복하는 알고리즘
    - 일반적인 상황에서 가장 빠른 정렬 알고리즘
    - 첫 번째나 마지막 원소를 피벗으로 설정할 수 있음
    - 최근 세 값(좌측 끝 중앙, 중앙, 우측 끝)의 중간값을 이용하여 비벗값을 설정하는 등 다양한 피벗값 설정 연구 진행 중...
    
    ```cpp
    #include <stdio.h>
    #include <stdlib.h>
    #include <time.h>
    
    int n = 50000, pi, pivot;
    int d[50001];
    
    void Partition(int left, int right)
    {
    	int low, high;
    	
    	if(pi==left)
    		low = left + 1;
    	else low = left;
    	
    	if(pi == left) 
    		high = right - 1;
    	else 
    		high = right;
    		
    	while(low < high)
    	{
    		while(d[low] <= pivot && low < right) low++;
    		while(d[high] > pivot && high > left) high--;
    		
    		if(low<high)
    		{
    			int t = d[low];
    			d[low] = d[high];
    			d[high] = t;
    		}
    		else
    		{
    			int t = d[pi];
    			d[pi] = d[high];
    			d[high] = t;
    		}
    	}
    	
    	pi = high;
    }
    
    void Qsort(int left, int right)
    {
    	if(left >= right) 
    	return;
    	pi = left;
    	pivot = d[left];
    	Partition(left, right);
    	Qsort(left, pi - 1);
    	Qsort(pi + 1, right);
    }
    
    int main()
    {
    	int i, j, t;
    	srand((unsigned int)time(NULL));
    	
    	for(i = 1; i <= n; i++)
    		d[i] = rand() % (n + 1);
    		
    	Qsort(1, n);
    	
    	for(i = 1; i <= n; i++)
    		printf("%d ", d[i]);
    		
    	return 0;
    }
    ```