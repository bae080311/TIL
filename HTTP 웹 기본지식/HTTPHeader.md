# HTTP 일반헤더

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

## 전송 방식 설명

- 단순 전송
- 압축 전송
- 분할 전송
- 범위 전송

## 일반 정보

- From: 유저 에이전트의 이메일 정보
  - 일반적으로 잘 사용되지 않음
  - 검색 엔진 같은 곳에서, 주로 사용
  - 요청에서 사용
- Referrer: 이전 웹 페이지 주소
  - 현재 요청된 페이지의 이전 웹 페이지 주소
  - A -> B로 이동하는 경우 B를 요청할 때 Referer: A를 포함해서 요청
  - Referer를 사용해서 유입 경로 분석 가능
  - 요청에서 사용
  - 참고 referer는 단어 referrer의 오타
- User-Agent: 유저 에이전트 애플리케이션 정보
  - 클라이언트의 애플리케이션 정보(웹 브라우저 정보 등등)
  - 통계 정보
  - 어떤 종류의 브라우저에서 장애가 발생하는지 파악 가능
  - 요청에서 사용
- Server: 요청을 처리하는 오리진 서버의 소프트웨어 정보
  - 응답에서 사용
  - server: nginx
  - Server: Apache/2.2.22 (Debian)
- Data: 메시지가 생성된 날짜
  - 응답에서만 사용

## 특별한 정보

### Host

- 요청한 호스트 정보(도메인)
- 요청에서 사용
- 필수
- 하나의 서버가 여러 도메인을 처리해야 할 때
- 하나의 IP 주소에 여러 도메인이 적용되어 있을 때

### Location

- 페이지 리다이렉션
- 웹 브라우저는 3xx 응답의 결과에 Location 헤더가 있으면, Location 위치로 자동 이동(리다이렉트)
- 응답코드 3xx에서 설명
- 201 (Created): Location 값은 요청에 의해 생성된 리소스 URI
- 3xx (Redirection): Location 값은 요청을 자동으로 리디렉션하기 위한 대상 리소스를 가리킴

### Allow

- 허용 가능한 HTTP 메서드
- 405 (Method Not Allowed)에서 응답에 포함해야함
- Allow: GET, HEAD, PUT

### Retry-After

- 유저 에이전트가 다음 요청을 하기까지 기다려야 하는 시간
- 503 (Service Unavailable): 서비스가 언제까지 불능인지 알려줄 수 있음
- Retry-After: Fri, 31 Dec 1999 23:59:59 GMT (날짜 표기)
- Retry-After: 120 (초단위 표기)

## 인증

- Authorization: 클라이언트 인증 정보를 서버에 전달
- WWW-Authenicate: 리소스 접근시 필요한 인증 방법 정의
