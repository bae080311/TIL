# component

- 컴포넌트란 사용자 인터페이스를 구축하는 데 사용되는 재사용 가능한 코드 블록입니다
- 재사용성이 높습니다
- 유지보수성과 가독성이 높아집니다
- 대문자로 작성해야 합니다

ex)

```js
function Greeting() {
  return <h1>안녕</h1>;
}
```

# props

- 컴포넌트 간에 데이터를 전달하는 방법입니다
- properties의 줄임말입니다
- 부모 컴포넌트가 자식 컴포넌트에 데이터를 전달할 때 사용됩니다
  ex)

```js
// 부모 전달
function Parent() {
  return <Child name="Bae" age={17} />;
}


// 자식
function Child (props) {
    return (
        <h1>Name: {props.name}</h1>
        <p>Age: {props.age}</p>
    );
}
```
