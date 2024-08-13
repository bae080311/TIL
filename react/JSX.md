# JSX

- JSX는 HTML과 유사한 구문을 자바스크립트 코드 안에서 사용할 수 있게 해줍니다
- JSX(Javascript Stntax eXtension)는 JS의 확장 문법입니다
- JSX는 react로 개발할 때 사용되므로 공식 JS문법은 아닙니다
- JSX 형태의 코드를 브라우저에서 실행하기 전에 바벨을 사용하여 JS 형태의 코드로 변환합니다

### 문법

- 반드시 부모 요소 한개가 모두 감싸는 형태여야 합니다
- JS 표현식을 쓰려면 {} 중괄호로 감싸주어야 합니다
- if문 대신 삼항 연산자를 사용하는게 좋습니다
- 카멜 표기법을 사용하여야 합니다 ex) className, backgroudColor 등등..
- 주석은 {/_블라블라_/} 이렇게 사용합니다

ex)

```js
function App() {
  return <h1>Hello</h1>;
}

// 바벨이 JS 형태의 코드로 변환한 예시
function App() {
  return React.createElement("h1", "Hello!");
}
```
