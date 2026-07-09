# Entity란?

- DB 테이블과 1:1로 매핑되는 객체입니다 (ORM이 관리하는 영속성 객체)
- 클래스의 필드가 테이블의 컬럼에 대응되고, 인스턴스 하나가 로우(row) 하나를 의미합니다
- ORM(TypeORM 등)이 Entity를 기준으로 SQL을 자동으로 생성하고 실행합니다
- 영속성 컨텍스트에서 상태(생성/수정/삭제 여부)가 추적됩니다

```ts
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @CreateDateColumn()
  createdAt: Date;
}
```

## 주의할 점

- Entity를 그대로 Controller의 응답으로 내려주면 DB 구조가 그대로 노출되고, 비밀번호 같은 민감한 필드까지 나갈 위험이 있습니다
- 그래서 응답할 때는 Entity를 DTO로 변환해서 필요한 필드만 골라 반환합니다
