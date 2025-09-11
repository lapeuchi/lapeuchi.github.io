---
title: "Execution Context (실행 컨텍스트)"
tags: ["js"]
upload: "2025-09-11"
---

## Execution Context(실행 컨텍스트)

실행하려는 JS코드와 코드를 실행할때 필요한 정보를 담고있는 특수한 환경이다. 코드 실행에 필요한 모든 데이터를 들고있는 환경인 것이다.

Execution Context는 크게 두가지로 나뉜다.
* Global Context: 최상위 Execution Context이다. 코드를 실행하면 무조건 생성되는 context로 웹에서의 window 객체나 nodejs에서의 global 객체를 생성하고 들고있는다.
* Function Context: 함수가 실행될때마다 함수별로 실행되는 context이다. 함수 실행에 대한 모든 정보를 갖고 있다.

## Execution Context Stack 

JS를 일반적으로 실행하면 싱글스레드로 실행된다. 싱글스레드 안에는 하나의 Memory Heap(메모리 힙)이 존재하고 하나의 Call Stack(호출 스택)이 존재한다.

Call Stack을 JS에서 자세히 얘기하면 **Execution Context Stack**이다.

Execution Context가 생성이 될 때 어떤 일이 일어나는지 알아보자.

### Creation Phase (생성 단계)

* Global Object를 생성한다. (widnow 또는 global 객체가 생성되고 함수에서는 arguments 객체가 생성된다.)
* this를 window 또는 global에 바인딩한다.
* 변수와 함수를 Memory Heap에 배정하고 기본 값을 undefined로 저장한다. (호이스팅이 일어나는 이유는 Creation Phase가 Execution Phase보다 먼저 일어나기 때문이다.)
  
### Execution Phase (실행 단계)
* 코드를 실행한다.
* 필요하다면 새로운 Execution Context를 샐성한다.