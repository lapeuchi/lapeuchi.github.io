---
title: "인수분해"
tags: ["수학"]
upload: "2025-07-18"
---

## 인수분해

> 하나의 다항식을 두 개 이상의 다항식의 곱의 꼴로 나타내는 것

전개의 반대작업이다.

예를 들어
$ x^2 + 5x + 6 $를
$(x + 2)(x + 3)$ 처럼 나타내는 것이다.

## 인수란?

> 인수분해 했을 때 곱해진 각각의 식을 말한다.

예를 들면 이전 예시에서 $ x^2 + 5x + 6 $를 

$(x + 2)(x + 3)$로 인수분해 하였다.

인수분해된 식에서 $x + 2$와 $x + 3$이 $ x^2 + 5x + 6 $의 인수가 되겠다.

## 공통인수란?
> 다항식에서 각각의 항에 공통으로 들어 있는 인수
예를 들어 다항식 $mx + my$에서 m이 공통인수이다.

## 이차식의 인수분해

### 완전제곱식

> 다항식의 제곱으로 이루어진 식

$ x^2 + 4x + 4 = (x + 2)^2 $

$x^2 + 4x + 4$는 완전제곱식이다.

### 이차식 $ x^2 + ax + b $가 완전제곱식이 되기위한 조건

대입 시 아래 식이 참이되면 그 식은 완전제곱식이다.

1. $b = (\frac{a}{2})^2$,
2. $a = \pm 2\sqrt{b}$

### 이차식의 인수분해 공식
1. 완전제곱  
$a^2 + 2ab + b^2 = (a+b)^2$   
$a^2 - 2ab + b^2 = (a-b)^2$  
ex) $ x^2 + 4x + 4 = (x + 2)^2, x^2 - 2x + 1 = (x - 1)^2$

2. 합, 차의 곱
$a^2 - b^2 = (a + b)(a - b)$  
ex) $ x^2 - 9 = (x + 3)(x - 3)$

3. 일반적인 곱 1  
$ x^2 + (a + b)x + ab =(x + a)(x + b)  
ex) $ x^2 + 3x + 2 = (x + 1)(x + 2) $

4. 일반적인 곱 2  
$ acx^2 + (ad + bc)x + bd = (ax + b)(cx + d) $  
ex) $ 6x^2 - x - 2 = (2x + 1)(3x - 2) $

이 경우 아래와 같은 방법으로 인수분해가 가능하다.
![이미지](https://private-user-images.githubusercontent.com/78643629/467941047-c9967e97-ffcd-4b68-89b1-a962d34af311.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTM0MDQxOTksIm5iZiI6MTc1MzQwMzg5OSwicGF0aCI6Ii83ODY0MzYyOS80Njc5NDEwNDctYzk5NjdlOTctZmZjZC00YjY4LTg5YjEtYTk2MmQzNGFmMzExLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzI1VDAwMzgxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTJhNWFkNDNiYTczNDY2MWNjOTUxN2NlYzVlNjU1ZjE5ZmU3YTViOTkyMzY3NGI5NjExN2Y1MjQ4NWUzZDlmMjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.oQ4BhsSU0HuWg0zpwadvX05Woqthxu8WfmnRw1HkY-0)

중요한건 이차항과 상수항의 계수를 두 수의 곱으로 나누고
대각으로 곱한 값을 더했을 때 값이 일차항의 계수와 같게 만들어야한다.

그 후 이미지처럼 배치하면 된다.

### 복잡한 식의 인수분해
공통인수가 있는 경우, 그 공통인수로 묶어낸다.  
ex) $ x^2 + 5xy + 6y = y(x^2 + 5x + 6) = y(x + 2)(x + 3)$

공통부분이 있으면 그 공통 부분을 문자로 치환한다.  
ex)

$$
\begin{align*}
  (x + 3)^2 + 5(x + 3) + 6 
  &= A^2 + 5A + 6 \\
  &= (A + 2)(A + 3) \\
  &= (x + 3 + 2)(x + 3 + 3) \\
  &= (x + 5)(x + 6)
\end{align*}
$$

## 삼차식의 인수분해
### 삼차식의 인수분해 공식
