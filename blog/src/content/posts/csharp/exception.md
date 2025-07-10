---
title: "Exception (예외 처리)"
tags: ["C#"]
upload: "2025-06-28"
--- 

## try - catch문

```csharp
try
{
		// ...
}
catch (Exception e) //
{
		// 예외 발생 시 처리부분
}
catch (/*경우 e*/)
{

}
```

- catch의 인자값에서 여러 경우의 예외를 설정할 수 있다.

### 코드의 흐름

- 코드 수행
    
    ◦ try 블럭내에서 예외가 발생한 경우
    
    ▪발생한 예외와 일치하는 catch 블럭이 있는 경우
    
    **⇒ 블럭내의 코드를 수행 후 try-catch문을 빠져나간 다음 해당 구문 다음 문장부터 수행한다.**
    
    ▪발생한 예외와 일치하는 catch 블럭이 없는 경우
    
    **⇒ 예외는 처리되지못하고 종료된다.**
    
    ◦ try블럭내에서 예외가 발생하지 않은 경우
    
    **⇒ catch문 코드는 수행되지않으며 try 블럭내 코드 수행 후 구문을 빠져나가 다음 문장부터 수행한다.**
    
    - 예외처리 사용 예시 코드
        
        ```csharp
        void arithmeticException() {
            String[] strings = new String[]{"hello", "crong", "coco"};
        
            for (int i = 0; i < 4; i++) {
                System.out.println(strings[i]); //string은 0~2까지의 값만 있어 3번째에 오류가 난다.
            }
        }
        ```
        
        위의 오류가 생기는 코드를 예외처리를 사용해서 수정하면...
        
        ```csharp
        @Test
        void arithmeticException() {
            //before
            String[] strings = new String[]{"hello", "crong", "coco"};
        
            try {
                for (int i = 0; i < 4; i++) {
                    System.out.println(strings[i]);
                }
            } catch (ArrayIndexOutOfBoundsException e) {
                System.out.println("Empty");
            }
        }
        ```