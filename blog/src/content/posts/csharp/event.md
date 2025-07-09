---
title: "event"
tags: ["C#"]
upload: "2025-06-28"
--- 

## Keyword : event

- delegate를 외부에서도 호출할 수 있는 문제 때문에 event를 사용한다.
- 문법은 함수와 비슷하다.
- 구독 신청과 취소는 할 수 있지만 막 호출할 수 없다
- event로 옵저버 패턴을 만들 수 있다.
    - Observer Pattern : 구독자를 모집하고 특정 이벤트가 발생했을 때 그 구독자들에게 메세지를 뿌리는 패턴
    

### 사용법

1. event를 발생시키기 위한 event 핸들러 delegate 선언
2. 게시자 클래스 선언
3. 이벤트 선언
4. 이벤트 게시자가 있는지 체크
5. 구독자 클래스 선언
6. 이벤트 사용

- 이벤트 사용 예시 코드
    
    ```csharp
    // Observer Pattern
    class InputManager
    {
    		public delegate void OnInputKey();
    		public event OnInputKey InputKey;
    
    		public void Update()
    		{
    				if(Console.KeyAvailable == false)
    						return;
    				
    				ConsoleKeyInfo info = Console.ReadKey();
    				if(info.Key == ConsoleKey.A)
    				{
    						//모두한테 알려준다!
    						InputKey();
    				}
    		}
    }
    ```
    
    main function code
    
    ```csharp
    static void OnInputTest()
    {
    		Console.WriteLine("Input Received!");
    }
    
    static void Main(string[] args)
    {
    		InputManager inputManager = new InputManager();
    		inputManager.InputKey += OnInputTest; //구독 (A를 누르면 추가된 함수가 실행됨)
    		//inputManager.InputKey -= OnInputTest; //구독취소 
    		while (ture)
    		{
    				inputManager.Update();
    		}
    
    		// inputManager.Update(); delecate이 코드는 사용할 수 없다.
    }
    ```