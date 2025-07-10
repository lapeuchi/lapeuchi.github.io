---
title: 객체지향의 상속성
tags: ["cpp"]
upload: "2025-07-09"
---

## 개요

RPG 게임의 캐릭터를 개발하고 있다고 생각해보자. 우리가 직접 조작하는
전사, 마법사같은 직업이 있을거고, 맵에 깔릴 몬스터 등 어마무시하게 많을 것이다.

```cpp
class Knight
{
public:
    void Move() { }
    void Attack() { }
public:
    int _hp;
    int _atk;
    int _def;
}

class Mage
{
public:
    void Move() { }
    void Attack() { }
public:
    int _hp;
    int _atk;
}

```

모든 캐릭터 클래스가 공통적인 구조를 가지고 있다. 움직일 수 있고 공격할 수 있고, 스탯마저 구조가 같다.  
캐릭터 클래스는 게임을 업데이트 하면 계속 뭔가 수정되고 추가될텐데 클래스마다 공통적인 구조를 작성하고 사용하는건 비효율적일 것이다.

우선 게임의 미래를 생각해서라도 뭐라도 해 보면서 개선해보자.

스텟 정보를 담는 구조체를 만들어서 적용시켜볼까?
```cpp
struct StatInfo
{
    int hp;
    int atk;
}

class Knight
{
public:
    void Move() { }
    void Attack() { }
public:
    StatInfo _statInfo;
}

class Mage
{
public:
    void Move() { }
    void Attack() { }
public:
    StatInfo _statInfo;
}

```
개선은 되었지만 함수들, 즉 기능같은 건 묶어줄 수 없다.

다행히도 최선의 방법이 있다. 바로 이번 포스트의 주제인 **상속**이다.

## 객체지향 프로그래밍에서 상속이란?

### 상속의 의미
"객체지향 프로그래밍에서 상속이란?" 구글 검색에 그대로 치면 AI가 이렇게 요약해준다.
> 부모클래스의 속성(변수) 및 동작(메서드)을 자식클래스가 물려받아 확장하는 개념입니다.

처음부터 개념을 보면 쉽지 않을 수 있다. 위의 예제를 기준으로 설명해 보겠다.  

Knight와 Mage는 우리가 게임에서 조종하는 캐릭터이다. 우리는 Player라고 하겠다.  




그래도 어려운건 그럴 수 있는거다. 아래에 나올 예제의 도움을 받아 이해해보자.

## 클래스를 상속관계로 만드는 법 

상속을 하는 방법은 아래 예제의 주석과 함께 설명하겠다.
```cpp
class Player // Knight와 Mage의 공통적인 부분을 Player 클래스를 만들어 몰아넣는다.
{
public:
    void Move() { cout << "이동!!" << endl }
    void Attack() { cout << "공격!!: " << _atk << endl }

public:
    int _hp;
    int _atk;
}

// Knight, Mage의 공통적인 Player 클래스에서 상속받고 있다.
// 상속 받는 방법은 클래스 이름 뒤에 콜론(:), 접근지정자, 상속받을 클래스를 작성하면 된다.   
class Knight : public Player { }
class Mage : public Player { }

int main()
{
    Knight k;
    k._atk = 10;
    k.Attack(); // [출력]: 공격!!: 10

    return 0;
}
```
Knight와 Mage에서 공통적으로 사용하는 함수와 변수를
새로운 클래스인 Player에 옮겼고 Knight와 Mage가 player의 속성을 상속받았다.  

main 함수에서 Knight 객체를 생성하고 상속받은 _atk를 조정하고 Attack()을 호출하였을 때 Knight에 속성이 정의되어 있는 것 처럼 아무런 에러없이 잘 실행되었다.


 
## 함수 재정의


## 클래스 상속 관계에서 생성자와 소멸자의 작동

## 상속을 사용하면 좋은 점
상속 기능을 사용하면 다음과 같은 효과가 있다.
1. 코드 재사용성을 높인다.
2. 클래스 작성 시 중복 코드를 줄인다.
3. 유지보수에 용이해진다.