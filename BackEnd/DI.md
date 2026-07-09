# 의존성 주입이란?
- 객체 간의 의존성을 외부에서 주입하는 방식을 말합니다
- 객체가 필요로 하는 의존 객체를 직접 생성하지 않고 외부에서 생성된 객체를 주입받아 사용합니다
- 필여한 의존성만을 제공받으므로 객체 간의 결합도는 낮아지고 코드의 유연성은 늘어납니다
```ts
@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  getUser(id: number) {
    return this.userRepository.findById(id);
  }
}
```