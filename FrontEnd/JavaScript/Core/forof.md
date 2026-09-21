## for of

배열의 요소 개수만큼 반복하고, 반복 때마다 각 요소들을 사용할 수 있는 변수가 주어지는 반복문
map메서드와 forEach메서드의 콜백 함수 내에 있는 element를 사용하는 것과 비슷함

### 예시

```js
const fruits = [tomato, banana, apple];
for (fruit of fruits) {
  console.log(fruit);
}
```
