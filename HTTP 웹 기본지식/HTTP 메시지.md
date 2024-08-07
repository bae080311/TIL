# HTTP 메시지

![HTTP 메시지](/HTTP%20메시지/HTTPMessage.png)

# 시작 라인 요청 메시지

- HTTP 메서드 (GET: 조회)
- 요청 대상 (/search?q=hello&hl=ko)
- HTTP Version

## HTTP 메서드

- 종류: GET, POST, PUT, DELETE..
- 서버가 수행해야 할 동작 지정
  GET: 리소스 조회
  POST: 요청 내역 처리

## 요청 메시지 - 요청 대상

- absolute-path[?query] (절대 경로[?쿼리])
- 절대 경로=”/”로 시작하는 경로

## 응답 메시지

- start-line = request-line / status-line
- status-line = HTTP-version SP status-code SP reason-phrase CRLF (space=SP)
- HTTP Version
- HTTP 상태 코드: 요청 성공, 실패를 나타냄
  200: 성공
  400: 클라이언트 요청 오류
  500: 서버 오류
- 이유 문구: 사람이 이해할 수 있는 짧은 상태의 코드 설명

# HTTP header

- header-field = field-name “;” OWS field-value OWS (OWS: 띄어쓰기 허용)
- field-name은 대소문자 구문 없음

# HTTP header 용도

- HTTP 전송에 필요한 모든 부가 정보
- 예) 메시지 바디의 내용, 메시지 바디의 크기, 압축, 인증, 요청 클라이언트(브라우저) 정보, 서버 애플리케이션 정보, 캐시 관리 정보..
- 표준 헤더가 너무 많음
- 필요 시 임의의 헤더 추가 가능

# HTTP 메시지 바디 용도

- 실제 전송할 데이터
- HTML 문서, 이미지, 영상, JSON 등등 byte로 표현할 수 있는 모든 데이터 전송 가능

# 단순함 확장 가능

- HTTP는 단순하다. 스펙도 읽어볼 만..
- HTTP 메시지도 매우 단순
- 크게 성공하는 표준 기술은 단순하지만 확장 가능한 기술
