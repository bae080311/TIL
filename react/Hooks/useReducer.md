# useReducer

상태관리, 상태 업데이트 훅입니다 <br>상태 관리할 데이터가 커질 때 사용하기 좋습니다<br> 구조화 된 방식으로 상태를 관리하고 싶을 때도 사용할 수 있습니다 <br>

### 선언형태

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

- state: 상태명
- dispatch:필요한 정보를 전달하는 함수
- reducer: dispatch를 참고해 state를 변경해주는 함수(인자 state와 action을 받는다)
- initialState: 초기값

예시)

```js
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "diet":
      return {
        kg: state.kg - 1,
      };
    case "eat":
      return {
        kg: state.kg + 1,
      };
    default:
      return state;
  }
}

function Example() {
  const [state, dispatch] = useReducer(reducer, { kg: 100 });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "diet" });
        }}
      >
        다이어트 하기
      </button>
      <button
        onClick={() => {
          dispatch({ type: "eat" });
        }}
      >
        먹기
      </button>
      <p>니 몸무게 {state.kg}kg</p>
    </>
  );
}

export default Example;
```
