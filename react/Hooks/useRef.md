# useRef

렌더링에 필요하지 않은 값을 참조할 수 있는 React Hook입니다

ex)

```js
function example() {
  const value = useRef("");
  return (
    <div>
      <input ref={value} />
    </div>
  );
}
```
