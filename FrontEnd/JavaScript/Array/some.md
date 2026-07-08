# some()

- 배열 안의 어떤 요소라도 주어진 판별 함수를 적어도 하나라도 통과하는지 테스트합니다
- Boolean 값을 반환 합니다

### 예시

```js
const old = (v) => v > 19;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(old)); // true
```
