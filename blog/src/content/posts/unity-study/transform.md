---
title: "transform"
tags: ["Unity", "C#"]
upload: "2025-06-28"
--- 

## Position

```csharp
// deltaTime: 지난 시간 프레임 이후 경과된 시간(설명 직역), 간단히 설명해 시간.
        // TransformDirection() : Local -> World  <-> InverseTransformDirection() : World -> Local
	      // TransformDirection() 대신 Translate()을 쓰는게 간편함
				//방향 * 시간 * 속력
        // 이동 코드 예시
        // transform.position += new Vector3(0f, 0f, 1f) * Time.deltaTime * _speed;
        // transform.position += transform.TransformDirection(Vector3 * Time.deltaTime * _speed);
        // transform.Translate(Vector3.forward * Time.deltaTime * _speed);

        if (Input.GetKey(KeyCode.W))
            transform.Translate(Vector3.forward * Time.deltaTime * _speed); 
        if (Input.GetKey(KeyCode.S))
            transform.Translate(Vector3.back * Time.deltaTime * _speed);
        if (Input.GetKey(KeyCode.A))
            transform.Translate(Vector3.left * Time.deltaTime * _speed);
        if (Input.GetKey(KeyCode.D))
            transform.Translate(Vector3.right * Time.deltaTime * _speed);
```

## Rotation

절대 회전: **transform.eulerAngles = Vector3 a;**

회전: **transform.Rotate(Vector3 a);**

**transform.rotation = Quaternion a;** 게임엔진에서 rotation은 짐벌락 문제로 쿼터니언을 사용한다.

### Quaternion

게임엔진에서 rotation을 x , y, z로만 구현하면 짐벌락 문제가 생긴다. 그래서 4개의 원소를 쓰는 Quaternion을 사용한다.

**Quaternion.LookRotation(Vector3 a)**: 인자값의 방향으로 물체가 회전된다.

**Quaternion.Lerp(Vector3 a, Vector3 b, float t)**: 두 지점 사이의 선형보간, a를 0, b를 1로 생각해 t에 비례한 a와 b사이의 위치를 Vector3로 반환. (t는 0~1사이의 값)

선형보간 (Linear interpolate): 두 지점을 선형으로 연결해 두 지점사이의 위치를 파악하는 방법

**Quaternion.Slerp(Vector3 a, Vector3 b, float t)**: 두 지점 사이의 구면 선형보간, a를 0, b를 1로 생각해 t에 비례한 a와 b사이의 위치를 Vector3로 반환 (t는 0~1사이의 값)

구면 선형 보간(Spherically interpolate): 곡선으로 두 지점 사이의 위치를 파악한다. 선형보간보다 복잡하다.

```csharp
public class PlayerController : MonoBehaviour
{   
    [SerializeField]
    float _speed = 10.0f;

    void Start()
    {
   
    }

    float _yAngle = 0.0f;
    void Update()
    {
        // _yAngle += Time.deltaTime * 100.0f;
        // 절대 회전값
        // transform.eulerAngles = new Vector3(0.0f, _yAngle, 0.0f);
        // +- delta
        // transform.Rotate(new Vector3(0.0f, Time.deltaTime * 100.0f, 0.0f));

        // transform.rotation = Quaternion.Euler(new Vector3(0.0f, _yAngle, 0.0f));
        // vector3로 각도를 변경하면 짐벌락(두 축이 겹쳐서 회전이 안됨)이 발생해 문제가됨
        // 그래서 게임엔진은 쿼터니언을 사용한다.

        // transform.rotation
        if (Input.GetKey(KeyCode.W))
        {
            // transform.rotation = Quaternion.LookRotation(Vector3.forward);
            transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(Vector3.forward), 0.2f);
            transform.position += Vector3.forward * Time.deltaTime * _speed;
            //transform.Translate(Vector3.forward * Time.deltaTime * _speed);
        }

        if (Input.GetKey(KeyCode.S))
        {
            //transform.rotation = Quaternion.LookRotation(Vector3.back);
            transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(Vector3.back), 0.2f);
            transform.position += Vector3.back * Time.deltaTime * _speed;
            //transform.Translate(Vector3.forward * Time.deltaTime * _speed);
        }

        if (Input.GetKey(KeyCode.A))
        {
            //transform.rotation = Quaternion.LookRotation(Vector3.left);
            transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(Vector3.left), 0.2f);
            transform.position += Vector3.left * Time.deltaTime * _speed;
            //transform.Translate(Vector3.forward * Time.deltaTime * _speed);
        }
            
        if (Input.GetKey(KeyCode.D))
        {
            //transform.rotation = Quaternion.LookRotation(Vector3.right);
            transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(Vector3.right), 0.2f);
            transform.position += Vector3.right * Time.deltaTime * _speed;
            //transform.Translate(Vector3.forward * Time.deltaTime * _speed);
        }
        
    }
}
```