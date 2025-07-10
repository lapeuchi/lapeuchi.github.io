---
title: "형식 변환"
tags: ["C#"]
upload: "2025-06-28"
--- 

1. 형식의 크기가 다른 경우

```csharp
int a = 1000;
short b = (short)a;

short c = 100;
int d = c;
```

1. 크기가 같은데 부호가 다를 때

```csharp
byte c = 255;
sbyte sb = (sbyte)c; 
//0xFF = 0b11111111 = -10

```

1. 소수 

```csharp
float f = 3.1414f;
double d = f; // d = 3.141400021321....
//실수는 정수와 달리 인접한 값으로 변환을 한다. 
```

형식 변환을 잘못해주면 오버, 언더플로우, 값 손실 등 여러 문제가 일어날 수 있다.