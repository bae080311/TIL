# HTTP 헤더 개요

## 분류

![header](/HTTP%20웹%20기본지식/HTTP%20Header/HTTPheader.png)

- General 헤더: 메시지 전체에 적용되는 정보 예)Connection: close
- Request 헤더 요청 정보
- Response 헤더: 응답 정보
- Entity 헤더: 엔티티 바디 정보

## 표현

- Content-Type: 표현 데이터의 형식
- Content-Encoding: 표현 데이터의 압축 방식
- Content-Language: 표현 데이터의 자연 언어
- Content-Length: 표현 데이터의 길이

- 표현 헤더는 전송, 응답 둘 다 사용

### Content-Type

- 미디어 타입, 문자 인코딩
- 예)
  - text/html; charset=utf-8
  - application/json
  - image/png

### Content-Encoding

- 표현 데이터를 압축하기 위해 사용
- 데이터를 전달하는 곳에서 압축 후 인코딩 헤더 추가
- 데이터를 읽는 쪽에서 인코딩 헤더의 정보로 압축 해제
- 예)
  - gzip
  - delflate
  - identity

### Content-Language

- 표현 데이터의 자연 언어를 표현
- 예)
  - ko
  - en
  - en-US

### Content-Length

- 바이트 단위
- Transfer-Encoding(전송코딩)을 사용하면 Content-Length를 사용하면 안됨

## 협상(콘텐츠 네고시에이션)

- 클라이언트가 선호하는 표현 요청
- Accept: 클라이언트가 선호하는 미디어 타입 전달
- Accept-Charset: 클라이언트가 선호하는 문자 인코딩
- Accept-Encoding: 클라이언트가 선호하는 압축 인코딩
- Accept-Language: 클라이언트가 선호하는 자연 언어

- 협상 헤더는 요청시에만 사용
  ![Accept-Language](/HTTP%20웹%20기본지식/HTTP%20Header/acceptLanguage.png)
  ![복잡한 예시](/HTTP%20웹%20기본지식/HTTP%20Header/comflex.png)

### 협상과 우선순위1

- Quality Values(q) 값 사용
- 0~1, **클수록 높은 우선순위**
- 생략하면 1
- Accept-Language: ko-KR, ko;q=0.9,en-US;q=0.8,en;q=0.7
  1. ko-KR;q=1 (q생략)
  2. ko;q=0.9
  3. en-US;q=0.8
  4. en;q=0.7

### 협상과 우선순위2

- 구체적인 것이 우선한다
- Accept: text/_, text/plain, text/plain;format=flowed, _/\*
  1. text/plain;format=flowed
  2. text/plain
  3. text/\*
  4. _/_
