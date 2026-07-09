# Controller란?
- 클라이언트로부터 요청을 받고 해당 요청에 대해 서비스 레이어에 구현된 적절한 메소드를 호출해서 결괏값을 받습니다
- 클라이언트로부터 들어오는 HTTP 요청을 받아서 처리하고 그에 맞는 결과를 HTTP 응답으로 반환합니다

```js
app.get("/users", (req, res) => {
  res.json({ name: "경진" });
});

app.post("/users", (req, res) => {
  const body = req.body;
  res.json(body);
});
```

- `@Controller()`: 컨트롤러 클래스
- `@Get()`: GET 요청 처리
- `@Post()`: POST 요청 처리
- `@Body()`: 요청 body 받기
- `@Param()`: URL 경로 값 받기
- `@Query()`: 쿼리 파라미터 받기
