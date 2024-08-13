# virtual DOM이란?

실제 DOM을 조작하는게 아니라 실제 DOM을 모방한 가상의 DOM을 구성하여 원래 DOM과 비교하여 달라진 부분을 리렌더링 하는 방식으로 작동합니다

> **DOM**이란? 웹사이트에 접속하면 요소들이 모여 하나의 문서를 구성하는데, 이러한 문서 구조를 프로그래밍 언어가 이해할 수 있도록 표현한 것입니다.

### Virtual DOM을 사용하는 이유

- 깜빡거림 없이 부드러운 화면을 사용자에게 제공하고자 변경사항만 빠르게 파악하기 위해 사용합니다
- virtual DOM은 매우 가볍기 때문에 부담이 없습니다

### 장점

- 성능: 변경된 부분만 실제 DOM에 적용함으로써 렌더링 성능을 향상시킵니다
- 일관성: 가상 돔은 상태 변화를 추적하고, 변경 사항을 적용함으로써 렌더링 일관성을 유지합니다
- 복잡한 UI 관리: 비교적 규모가 큰 애플리케이션에서 UI를 관리하기 위해 컴포넌트 기반 구조를 사용하게 되는데 virtual DOM이 가장 효율적으로 잘 관리할 수 있습니다

### 단점

- 추가적인 메모리 사용: 메모리 상에 DOM과 완전히 동일한 구조의 메모리를 유지하게 되는데, 따라서 추가적인 메모리를 사용하게 됩니다
- 특정 상황에서의 불필요함: 정말 간단한 UI나 작은 규모의 애플리케이션에서는 불필요한 오버헤드일 수 있습니다