# Hexagonal 아키텍처란?
- 클린 아키텍처를 일반화한 구조 중 하나입니다
- 유지보수성과 확장성을 높이기 위해 고안되었습니다
- 어댑터와 포트를 중심으로 구성되어 포트와 어댑터 아키텍처라고도 불립니다
- 비즈니스 로직을 외부로부터 격리시켜 외부시스템과 의존성을 최소화합니다\
**장점**
- 유연성
- 테스트 용이성
- 유지보수성\
**단점**
- 구현 복잡성
- 초기 개발 시간 증가

### 구조
- 핵심 비즈니스 로직은 중앙의 도메인 영역에 위치하고 입출력을 처리하는 포트와 어댑터를 통해 외부와 소통합니다
- 도메인 로직과 인프라 스트럭처 계층을 명확히 분리함으로써 변경 사항이 도메인 로직에 미치는 영향을 줄입니다
- 해당 구조는 유지보수를 용이하게하여 시스템의 다양한 부분을 독립적으로 개발하고 테스트할 수 있는 환경을 제공합니다
- 헥사고날 아키텍처는 도메인 중심 설계와 밀접하게 연관되어있어 비즈니스 로직의 중심성을 강조합니다
### 헥사고날 아키텍처 주요 컴포넌트
- Adapter: 포트를 통해 인프라와 실제로 연결하는 부분을 담당하는 구현체를 의미합니다
    - Driving Adapter: 사용자의 요청을 받아들일 때 사용되는 Adapter
    - Driven Adapter: 도메인 모델의 처리에 사용되는 Adapter
- Port: 서비스에 어댑터에 대한 명세만을 제공하는 계층으로 단순히 인터페이스 정의만 존재하고 DI를 위해 사용됩니다
- Application Service: 어댑터를 주입 받아 도메인 모델과 어댑터를 적절히 오케이스트레이션하는 계층을 의미합니다
- Domain Model: 엔티티의 상태 변경과 비즈니스 규칙은 엔티티 내부에서 처리합니다. DB 데이터가 필요하면 엔티티가 직접 조회하지 않고, UseCase가 Port를 통해 데이터를 가져와 전달합니다.
```
src/
blog
└─ post
   ├─ domain
   │  └─ Post
   │
   ├─ application
   │  ├─ CreatePostService
   │  └─ port
   │     ├─ in
   │     │  └─ CreatePostUseCase
   │     └─ out
   │        ├─ LoadUserPort
   │        └─ SavePostPort
   │
   └─ adapter
      ├─ in
      │  └─ web
      │     └─ PostController
      └─ out
         └─ persistence
            ├─ PostPersistenceAdapter
            └─ PrismaPostRepository
```