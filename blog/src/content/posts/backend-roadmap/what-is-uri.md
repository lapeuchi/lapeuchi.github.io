---
title: "URI가 뭘까"
tags: ["cs", "backend", "network"]
upload: "2025-09-01"
---

## URI (Uniform Resource Identifier, 통합 자원 식별자)

* 인터넷상의 모든 자원을 식별하는 문자열
* URI의 존재는 인터넷에서 요구되는 기본조건으로서 인터넷 프로토콜에 항상 붙어 다닌다.
* URI의 하위개념으로 URL, URN 이 있다

### URI 특징
* 통합(Uniform)  
자원을 식별하는 통일된 방식

* 자원(Resource)  
여기서 자원은 URI로 식별할 수 있는 모든 것을 의미한다. 이미지, 비디오, 문서 등 인터넷상의 모든 정보를 포함한다.

* 식별자(Identifier)  
다른 리소스들과의 구분을 위한 고유한 이름 또는 주소

### URI 구성요소
예를 들어 다음과 같은 URI가 있다고 하자  
https://example.com/path/to/resource?id=123#section1

* 스킴(Scheme): https - 통신 프로토콜
* 호스트(Host): example.com - 리소스가 있는 서버의 주소
* 경로(Path): /path/to/resource - 서버 내의 특정 리소스의 위치
* 쿼리(Query): id=123 - 리소스에 전달하는 추가 매개변수
* 프래그먼트(Fragment): #section1 - 리소스 내의 특정 부분

## URL (Uniform Resource Locator, 통합 자원 위치)
* 네트워크 상에서 자원의 위치를 알려주기 위한 규약, 웹 사이트 주소뿐만 아니라 컴퓨너 네트워크상의 모든 자원을 나타낸다.
* 컴퓨너 네트워크와 검색 메커니즘에서의 위치를 지정하는, 웹 리소스에 대한 참조이다.
* 해당 주소에 접속하려면 URL에 맞는 프로토콜(http, sftp, smp, 등)과 동일한 프로토콜로 접속해야 한다.

### URL의 구성요소
예를 들어 다음과 같은 URL이 있다고 하자  
https://www.example.com:443/path/to/file?key=value#section 

* 프로토콜: https
* 호스트(도메인): www.example.com
* 포트번호: 443
* 패스(경로): /path/to/file
* 쿼리 파라미터: ?key=value
* 프래그먼트(부분 식별자): #section

## URN (Uniform Resource Name, 통합 자원 이름)
잘 사용되지 않는 개념이다. 대부분 URL만 쓴다. 이런개 있구나만 알아두면 좋을 것 같다.

* 위치에 얽매이지 않고 영속적으로 자원을 식별하는 데 사용되는 URI의 한 종류

### URN의 특징
* 영속성: 자원의 위치가 바뀌거나 더 이상 존재하지 않더라도 자원을 고유하게 식별할 수 있다.
* 위치 독립성: 자원의 '어디에' 있는지가 아니라 '무엇인지'를 나타낸다.
* URI의 일종: "urn:scheme"을 사용한다. 

ISBN 기반 URN: 도서의 ISBN을 이용한 예시  
urn:isbn:1234567891234 

UUID 기반 URN: UUID를 이용한 고유 식별자 예시  
urn:uuid:6e8bc430-9c3a-11d9-9669-0800200c9a66 

## URI, URL, URI 비교

URI (Uniform Resource Identifier):
자원을 식별하는 더 큰 개념이며, URL과 URN을 모두 포함합니다. 

URL (Uniform Resource Locator):
인터넷 상의 자원이 '어디에' 있는지 위치를 지정하여 식별합니다. 

URN (Uniform Resource Name):
자원의 위치에 상관없이 '이름'을 부여하여 영속적으로 식별합니다. 
즉, 모든 URL은 URI이지만, 모든 URI가 URL은 아닙니다. 
