---
title: "람다식"
tags: ["C#"]
upload: "2025-07-02"
---

## Lamda

- **일회용 함수**를 만드는데 사용하는 문법

- 람다식 사용 예시 코드 (인벤토리 창)
    
    
    ```csharp
    [SerializeField]
    enum ItemType
    {
    		Weapon,
    		Armor,
    		Amulet,
    		Ring
    }
    
    enum Rarity
    {
    		Normal,
    		Uncommon,
    		Rare
    }
    
    class Item
    {
    		public ItemType itemType;
    		public Rarity rarity;
    }
    
    class Program
    {
    		List<Item> items = new List<Item>();
    
    		static void Main(string[] args)
    		{
    				items.Add(new Item() { itemType = ItemType.Weapon, Rarity = Rarity.Normal});
    				items.Add(new Item() { itemType = ItemType.Ring, Rarity = Rarity.Uncommon});
    				items.Add(new Item() { itemType = ItemType.Armor, Rarity = Rarity.Rare});
    		}
    }
    ```