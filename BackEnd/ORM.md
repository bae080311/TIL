# ORM이란?
- ORM은 객체 지향 프로그래밍의 **객체와 관계형 데이터베이스의 데이터를 이어주는 기술**입니다 
- 이해하기 쉽게 말하자면 객체 지향 프로그래밍의 객체와 관계형 데이터베이스의 데이터 세계를 이어주는 연결다리입니다 

## ORM이 필요한 이유
- 객체 지향 프로그래밍과 관계형 데이터베이스의 사상 차이 때문입니다 
    - 객체 중심 <-> 관계 중심
- SQL 작성 없이 친숙한 프로그래밍 언어로 데이터베이스를 다룰 수 있습니다
- 수동으로 데이터베이스를 업데이트 하거나 별도의 관리도구가 필요 없음
- 마이그레이션 메커니즘을 통해 데이터베이스 스키마 변경 이력을 체계적으로 관리할 수 있습니다
    - 마이그레이션 = DB 구조 변경 기록 + 자동 적용 시스템

### TypeORM이란?
- TypeORM이란 Code_first ORM입니다
- 코드를 먼저 작성하고 ORM은 데이코레이터가 제공한 메타데이터를 사용해 클래스를 데이터베이스 데이터와 매핑하게 되기 때문입니다
```ts
// TypeORM 엔티티 예시
@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
```
### Prisma
- Schema-First ORM
- schema.prisma 파일에 데이터베이스 스키마를 명세하는 방식을 취합니다
```ts
// 데이터베이스 연결 정보
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// 모델(테이블) 구조와 관계 정의
model User {
  id      Int      @id @default(autoincrement())
  name    String
}
```
**명세하는 정보**
- 데이터베이스 연결 정보
- 각 모델의 구조
- 모델 간의 관계
- 필드의 타입과 제약조건
### read

```ts
// TypeORM
const posts = await postRepository.find({
  where: { published: true },
  relations: {
    author: true
  }
});

// Prisma
const posts = await prisma.post.findMany({
  where: { published: true },
  include: {
    author: true
  }
});
```

- 이렇게 단일 관계를 조회하는 정도로는 `relations`냐 `include`냐 이름만 다를 뿐 실질적인 차이는 크지 않습니다. 진짜 차이는 관계가 중첩되거나(아래 중첩 join), 타입 안정성·성능을 따질 때부터 벌어집니다

### 중첩 join
- Prisma는 `include`를 중첩해서 관계를 계층적으로 표현합니다
- TypeORM은 SQL에 가까운 QueryBuilder로 join을 직접 다룹니다

```ts
// TypeORM
const posts = await postRepository
  .createQueryBuilder("post")
  .leftJoinAndSelect("post.author", "author")
  .leftJoinAndSelect("author.profile", "profile")
  .getMany();

// Prisma
const posts = await prisma.post.findMany({
  include: {
    author: {
      include: { profile: true }
    }
  }
});
```

### create / update / delete
- Prisma는 의도가 명확하게 드러나는 별도 메서드(`create`, `update`, `delete`)를 제공합니다
- TypeORM의 `save`는 내부적으로 SELECT 후 UPDATE/INSERT를 수행하는 upsert 방식이라, 의도치 않은 조회 쿼리가 추가로 발생할 수 있습니다

```ts
// TypeORM: save 하나로 생성/수정이 모두 처리됨 (upsert)
await postRepository.save({ id: 1, title: "수정" });

// Prisma: 의도가 메서드로 명확히 분리되어 있음
await prisma.post.update({ where: { id: 1 }, data: { title: "수정" } });
```

### 타입 안정성
- Prisma는 `include`에 포함한 필드만 타입에 반영되기 때문에, 실제 데이터와 타입이 항상 일치합니다
- TypeORM은 relations을 지정하지 않아도 타입상으로는 필드가 존재하는 것처럼 보여서, 실행 시점에 예상치 못한 `undefined` 에러가 날 수 있습니다

### 성능(N+1 문제)
- Prisma는 기본적으로 1+1 방식(메인 쿼리 후 관계 쿼리)으로 동작해 N+1 문제를 예방합니다. 5.8.0부터는 `relationLoadStrategy` 옵션으로 JOIN/QUERY 전략을 선택할 수 있습니다
- TypeORM은 JOIN으로 한 번에 모든 정보를 가져옵니다

### 특수 기능 - Soft Delete
- TypeORM은 `@DeleteDateColumn`과 `softDelete()`로 소프트 삭제를 기본 지원합니다
- Prisma는 스키마에 `deletedAt` 같은 필드를 직접 추가하고 수동으로 처리해야 합니다

```ts
// TypeORM
@DeleteDateColumn()
deletedAt: Date;

await postRepository.softDelete(1);
```

### 문서 및 개발 경험
- Prisma 공식 문서가 더 친절하고 검색하기 편하다는 평가가 많습니다
- TypeORM 문서는 처음 배우는 사람에게는 다소 불친절하다는 의견이 있습니다

## 결론
- 새 프로젝트를 시작한다면 Prisma 추천 — 프로젝트 규모가 커질수록 타입 안정성의 이점이 커짐
- 이미 TypeORM으로 되어 있는 프로젝트를 마이그레이션할 땐 신중해야 함 — e2e 테스트로 성능을 검증하고 변경 코드량을 산정한 뒤 결정할 것


