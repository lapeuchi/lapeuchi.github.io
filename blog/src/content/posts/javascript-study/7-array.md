---
title: "배열"
tags: ["js"]
upload: "2025-09-04"
---

## 기본 데이터 조작 (mutable 함수)

아래의 함수로 배열의 데이터를 조작한다.

``` js
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

// push(): 배열 끝에 데이터를 추가하고, 추가했을 때 배열의 길이를 반환한다.
console.log('push()', iveMembers.push('lapeuchi')); // 출력: 7
console.log(iveMembers); //출력: [ '안유진', '가을', '레이', '장원영', '리즈', '이서', 'lapeuchi' ]

// pop(): 배열 끝 데이터를 제거하고, 제거한 데이터를 반환한다.
console.log('pop()', iveMembers.pop()); // 출력: lapeuchi 
console.log(iveMembers); // 출력: [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

// shift(): 배열의 앞 데이터를 제거하고, 제거한 데이터를 반환한다.
console.log('shift()', iveMembers.shift()); // 출력: 안유진
console.log(iveMembers); // 출력: [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

// unshift(): 배열 앞에 데이터를 추가하고, 추가했을 때 배열의 길이를 반환한다.
console.log('unshift()'iveMembers.unshift('안유진')); // 출력: 6
console.log(iveMembers); // 출력: [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

// splice(s, n): s 인덱스 부터 n개의 데이터를 제거하고, 제거한 데이터의 배열을 출력한다.
console.log(iveMembers.splice(0, 3)) // 출력: [ '안유진', '가을', '레이' ]
console.log(iveMembers); // 출력: [ '장원영', '리즈', '이서' ]
```

### 정렬함수

```js
// sort()
// 오름차순
iveMembers.sort();
console.log(iveMembers); // 출력: [ '가을', '레이', '리즈', '안유진', '이서', '장원영' ]
console.log(iveMembers.reverse()); // 출력: [ '장원영', '이서', '안유진', '리즈', '레이', '가을' ]

let numbers = [ 1, 9, 7, 5, 3, ];

// a, b를 비교했을때
// 1) a를 b 보다 나중에 정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
// 2) a를 b 보다 먼저 정렬하려면 (앞에두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers); // 출력: [ 1, 3, 5, 7, 9 ]

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers); // 출력: [ 9, 7, 5, 3, 1 ]
```

## 기본데이터 조작 (immutable 함수)
배열의 데이터를 조작하지 않고, 배열을 **복사**해서 복사한 배열의 데이터를 조작한다.

```js
// concat(data): data를 추가한 배열을 반환한다.
console.log(iveMembers.concat('lapeuchi')); // 출력: [ '안유진', '가을', '레이', '장원영', '리즈', '이서', 'lapeuchi' ]
console.log(iveMembers); // 배열의 원본은 수정되지 않는다. 출력: [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

// slice(n, m): n index부터 m-1 index까지의 데이터의 배열을 반환한다.
console.log(iveMembers.slice(0, 3)); // 출력: [ '안유진', '가을', '레이' ]
console.log(iveMembers); // 출력: [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]

// join(): 모든 요소 사이에 인자값을 추가한 문자열을 반환한다.
console.log(iveMembers.join()); // 출력: 안유진,가을,레이,장원영,리즈,이서
console.log(iveMembers.join('/')); // 출력: 안유진/가을/레이/장원영/리즈/이서
console.log(iveMembers.join(', ')); // 출력: 안유진, 가을, 레이, 장원영, 리즈, 이서
```

### 배열 순환 함수 

``` js

// map(callback): 복사한 배열을 순회하며 콜백에서 반환한 값으로 요소를 바꾸어 반환한다.
console.log('--------------');
console.log(iveMembers.map((x) => x)); // 출력: [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
console.log(iveMembers.map((x) => `아이브: ${x}`)); // 출력: [ '아이브: 안유진', '아이브: 가을', '아이브: 레이', '아이브: 장원영', '아이브: 리즈', '아이브: 이서' ]

// filter(callback): 콜백에서 true로 반환된 요소의 배열을 반환한다.
let numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x) => x % 2 === 0));

// find(): filter()와 비슷한데 처음으로 필터링된 요소만 반환한다.
console.log(numbers.find((x) => x % 2 === 0));

// findIndex(): find()랑 같다. find()는 요소를 반환하지만 findIndex()는 인덱스로 반환한다.
console.log(numbers.findIndex((x) => x % 2 === 0));


// reduce(callback(p, n), s): p는 이전 함수 값 n은 현재 배열 요소이다. s는 p의 초기값이다.
// 아래는 배열 속 문자열들의 길이의 총합을 반환하는 함수이다.
console.log(iveMembers.reduce((p, n) => p + n.length, 0)); // 출력: 14 
```

## 스프레드 연산자 (spread operator)

배열을 선언할 때 '...' (스프레드 연산자)를 사용해 배열의 데이터를 통째로 추가할 수 있다.

사용 방법은 ... 뒤에 배열이름을 적으면 된다.

```js
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2); // 출력: [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
```

스프레드 연산자를 쓰지 않고 배열안에 그냥 넣으면 배열이 통째로 들어간다.

```js
let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3); // 출력: [ [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ] ]
```

## 배열의 복사와 참조

배열을 참조하는 법은 다음과 같다.  
둘은 같은 배열의 주소를 참조하고 있기 때문에 '==='연산을 함녀 true가 반환된다.
```js
let iveMembers4 = iveMembers;
console.log(iveMembers4); //출력: [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
console.log(iveMembers4 === iveMembers); // 출력: true
```

배열을 복사하는 방법은 다음과 같다. 위의 스프레드 연산자예시 처럼 복사하면 된다.  (얕은 복사이다.)
둘은 서로 다른 배열의 주소를 참조하고 있기 때문에 '===' 연산을 하면 false가 반환된다. 
```js
let iveMembers5 = [...iveMembers];
console.log(iveMembers5) // 출력: [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
console.log(iveMembers5 === iveMembers) // 출력: false
```

배열을 깊은 복사하려면 이렇게 하면된다.
```js
let members2 = [{ name: "안유진" }, { name: "장원영" }];

// JSON 방식 (단순 객체일 때만 잘 작동)
let deepCopy = JSON.parse(JSON.stringify(members2));

// 객체 내부 수정
deepCopy[0].name = "가을";

console.log(members2[0].name);    // "안유진" <-- 원본은 그대로!
console.log(deepCopy[0].name);    // "가을"
console.log(members2 === deepCopy); // false
```