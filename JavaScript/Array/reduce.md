# reduce()

인수로 함수를 받습니다 누산기라고 생각하면 쉽습니다
**(누적 계산 값, 현재값) => { return 계산 값 }**

ex)

```js
let arr = [1, 2, 3, 4, 5];

const result = arr.reduce((prev, cur) => {
  return prev + cur;
}, 0);

console.log(result);
```
