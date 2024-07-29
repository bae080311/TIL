# 3xx (Redirection)

요청을 완료하기 위해 유저 에이전트의 추가 조치 필요

- 300 Multiple Choices
- 301 Moved Permanently
- 302 Found
- 303 See Other
- 304 Not Modified
- 307 Temporary Redirect
- 308 Permanent Redirect

## 리다이렉션 이해

- 웹 브라우저는 3xx 응답의 결과에 Location 헤더가 있으면, Location 위치로 자동 이동(리다이렉트)
  ![리다이렉션 예](/HTTP%20웹%20기본지식/상태코드/redirection.png)
- 종류
  - 영구 리다이렉션 - 특정 리소스의 URI가 영구적으로 이동
    - 예) /members -> /users
    - 예) /event -> /new-event
  - 일시 리다이렉션 - 일시적인 변경
    - 주문 완료 후 주문 내역 화면으로 이동
    - PRG: Post/Redirect/Get
  - 특수 리다이렉션
    - 결과 대신 캐시를 사용

### 영구 리다이렉션 (301, 308)

- 리소스의 URI가 영구적으로 이동
- 원래의 URL를 사용X, 검색 엔진 등에서도 변경 인지
- 301 Moved Permanently
  - **리다이렉트시 요청 메서드가 GET로 변하고, 본문이 제거될 수 있음(MAY)**
    ![301](/HTTP%20웹%20기본지식/상태코드/301.png)
- 308 Permanent Redirect - 301과 기능은 같음 - **리다이렉트 요청 메서드와 본문 유지(처음 POST를 보내면 리다이렉트도 POST)**
  ![308](/HTTP%20웹%20기본지식/상태코드/308.png)

### 일시적인 리다이렉션

302, 307, 303

- 리소스의 URI가 일시적으로 변경
- 따라서 검색 엔진 등에서 URL을 변경하면 안됨
- 302 Found
  - **리다이렉트시 요청 메서드가 GET으로 변하고, 본문이 제거될 수 있음(MAY)**
- 307 Temporary Redirect
  - 302와 기능은 같음
  - **리다이렉트시 요청 메서드와 본문 유지(요청 메서드를 변경하면 안된다. MUST NOT)**
- 303 See Other
  - 302와 기능은 같음
  - **리다이렉트시 요청 메서드가 GET으로 변경**

#### PRG: Post/Redirect/Get

일시적 리다이렉션 - 예시

- POST로 주문 후에 웹 브라우저를 새로고침하면?
- 새로고침은 다시 요청
- 중복 주문이 될 수 있다
  ![PGR](/HTTP%20웹%20기본지식/상태코드/PRG.png)
- POST로 주문후에 새로 고침으로 인한 중복 주문 방지
- POST로 주문후에 주문 결과 화면을 GET 메서드로 리다이렉트
- 새로고침해도 결과 화면을 GET으로 조회
- 중복 주문 대신에 결과 화면만 GET으로 다시 요청
