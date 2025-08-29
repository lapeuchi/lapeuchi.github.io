---
title: "04. 도메인 이름과 DNS"
tags: ["cs", "backend", "network"]
upload: "2025-08-27"
---

## 개요
DNS, Domain Name System 이다.
Domain Name System을 알려면 우선 Domain Name부터 알아보도록 하자.

## 도메인 이름
'도메인 이름'은 사람이 읽고 기억하기 쉬운 웹사이트 주소이다. 보통 점(.)으로 구분된 두 개 이상의 부분으로 구성된다. 

예를 들어 [google.com](https://www.google.com), [naver.com](https://www.naver.com) 등이 있겠다.

## DNS
DNS는 인터넷에서 아주 중요한 역할을 하는 시스템으로, 도메인 이름을 IP 주소로 바꿔주는 일을 한다. 

브라우저에 도메인 이름을 입력하면, 컴퓨터가 DNS 서버에 도메인 이름의 IP 주소를 요청한다. 그러면 DNS 서버가 해당 IP 주소를 알려주고, 컴퓨터는 받은 IP 주소를 이용해 웹사이트에 접속한다.
