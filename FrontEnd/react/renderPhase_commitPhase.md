# render phase란?

- 리액트가 변화된 상태나 props에 따라 어떤 UI가 변경 되어야 할지 결정하는 단계입니다
- 실제 DOM을 업데이트 하는 것이 아닌 변경사항을 가상 DOM에서 계산하여 비교합니다
- 성능에 영향을 주지 않도록 중단되거나 다시 실행될 수 있습니다
- React 18에서 도입 된 ConCurrent Mode를 통해 비동기적으로 처리 가능합니다

# commit phase란?

- 실제로 변화된 UI를 DOM에 반영하는 단계입니다
- 가상 DOM에서 계싼된 결과를 실제 DOM에 적용하고 변화된 UI를 브라우저에 렌더링합니다
- DOM 업데이트 이후 useEffect와 같은 사이드 이펙트를 발생시키는 훅들이 실행됩니다

### 특징

- **단계적 진행**: render phase 완료 후 즉시 commit phase를 실행하지 않고 다른 높은 우선순위 작업이 있다면 먼저 처리한 후 나중에 comit phase를 실행할 수 있습니다
- **병목 관리**: render phase에서 모든 변경 사항이 Fiber Tree에 준비된 상태에서 commit phase로 넘어가므로 render와 commit 단계의 일관성이 유지됩니다
