---
title: "DOM?"
tags: ["cs", "backend", "network"]
upload: "2025-09-01"
---

## 웹 페이지가 빌드되는 과정
DOM을 알기 전 브라우저와 렌더링 엔진이 웹 페이지를 빌드하는 과정을 알아야 한다.

웹 브라우저가 HTML을 렌더링 하는 과정을 'critical rendering path'라고 한다.

이를 크게 두 과정으로 나눌 수 있다.
1. 크게 브라우저가 HTML/CSS를 파싱해서 화면에 어떤 것이 보여야 하는지 결정하는 과정
2. 브라우저가 화면에 렌더링을 하는 과정

1번 과정을 거치면 렌더트리가 만들어진다. 렌더트리는 화면에 보여지게 되는 HTML element와 그에 대응하는 스타일을 표현한 것이다. 

렌더트리가 만들어지기 위해서는 CSSOM(element와 연관된 스타일이 표현된 Object Model)과 DOM(element를 표현하는 Object model)이 필요하다.

## DOM (Document Object Model)
웹페이지에 대한 인터페이스, 우리는 DOM을 통해 웹페이지의 컨텐츠, 구조, 스타일을 읽고 조작할 수 있다.

DOM은 HTML 문서를 객체 기반으로 표현한 것이다.  
객체 기반이기 때문에 다양한 프로그램에서 쉽게 사용할 수 있다.

DOM의 객체 구조는 '노드 트리'라고도 불린다. 루트의 `<html>` element로 부터 중첩된 여러 element가 뻗어나오게 되며, 말단 노드에는 각 element의 content가 있는 형태이다.

HTML을 DOM으로 표현해주는 사이트 - https://software.hixie.ch/utilities/js/live-dom-viewer/

## DOM과 HTML의 차이
위 링크(Live DOM Viewer)에서 html을 작성하고 DOM의 구조를 살펴보면 DOM이 HTML 문서와 1대1 매핑되는 것 처럼 보인다.  
DOM은 HTML 문서로 부터 생성되간 하지만, 항상 정확하게 같지는 않다.

1. HTML이 유효하지 않을경우
DOM은 오로지 유효한 HTML 문서에 대한 인터페이스이다. DOM을 생성하는 과정에서, 브라우저는 HTML에서 구조적인 문제가 있는 것들을 고칠 수 있다.

예를 들어 HTML에 `<head>`와 `<body>`태그가 빠진 유효하지 않은 HTML의 경우 DOM이 알아서 head와 body를 추가해 유효한 HTML로 고친다.

2. DOM이 JS에 의해 수정된 경우
DOM은 정적인 것이 아니고, 동적으로 변경될 수 있다. JS가 DOM을 변경한다고 하여서 HTML이 변경되는 것은 아니다.

## DOM이 브라우저에서 보여지는게 아니다.
브라우저에서 보이는건 렌더트리이다. 렌더트리는 DOM과 CSSOM를 합쳐서 구성된다. 렌더트리는 화면에 렌더링할 것 이외엔 관심이 없다. `display: none` 속성이 있는 element는 DOM에는 있지만 렌더트리엔 없다.  
(`visibility: hidden`는 실제 화면에서 그 공간을 차지하기 때문에 렌더트리에 포함된다.)

## DOM Node와 DOM Element

### Node
DOM은 Node의 계층 구조로 이루어져 있다. 각 노드는 부모와 children을 가질 수 있다.

Node Type
```js
Node.ELEMENT_NODE // => 이게 아래서 설명할 Element 타입.
Node.ATTRIBUTE_NODE
Node.TEXT_NODE
Node.CDATA_SECTION_NODE
Node.PROCESSING_INSTRUCTION_NODE
Node.COMMENT_NODE
Node.DOCUMENT_NODE
Node.DOCUMENT_TYPE_NODE
Node.DOCUMENT_FRAGMENT_NODE
Node.NOTATION_NODE
```

### Element
Element는 node의 특정 타입 즉, `Node.ELEMENT_NODE`인 것이다.

element는 HTML에서 태그로 적은 노드들을 지칭한다. 예를 들어, `<html>`, `<div>`, `<title>` 과 같은 태그로 나타낸 것들은 전부 element인 것이다. 주석이나 text node와 같은 것들은 HTML 태그로 표현된 것이 아니므로 element가 아니다.

JS DOM에서Node는 node의 constructor이고, HTMLElement는 element의 constructor이다.

paragraph는 node이자 동시에 element이다.

```js
const paragraph = document.querySelector('p');

paragraph instanceof Node;        // => true
paragraph instanceof HTMLElement; // => true
```

## JavaScript DOM API
HTML은 텍스트 문서이고, DOM은 브라우저가 이를 해석해 만든 동적 객체 모델이다.
따라서 JS로 수정할 때는 HTML이 아니라 DOM을 수정하는 것이다.

선택
* `document.getElementById("id")`
* `document.querySelector(".class")`

조회 / 수정
* `element.innerHTML, element.textContent`
* `element.style.color = "red"`

생성 / 삽입
* `document.createElement("div")`
* `parent.appendChild(child)`

삭제
* `element.remove()`

### DOM 프로퍼티
node에만 있는 DOM 프로퍼티와 element에만 있는 DOM 프로퍼티를 구분할 줄 알아야 한다.

다음 Node의 프로퍼티들은 node나 NodeList라고 한다.
```js
node.parentNode; // Node or null

node.firstChild; // Node or null
node.lastChild;  // Node or null

node.childNodes; // NodeList
```

다음 Node의 프로퍼티들은 element나 element의 집합(HTMLCollection)이다.
```js
node.parentElement; // HTMLElement or null

node.children;      // HTMLCollection, 즉 element만 가져온다. 
```


DOM 조작은 렌더링에 영향을 주어 Reflow/Repaint가 발생한다.
많은 DOM 변경을 한 번에 하면 성능 저하가 일어날 수 있다.

이를 막기위한 방법으로 다음과 같은 방법이 있다.
1. 변경을 모아서 처리 (DocumentFragment 사용)
2. requestAnimationFrame 활용
3. Virtual DOM 활용 (React, Vue 등)