# filter()

자바스크립트의 filter 함수는 배열의 각 요소를 검사하여 조건에 맞는 요소들만을 새로운 배열로 반환하는 함수입니다.

ex)

```js
const arr = [1, 2, 3, 4, 5]; //배열 정의
const result = arr.filter((odd) => odd % 2 !== 0); // 홀수를 걸러서 result에 담기
console.log(result); //결과 출력
```
