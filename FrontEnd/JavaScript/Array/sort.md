# sort()

배열을 재정렬 해줍니다 배열 자체가 변경되니 주의하셔야 합니다
인수로 정렬 로직을 담은 함수를 받습니다
Lodash 라이브러리로 여러 정렬함수를 이용할 수 있습니다

ex1)

```js
let arr = [3, 4, 1, 2, 5];
arr.sort();

console.log(arr);
```

ex2)

```js
let arr = [13, 24, 5, 8];

function fn(a, b) {
  return a - b;
}

arr.sort(fn);

console.log(arr);
```
