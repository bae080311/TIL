# Repository란?

- 데이터베이스 접근을 담당하는 계층입니다
- Entity 단위로 CRUD(조회/생성/수정/삭제)를 수행하고, Service가 SQL/DB 세부사항을 몰라도 되게 감춰줍니다
- NestJS + TypeORM에서는 `@InjectRepository()`로 주입받아 기본 CRUD 메서드를 바로 쓰거나, 커스텀 Repository 클래스로 확장해서 사용합니다

```ts
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  findById(id: number) {
    return this.userRepository.findOneBy({ id });
  }
}
```

## 왜 Repository로 분리할까?

- DB 접근 로직(쿼리 작성 등)을 Service에서 떼어내면, DB를 교체하거나 쿼리를 최적화할 때 Service 코드를 건드리지 않아도 됩니다
- 테스트할 때 Repository를 mock으로 대체하기 쉬워집니다
- Service는 "무엇을 저장/조회할지"에만 집중하고, "어떻게 저장/조회할지"는 Repository가 책임집니다
