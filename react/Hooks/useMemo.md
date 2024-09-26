# useMemo()

리액트에서 컴포넌트의 성능을 최적화 하는데 사용되는 훅입니다

공식 문서에는

> 재렌더링 사이에 계산 결과를 캐싱할 수 있게 해주는 React Hook 입니다

라고 정의 돼 있습니다

### 기본 구조

`const cachedValue = useMemo(calculateValue, dependencies)`

- 첫번째 인자: 콜백 함수
- 두번째 인자: 의존성 배열 <br>

만약 빈 배열을 넣는다면 useEffect와 마찬가지로 마운트 될 때에만 값을 계산하고 그 이후론 계속 memoization된 값을 꺼내와 사용
