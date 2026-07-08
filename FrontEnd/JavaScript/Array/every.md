# every()

- 배열의 모든 요소가 제공된 함수로 구현된 테스트를 통과하는지 테스트합니다
- Boolean 값을 반환합니다

### 예시

```js
const old = (v) => v > 19;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(old)); // false
```
