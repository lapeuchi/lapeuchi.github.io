---
title: "브라우저와 동작방식"
tags: ["cs", "backend", "network"]
upload: "2025-08-27"
---

## 브라우저란 뭘까

브라우저의 주 기능은 선택한 자원을 서버에 요청하고, 전송받은 자원을 브라우저 화면에 표시하는 것이다.  
여기서 자원이라 하면 html, css, js부터 이미지, pdf 등 여러가지가 있다.  

## 렌더링 엔진 
렌더링 엔진은 요청받은 자원을 브라우저 화면에 표시하는 작업을 한다.

1) HTML 파싱 후 DOM 트리 만들기  
HTML 문서(Source code)를 파싱(Parsing) 하여 각 요소들을 DOM Tree(Contents Tree)의 각 DOM 노드 들로 전환

2) 렌더 트리(Render Tree) 만들기  
CSS/Style 데이터를 파싱하고 그 스타일 데이터들로 렌더 트리(Render Tree)를 생성  
DOM 트리가 웹 상에 나타날 내용(Contents)를 구성한다면 렌더 트리는 시각적 요소, 어떻게 나타날지 그 스타일을 지정한다.

3) 렌더 트리(Render Tree) 레이아웃 만들기  
각 노드들에게 스크린의 어느 공간에 위치해야 할지 각각의 값(Positionm, Size)을 부여한다.

4) 렌더 트리 페인팅 (Renter Tree Painting)  
UI 벡엔드가 동작하여 각 노드들을 정해진 스타일 및 위치값대로 화면에 배치합니다.

참고 - https://inpa.tistory.com/entry/%EB%B0%B1%EC%97%94%EB%93%9C-%EB%A1%9C%EB%93%9C%EB%A7%B5-%F0%9F%8C%90-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%99%80-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC
