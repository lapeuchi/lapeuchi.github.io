---
title: "벡터 구조체"
tags: ["Unity", "C#"]
upload: "2025-06-28"
--- 
# Vector

위치 벡터(말 그대로 위치)와 방향 벡터로 나뉜다.

방향 백터는 크기(거리)와 방향으로 두가지 정보를 담고있다. 

```csharp
struct MyVector
{
    public float x;
    public float y;
    public float z;

    public float magnitude { get { return Mathf.Sqrt(x * x + y * y + z * z); } } // 방향 백터 크기(거리)
    public MyVector normalized { get { return new MyVector(x / magnitude, y / magnitude, z / magnitude); } } // 방향 백터 방향

    public MyVector(float x, float y, float z) { this.x = x; this.y = y; this.z = z; }

    public static MyVector operator +(MyVector a, MyVector b)
    {
        return new MyVector(a.x + b.x, a.y + b.y, a.z + b.z);
    }

    public static MyVector operator -(MyVector a, MyVector b)
    {
        return new MyVector(a.x - b.x, a.y - b.y, a.z - b.z);
    }

    public static MyVector operator *(MyVector a, float d)
    {
        return new MyVector(a.x * d, a.y * d, a.z * d);
    }
}

void Start()
{
		MyVector to = new MyVector(10.0f, 0.0f, 0.0f);
    MyVector from = new MyVector(5.0f, 0.0f, 0.0f);
    MyVector dir = to - from; // (5f,0f,0f)인 방향 벡터;

    dir = dir.normalized; // (1.0f, 0.0f, 0.0f)인 방향
    MyVector newPos = from + dir * _speed;

    //방향 벡터?
		    // 공식: (도착점 - 출발점)
        // 거리와 방향을 알 수 있음.
        // 거리(크기): magnitude
        // 실제 방향: normalized , 크기가 1인 백터
}
```