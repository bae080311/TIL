# scope란?

scope를 우리말로 번역하면 "범위"라는 뜻을 가집니다 즉, 변수가 접근할 수 있는 범위라고 할 수 있습니다 scope는 두가지 타입으로 나눌 수 있는데 전역(global)과 지역(local)으로 나눠집니다

### 전역 스코프

- 말 그대로 전역에 선언되어있어 어느 곳에서든지 해당 변수에 접근할 수 있습니다
- ex)

```js
const num = 0;

console.log(num); // 0
```

### 지역 스코프

- 해당 지역에서만 접근할 수 있어 지역을 벗어난 곳에선 접근할 수 없습니다
- ex) 함수 스코프

```js
function ex() {
  let num = 0;
}

colsole.log(num); //error
```
