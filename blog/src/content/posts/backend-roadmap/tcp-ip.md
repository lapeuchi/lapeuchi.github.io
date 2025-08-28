---
title: "TCP/IP가 뭘까요"
tags: ["cs", "backend", "network"]
upload: "2025-08-28"
---

## 개요

프로토콜 관련해서 TCP/IP라는걸 정말 많이 들어봤을 것이다.
TCP와 IP를 합쳐서 TCP/IP라고 많이 하는데 TCP, IP 두 프로토콜에 대해 알아보고 왜 둘을 붙여서 부르는지도 알아보자.

## IP(Internet Protocol)

IP는 패킷을 최대한 빠르게, 정확한 목적지로 보내는 프로토콜이다.
패킷 전달 여부를 보증하지 않고, 패킷을 보낸 순서와 받는 순서가 다를 수 있다.

## TCP (Transmission Control Protocol)

TCP는 패킷이 손실되지 않고, 순서대로 잘 도착하도록 확인하는 프로토콜이다.

손실없이 차례대로 보내기 때문에 전송속도는 느리다.

패킷이 손실되거나 손상되면 출발지에 재전송해달라는 요청을 한다.

## TCP/IP
![이미지](https://westahn.com/wp-content/uploads/2024/02/OSI7OSI4.png)

TCP와 IP는 대부분의 인터넷 기반 응용 프로그램 및 서비스에서 사용되는 기본 통신 프로토콜이다.

TCP와 IP를 하나로 묶어서 얘기하는 이유는 위에서 이야기 했듯 기본적으로 둘의 조합을 많이 사용하기 때문이다.

패킷을 보낼 때 IP를 사용하여 최대한 빨리 패킷을 전송하고 TCP를 활용해서 패킷을 안전하게 수신받는다.

> TCP/IP 처럼 복수의 프로토콜 집합을 프로토콜 스택(Protocol Stack) 혹은 프로토콜 스위트(Protocol Suite)라고 한다.
