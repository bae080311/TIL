# 제어의 역전(IOC)이란?
- IOC는 프로그램의 흐름을 개발자가 아닌 **프레임워크**가 관리하는 것을 의미 합니다
- 개발자는 이를 통해 비즈니스 로직에 더 집중할 수 있게 됩니다
- 객체 생성과 연결을 프레임워크가 대신 합니다
```ts
@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}
}
```
### 왜 제어의 역전일까?
개발자가 원래 제어하고 하는 일(객체 생성, 의존성 연결, 생명주기 관리)을 프레임워크가 대신 제어 해주기 때문에 제어의 역전이라고 합니다
