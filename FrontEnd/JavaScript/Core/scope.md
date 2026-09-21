# scope란?

scope(스코프)를 우리말로 번역하면 "범위"라는 뜻입니다. 즉, 변수가 접근할 수 있는 범위를 말하며, 전역(global) 스코프와 지역(local) 스코프로 나뉩니다.

## scope 규칙

1. 외부(상위) 스코프에서 정의된 변수는 내부(하위) 스코프에서 접근할 수 있습니다
2. 내부(하위) 스코프에서 정의된 변수는 외부(상위) 스코프에서 접근할 수 없습니다

### 전역 스코프

- 전역에 선언되어 있어 어느 곳에서든지 해당 변수에 접근할 수 있습니다

```js
const num = 0;

function print() {
  console.log(num); // 0, 전역 변수라 함수 내부에서도 접근 가능
}

print();
console.log(num); // 0
```

### 지역 스코프

- 해당 지역(함수 등)에서만 접근할 수 있어, 그 지역을 벗어난 곳에선 접근할 수 없습니다

```js
function example() {
  let num = 0;
  console.log(num); // 0, 함수 내부라 접근 가능
}

example();
console.log(num); // ReferenceError: num is not defined
```
