---
title: 객체지향과 클래스
tags: ["cpp"]
upload: "2025-07-07"
---

설계도 안에 변수와 함수가 함께 들어갈 수 있다.

```cpp
class Knight
{
public:
    // 맴버 함수 선언
    void Move(int y, int x);
    void Attack();
    
    // 맴버함수를 한 번에 정의 할 수 있다.
    void Die()
    {
        hp = 0;
        cout << "Die" << endl;
    }

public:
    // 맴버 변수
    int hp;
    int attack;
    int posY;
    int posX;
}

// 맴버 함수를 따로 정의할 수 있다.
// 맴버 함수에서 맴버 변수를 사용할 수 있다.
void Knight::Move(int y, int x)
{
    posY = y;
    posX = x;
    cout << "Move 정의";
}

void Knight:: Attack()
{
    cout << "Attack 정의";
}
```


```cpp
class Knight { /* 생략 */ }

int main()
{
    // Instantiate: 객체를 만드는 것.
    Knight k1;
    k1.hp = 100;
    k1.attack = 10;
    k1.posY = 0;
    k1.posX = 0;

    Knight k2;
    k2.hp = 2000;
    k2.attack = 110;
    k2.posY = 20;
    k2.posX = 10;

    k1.Move(10, 10);
    k1.Attack();
    k1.Die();
}
```
