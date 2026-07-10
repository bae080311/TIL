# Express란?
- Node.js에서 웹 애플리케이션을 만들 때 자주 사용되는 프레임워크입니다 
- HTTP 요청을 처리하거나 여러 URL에 대한 라우팅 설정하는 작업을 훨신 간단하게 해줍니다
### Express로 할 수 있는 일
- 클라이언트 요청 처리
- JSON 데이터 주고받기
- 로그인 처리
- 데이터베이스와 연결
- API 만들기
- 에러 핸들링
- 미들웨어로 기능 확장
### 기본 구성 파일들
```
project/
├── server.js            ← 서버 시작 파일
├── routes/              ← 라우터 모음
│   └── userRoutes.js
├── controller/          ← 요청 처리 로직
│   └── userController.js
├── config/              ← DB 설정 등 환경설정
│   └── db.js
```