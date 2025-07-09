---
title: "Physics"
tags: ["Unity", "C#"]
upload: "2025-06-28"
--- 

[Raycast](Physics%20a8cd25a3ac0e4479aa4bac45f2b8ada4/Raycast%203b5d0b67888d4840b17a38fbcee23495.md)

```csharp
// IsKinematic은 유니티 물리 영향을 줄건지에 대한 여부이다.

    // 1) 충돌 물체 중 하나는 꼭 RigidBody가 있어야 함 (IsKinematic: Off) 
    // 2) 충돌 물체는 모두 Collider가 필수 (isTrigger: Off)
    private void OnCollisionEnter(Collision collision)
    {
        Debug.Log($"Collision @ {collision.gameObject.name} !");
    }

    // 1) 충돌 물체는 Collider 필수 
    // 1-1) 충돌 물체중 하나는 IsTrigger: On
    // 2) 충돌 물체중 하나는 RigidBody 필수
    private void OnTriggerEnter(Collider other)
    {
        Debug.Log($"Trigger @ {other.gameObject.name} !");
    }
```