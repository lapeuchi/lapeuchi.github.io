---
title: "싱글톤 패턴"
tags: ["Unity", "C#"]
upload: "2025-06-28"
--- 

```csharp
public class Managers : MonoBehaviour
{
		
		static Managers s_instance; // 유일성 보장
		//유일한 매니저를 가져온다.
		public static Managers Instance 
		{ 
				get 
				{
						Init();
						return s_instance; 
				}
		}

		void Start()
		{
				Init();
		}
		
		void Update()
		{
				
		}

		static void Init()
		{
				GameObject go = GameObject.Find("Manager");
				if(go == null)
				{
						go = new GameObject { name = "Manager" };
						go.AddComponent<Manager>(); 
				}

				DontDestroyOnLoad(go); //씬을 바꿔도 사라지지 않음.
				s_instance = go.GetComponent<Manager>();
		}
}
```

다른코드

```csharp
using UnityEngine

class GameManager : public MonoBehaviour
{
		public GameManger instance = null;
		
		void Awake()
		{
				if(instance == null)
					instance = this;
				else if(instance != null)
					Destroy(this.gameObject);
					
					//추가됨 
					DontDestroyOnLoad(this.gameObject); //씬을 바꿔도 사라지지 않음.
		}

		void Start()
		{

		}

		void Update()
		{

		}
	
	}
```

‣