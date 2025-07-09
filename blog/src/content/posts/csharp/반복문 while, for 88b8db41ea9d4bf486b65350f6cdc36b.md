# 반복문 : while, for

## 반복문

- 입력한 조건이 참일동안 반복문 속 코드를 반복실행한다.

## while

- if와 유사
- 사용법 while(반복 조건) {반복할 코드}
- do를 사용하여 do while을 쓸 수 있다.
- do while은 실행하고 생각한다.
- while은 생각하고 실행한다.
- 단점 :  실수가 쉽다. → 컴퓨터 폭파!

```csharp
//hello world를 5번 출력할 때
int cnt = 0;
while (cnt < 5)
{
	Console.WriteLine("hello world");
	cnt++;
}

string answer;
do
{
	Console.WriteLine("난 최강이다 ㅇㅈ? (Y/N) : ");
	answer = Console.ReadLine();
}
while(answer != "y" || answer != "y")
{
	break;
}
```

## for

- 사용법 : for(초기(화)식, 조건식, 증감식) {반복할 코드}
- 초기식 : 변수의 값을 지정한다.  (루프 처음 시작 전 실행)
- 조건식 : 초기식의 변수로 조건식을 만든다 (루프한번이 끝나면 검토)
- 증감식 : 초기식을 증감시켜준다. (루프한번이 끝나면 실행)
- 생각하고 실행한다.

```csharp
for(int i = 0; i < 5; i++)
{
	Console.WriteLine("Hello World);
}
```

### braek와 continue

- break : switch문을 빠져나오는 역할도 하지만 반복문을 빠져나오는 역할도 한다.
- continue : 반복 돠는 코드를 처음부터 실행시킨다.
    
    ```csharp
    int a = 5;
    switch(a)
    {
    	case 5:
    	break;
    }
    
    while (a == 0)
    {
      a++;
    	if(a==3 || a== 2)
    		continue;  // 3이거나 2일 때 continue가 실행되어
    							 // 아레에 있는 코드를 무시하고 
    							 // 반복 코드를 다시 실행한다.
    	Console.WriteLine("hi");
    }
    
    ```