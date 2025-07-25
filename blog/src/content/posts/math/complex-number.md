---
title: "복소수"
tags: ["수학"]
upload: "2025-07-18"
---

## 복소수

* 임의의 실수 a, b에 대하여 $ a + bi$ 꼴로 나타내어지는 수를 복소수라고 한다.
예) $ 2 + 3i $, $ 1 + 0.5i $, $ \sqrt{2} + \sqrt{3}i $

* 복소수 $ a + bi $ 에서 $ a $를 이 복소수의 실수부분, $ b $를 허수부분이라고 한다.

예시
1. 복소수 $ 2 + 5i $의 실수부분은 $ 2 $이고 허수부분은 $ 5 $이다.
2. 복소수 $ 3 + 0.7i $의 실수부분은 $ 3 $이고 허수부분은 $ 0.7 $이다.
3. 복소수 $ \sqrt{2} + \sqrt{3}i $의 실수부분 $ \sqrt{2} $ 허수부분은 $ \sqrt{3} $이다.

## 복소수의 집합관계 (허수와 순허수의 관계)

복소수 $ a + bi $에서...

* $ a + bi (b != 0) $ → $ a + bi $, $ bi $  
  실수가 아닌 복소수 $ a + bi(b != 0) $를 허수라고 한다.  
  예) $ 7 + 8i $, $ \sqrt{2} + 3.3i $, $ 3i $, $ 0.5i $

* 허수 $ a + bi $, $ bi $ 중에 특히 $ a = 0 $, $ b \ne 0 $일 때 $ bi $를 **순허수**라고 한다.  
  예) $ 3i $, $ 0.5i $
 
  ![순허수](https://private-user-images.githubusercontent.com/78643629/470189012-2d2cc5e3-e78c-4e06-984e-432f0982b9b9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTM0MzI0ODMsIm5iZiI6MTc1MzQzMjE4MywicGF0aCI6Ii83ODY0MzYyOS80NzAxODkwMTItMmQyY2M1ZTMtZTc4Yy00ZTA2LTk4NGUtNDMyZjA5ODJiOWI5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzI1VDA4Mjk0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTkwNjNiMGNhYTE2OTBkNzhjMTU2ZjhiMDUzYWJlNzVjOGY0ZmFmZmExN2E0ODNkN2I3NGY3YTc5YWQ0ODcwZDkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.H66NRjnbaEF7xkRxTUA_ci31OjTEjvOb1NbOtG81Heo)

  ![수의 체계 이미지](https://private-user-images.githubusercontent.com/78643629/470170080-233340da-7187-44db-9e87-36448a0c3abd.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTM0MzI0ODMsIm5iZiI6MTc1MzQzMjE4MywicGF0aCI6Ii83ODY0MzYyOS80NzAxNzAwODAtMjMzMzQwZGEtNzE4Ny00NGRiLTllODctMzY0NDhhMGMzYWJkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MjUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzI1VDA4Mjk0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTM1OTA1ZTY4NjRhNGU4MDc3NWRjNmQ0ZGI2YzY2NDkzYTRmNmU2MTA4OWJiZmNlMWJmNDQ2ZGMwNjVmMDk4MzgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.GUiUBS7mdIzHgM2G0Nn_VsMw6k4adaoUPcSrS4y8pHo)

* 실수 $ a $는 $ a + 0i $로 나타낼 수 있으므로 실수 전체의 집합은 복소수 전체의 집합에 포함된다. $ a = a + 0i $   
  $ 5 = 5 + 0i $ 👉 실수부분: 5, 허수부분 0  
  
## 복소수가 서로 같을 조건
> $ a, b, c, d $가 실수일 때,
>
> 1. $ a + bi = c + di $ $ ↔ $ $ a = c $ , $ b = d $  
> 👉 어떤 복소수 $ a + bi $와 $ c + di $가 서로 같은 식이려면, 실수 부분인 $a$와 $c$가 같고, 허수 부분인 $b$와 $d$가 같아야 한다.
>
> 2. $ a + bi = 0 ↔ a = 0, b = 0 $  
>   👉 어떤 복소수 $ a + bi $가 0이 되려면, 실수 부분인 $a$가 0, 허수 부분인 $b$가 0이어야 한다.

1번 조건 예시) 

* $ 3 = 5i \ne 2 + 5i $ 👉 실수부분이 달라서 두 식은 다름 ($ a \ne c $)

* $ 3 + 5i \ne 3 + 7i $ 👉 허수부분이 달라서 두 식은 다름 ($ b \ne d $)

* $ 3 + 5i = 3 + 5i $ 👉 실수부분, 허수부분이 모두 같아 두 식은 같다. ($ a = c $, $ b = d $)

2번 조건 예시)

* $ 3 + 0i = 3 $ 👉 실수부분이 0이 아니어서 식은 0이 아님 ($ a \ne 0 $)
  
*  $ 0 + 5i = 5i $ 👉 허수부분이 0이 아니어서 식은 0이 아님 ($ b \ne 0 $)

* $ 0 + 0i = 0 $ 👉 실수부분, 허수부분이 모두 0이어서 식은 0이다. ($ a = 0 $, $ b = 0 $)
  
## 켤레복소수

> 복소수 $a + bi$ ($a, b$는 실수)에 대하여 허수부분의 부호를 바꾸어 놓은 복소수 $a - bi$를 켤레복소수라고 하고, 기호로는 $\overline{a + bi}$로 나타낸다. 
> 
> 즉, $\overline{a + bi} = a - bi$, (또는 $\overline{a + bi} = a + bi$)

복소수 허수부분의 부호를 바꾼걸 복소수 + 윗줄로 표현한다는 것이다.

예시)

* $\overline{2 + \sqrt{7}i} = 2 - \sqrt{7}i$

* $\overline{-3 - 5i} = -3 + 5i$

## 복소수의 사칙연산

### 복소수의 덧셈

실수부분은 실수부분끼리, 허수부분은 허수부분끼리 계산한다.

예시)  

$ 
\begin{align*}
  (3 - 5i) + (7 + 8i)
  &= 3 - 5i + 7 + 8i \\
  &= (3 + 7) + (8 - 5)i \\
  &= 10 + 3i \\
\end{align*} 
$

### 복소수의 뺄셈

방식은 덧셈과 같다.

예시)

$ 
\begin{align*}
  (5 - 3i) + (7 + 8i)
  &= 5 + 3i - 3 + 7i \\
  &= (5 - 3) + (3 + 7)i \\
  &= 2 + 10i \\
\end{align*} 
$

### 복소수의 곱셈

계산과정에서 $i^2 = -1$을 이용해서 계산한다.

예시)

$ 
\begin{align*}
  (2 - 3i)(4 + 5i)
  &= 8 + 10i - 12i - 15i^2 \\
  &= 8 + 10i - 12i - 15(-1) \\
  &= 8 + 10i - 12i + 15 \\
  &= 23 - 2i \\
\end{align*} 
$

### 복소수의 나눗셈

분모의 켤레복소수를 분모, 분자에 곱해서 계한한다.

예시)

$ 
\begin{align*}
  \frac{1-7i}{3+2i}
  &= \frac{(1-7i)(3-2i)}{(3+2i)(3-2i)} \\
  &= \frac{3 - 2i - 21i + 14i^2}{3^2 - (2i)^2} \\
  &= \frac{3-2i-21i+14i^2}{9-4i^2} \\
  &= \frac{3-2i-21i-14}{9+4} \\
  &= \frac{-11-23i}{13} \\
  &= -\frac{11}{13} - \frac{23}{13}i \\
\end{align*} 
$

## 켤레복소수의 성질

> 1️⃣ 복소수와 그 켤레복소수의 합과 곱은 항상 실수이다.

예시와 함께 설명하겠다.
예시: 복소수와 그 켤레복소수의 합)
* $(3 + 5i) + (3 - 5i) = 3 + 3 + 5i - 5i = 6$  

  👉 허수부분이 서로 부호만 다르기 때문에 합이 무조건 0이된다. 따라서 결과는 무조건 실수가 된다.
  
예시: 복소수와 그 켤레복소수의 곱)
* $(2 + 3i) + (2 - 3i) = 2^2 - (3i)^2 = 2^2 - 9i^2 = 4 + 9 = 13$  
  
  👉 식을 보면 합, 차 인수분해 공식이다. $(a + b)(a - b) = a^2 - b^2$, 허수부분을 제곱되면 실수로 변하계 되어 결과는 반드시 실수가 된다.

> 2️⃣ 두 복소수 $z_1$, $z_2$에 대하여 다음이 성립한다.
>
> 1. $\overline{z_1 + z_2} = \overline{z_1} + \overline{z_2}$
> 2. $\overline{z_1 - z_2} = \overline{z_1} - \overline{z_2}$
> 3. $\overline{z_1z_2} = \overline{z_1} \cdot \overline{z_2}$ (단 $\overline{z_2} \ne 0$)

> 💡 **참고**
>
> 수학에서 일반적으로 복소수는 문자 $z$로 표기한다. 👉 $z = a + bi$  
> 
> ex 1) $z_1 = a_1 + b_1i$  
> ex 2) $z_2 = a_2 + b_2i$  

## $i$의 거듭제곱

> i^n (n은 자연수)은 $i$, $-1$, $-i$, $1$이 차례대로 반복해서 나타난다.
>
> 따라서 $i$의 거듭제곱 $i^n$에 대하여 아래와 같은 규칙이 적용된다.
>
> $i^{4k} = 1$, $i^{4k+1} = i$, $i^{4k+2}=-1$, $i^{4k+3}= -1$ (단, $k$는 자연수)

예시)
* $i^93 = i^{4 \times 23 + 1} = (i^4)^23 \cdot i^1 = 1 \cdot i^1 = i$ 
* $i^342 = i^{4 \times 85 + 2} = (i^4)^85 \cdot i^2 = 1 \cdot i^2 = -1$*
* $i^703 = i^{4 \times 175 + 3} = (i^4)^175 \cdot i^3 = 1 \cdot i^3 = -i$
* $i^100 = i^{4 \times 25 + 0} = (i^4)^25 \cdot i^0 = 1 \cdot i^0 = 1$

4단계에 걸쳐 $i$, $1$, $-i$, $-1$이 순환하는데 수가 아무리 커져도 간단하게 하는 방법이 있다. **지수를 4로 나눈 나머지와 같다.**


## 복소수의 연산법칙

> 복소수의 덧셈과 곱셈에 대해 다음이 성립한다.
> * 교환법칙  
> $z_1 + z_2 = z_2 + z_1$  
> $z_1z_2 = z_2z_1$
>
> * 결합법칙  
> $(z_1 + z_2) + z_3 = z_1 + (z_2 + z_3)$  
> $(z_1z_2)z_3 = z_1(z_2z_3)$
>
> * 분배법칙  
> $z_1(z_2 + z_3) = z_1z_2 + z_1z_3$  
> $(z_1 + z_2)z_3 = z_1z_3 + z_2z_3$


## 복소수의 항등원과 역원

> 임의의 복소수 $z$에 대하여 다음이 성립한다.
>
> * 덧셈에 대한 항등원은 $0$이다.  
> $z + 0 = 0 + z = z$
>
> * 곱셈에 대한 항등원은 $1$이다.  
> $z \cdot 1 = 1 \cdot z = z$
>
> * 덧셈에 대한 $z$의 역원은 $-z$이다.  
> $z + (-z) = (-z) + z = 0$
>
> * 곱셈에 대한 $z(\ne 0)$의 역원은 $\frac{1}{z}$이다.  
> $z \cdot \frac{1}{z} = \frac{1}{z} \cdot z = 1$
