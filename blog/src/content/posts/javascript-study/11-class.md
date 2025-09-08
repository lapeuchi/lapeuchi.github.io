---
title: "class"
tags: ["js"]
upload: "2025-09-08"
---

## 클래스 선언
> private 프로퍼티를 사용하려면 프로퍼티 앞에 '#'를 붙이면 된다.
> get을 제외한 모든 행동에서 private 프로퍼티를 참조할 수 없다.

```js
class IdolModel{
    name; // 프로퍼티
    year;
    #phone; // private 프로퍼티

    constructor(name, year){ // 생성자
        this.name = name;
        this.year = year;
    }
}
```

## get과 set

* getter의 용도
1) 데이터를 가공해서 새로운 데이터를 반환할때
2) private한 값을 반환할 때

* setter 작성 방법
* 무조건 파라메터가 '하나' 있어야한다.

```js
class IdolModel{
    name;
    year;
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    get nameAndYear(){ // getter
        return `${this.name}-${this.year}`;
    }
    
    set getName() {
        return name;
    }
    set setName(name){ // setter
        this.name = name;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin); // 출력: IdolModel { name: '안유진', year: 2003 }
console.log(yuJin.nameAndYear); // 출력: 안유진-2003

yuJin.setName = '장원영';
console.log(yuJin); // 출력: // IdolModel { name: '장원영', year: 2003 }
```

## static

```js
class IdolModel {
    name;
    year;
    static groupName = '아이브';

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static returnGroupName(){
        return '아이브';
    }
}

const yuJin = new IdolModel('안유진', 2003);

// static 프로퍼티는 객체에 귀속되지 않는다. 클래스에 귀속되는 것이다. 아래 코드를 실행해보면 groupName이 출력되지 않고 있다.
console.log(yuJin); // 출력: IdolModel { name: '안유진', year: 2003 }

console.log(IdolModel.groupName); // 출력: 아이브
console.log(IdolModel.returnGroupName()); // 출력: 아이브
```

### static 키워드의  활용: factory constructor

static 메소드로 객체를 만들어 반환하는 방식이 많이 쓰인다고 한다.

```js
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    static fromObject(object){
        return new IdolModel(
            object.name,
            object.year,
        );
    }

    static fromList(list){
        return new IdolModel(
            list[0],
            list[1],
        );
    }
}

const yuJin2 = IdolModel.fromObject({
    name: '안유진',
    year: 2003,
});
console.log(yuJin2); // 출력: IdolModel { name: '안유진', year: 2003 }

const wonYoung = IdolModel.fromList(
    [
        '장원영',
        2003,
    ]
);
console.log(wonYoung); // 출력: IdolModel { name: '장원영', year: 2003 }
```

## 상속
상속 키워드는 'extends'를 사용한다.
```js
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel {
    dance(){
        return '여자 아이돌이 춤을 춥니다.';
    }
}

class MaleIdolModel extends IdolModel{
    sing(){
        return '남자 아이돌이 노래를 부릅니다.';
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin); // FemaleIdolModel { name: '안유진', year: 2003 }

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin); // MaleIdolModel { name: '지민', year: 1995 }

console.log(yuJin.dance()); // 여자 아이돌이 춤을 춥니다.
console.log(yuJin.name); // 안유진

console.log(jiMin.sing()); // 남자 아이돌이 노래를 부릅니다.
console.log(jiMin.year); // 1995

const cf = new IdolModel('lapeuchi', 1992);
console.log(cf);  // IdolModel { name: 'lapeuchi', year: 1992 }

console.log(cf.name); // lapeuchi

console.log(yuJin instanceof IdolModel); // true
console.log(yuJin instanceof FemaleIdolModel); // true
console.log(yuJin instanceof MaleIdolModel); // false

console.log('----------');
console.log(jiMin instanceof IdolModel); // true
console.log(jiMin instanceof FemaleIdolModel); // false
console.log(jiMin instanceof MaleIdolModel); // true

console.log('-------------');
console.log(cf instanceof IdolModel); // true
console.log(cf instanceof FemaleIdolModel); // false
console.log(cf instanceof MaleIdolModel); // false
```

### super와 override
* super는 부모 클래스를 의미한다. 부모클래스의 메소드나 프로퍼티를 참조할 때 쓸 수 있겠다.

* 메소드를 override를 할 때 키워드는 따로 없다. 그냥 같은 이름으로 메소드를 작성하면 된다.

```js
class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayHello(){
        return `안녕하세요 ${this.name}입니다.`;
    }
}

class FemaleIdolModel extends IdolModel{
    // 노래 / 춤 
    part;

    constructor(name, year, part){
        super(name, year);
        this.part = part;
    }

    sayHello(){
        return `${super.sayHello()} ${this.part}를 맡고있습니다.`;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin); // FemaleIdolModel { name: '안유진', year: 2003, part: '보컬' }

const wonYoung = new IdolModel('장원영', 2002);
console.log(wonYoung); // IdolModel { name: '장원영', year: 2002 }
console.log(wonYoung.sayHello()); // 안녕하세요 장원영입니다.
console.log(yuJin.sayHello()); // 안녕하세요 안유진입니다. 보컬를 맡고있습니다.
```