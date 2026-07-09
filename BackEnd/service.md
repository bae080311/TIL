# Service란?

- 비즈니스 로직을 처리하는 계층입니다
- Controller로부터 받은 DTO를 가지고 검증, 트랜잭션 처리, 여러 Repository 조합 등 실제 로직을 수행합니다
- Repository를 통해 데이터에 접근하고, 필요하면 Entity ↔ DTO 변환도 이 계층에서 담당합니다
- Controller는 "어떻게 처리할지" 몰라도 되고, Service만 알면 되도록 관심사를 분리합니다

```ts
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(dto: CreateUserDto) {
    const user = this.userRepository.create(dto);
    return this.userRepository.save(user);
  }

  async getUser(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    return new UserResponseDto(user);
  }
}
```

## 왜 Service가 필요할까?

- Controller에 비즈니스 로직을 직접 두면 요청/응답 처리 코드와 로직이 섞여서 테스트하기 어려워집니다
- Service로 분리하면 Controller를 바꾸지 않고도(REST → GraphQL 등) 로직을 재사용할 수 있습니다
- Repository도 Service 뒤에 감춰져 있어서, DB 접근 방식이 바뀌어도 Controller는 영향을 받지 않습니다
