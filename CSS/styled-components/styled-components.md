# styled components란?

React 애플리케이션에서 스타일을 편리하게 JS에 작성하기 위해 만들어진 라이브러리입니다

![styled-component](/react/styled-components/styled-components.png)

### 왜 사용할까?

- CSS와 JS의 결합
  - 해당 컴포넌트에만 국한되므로 스타일이 글로벌로 확산되는 문제를 방지할 수 있습니다
- JS의 변수와 로직으로 동적 스타일링 가능
  - 조건부 스타일링, 테마 적용 등을 매우 유연하게 처리할 수 있습니다
- 가독성 향상
  - 스타일을 컴포넌트 단위로 분리해 놓으면 코드가 보다 직관적이고 읽기 쉬워집니다

### 단점

- 성능 문제
  - 대규모 애플리케이션, 동적 스타일을 자주 변경해야 하는 경우
- 파일 크기 증가
  - 프로젝트에 추가적인 코드와 런타임 로직을 포함하기 때문

### 🎯[ 사용법 ]

- 설치하기

```bash
# npm
npm install styled-components@latest

# yarn

yarn install styled-components@latest
```

- 기본 사용법

```js
import styled from "styled-components"; // library 추가해주기

const Btn = styled.button`
  background-color: tomato;
  color: white;
  font-weight: 600;
`;

export default function background() {
  return <Btn>클릭해라</Btn>;
}
```

- props 활용: 동적으로 스타일을 설정할 수 있습니다

```js
import styled from "styled-components"; // library 추가해주기

const Btn = styled.div`
  background-color: ${(props) => (props.primary ? "#f00" : "#0f0")};
  color: white;
  font-weight: 600;
`;

export default function background() {
  return (
    <div>
      <Btn>일반</Btn>
      <Btn primary>Primary</Btn>
    </div>
  );
}
```

- global 스타일

```js
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* 나머지 컴포넌트들 */}
    </>
  );
};
```
