# DTO vs DAO

### DTO(Data Transfer Object)

- 계층 간(Controller ↔ Service, 서버 ↔ 클라이언트) 데이터를 주고받기 위한 객체입니다
- 로직 없이 순수하게 데이터만 담습니다 (필드 + getter/setter 정도)
- Entity를 그대로 노출하지 않기 위해 사용합니다 → 필요한 필드만 골라서 응답하거나, 요청 값 검증(`class-validator` 등)에 활용

```ts
export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
```

### DAO(Data Access Object)

- 데이터베이스에 직접 접근해서 CRUD를 수행하는 객체입니다 (지금의 Repository와 같은 역할)
- SQL 실행, 커넥션 관리 등 DB 접근 로직을 캡슐화합니다
- Repository 패턴이 널리 쓰이면서 요즘은 DAO 대신 Repository라는 이름을 더 많이 씁니다 (NestJS, Spring 모두 Repository로 통칭)

### 차이

| | DTO | DAO |
| --- | --- | --- |
| 목적 | 계층 간 데이터 전달 | DB 접근/CRUD 수행 |
| 로직 | 없음 (순수 데이터) | 있음 (쿼리 실행 등) |
| 위치 | Controller ↔ Service 사이 | Service ↔ DB 사이 |
