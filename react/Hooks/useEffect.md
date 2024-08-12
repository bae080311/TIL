# useEffext()

useEffect 는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정 할 수 있는 Hook 입니다

### 사용법

```js
useEffect(function, deps)
```

- function: 수행하고자 하는 작업
- deps: 배열 형태이며 useEffect가 실행될 의존성 값을 넣습니다 만약 의존성 배열이 빈 배열([])이라면, 해당 useEffect는 컴포넌트가 처음 렌더링될 때만 실행됩니다

### 사용 방식

1. componentDidMount: component가 mount 됐을 때 (처음 나타났을 때 실행) <br>
   deps위치에 빈 배열 넣기 만약 생략하면 리렌더링 될 때마다 실행

```js
useEffect(() => {
  console.log("Mount");
}, []);
```

2. componentDidUpdate: component가 update 될 때(특정 props, state가 바뀔 때 실행)

```js
useEffect(() => {
  console.log(age);
  console.log("update");
}, [age]);
```

3. componentDidUnMount: Component가 unmount될 때(사라질 때)& update되기 직전에 실행

```js
useEffect(() => {
  console.log("effect");
  console.log(age);
  return () => {
    console.log("cleanUp");
    console.log(age);
  };
}, []);
```

- cleanUp 함수 반환 (useEffect에 대한 뒷정리 함수)
- 언마운트 될 때만 cleanUp함수를 실행하고 싶으면 deps자리에 빈배열
- 특정 값이 업데이트 되기 직전에 cleanUp함수를 실행하고 싶다면 deps에 원하는 것을 넣어줍니다
- 컴포넌트가 재사용될 때마다 실행됩니다
