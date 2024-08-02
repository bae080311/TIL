# filter()

**배열에서 사용자가 원하는 조건을 정하고 그 조건에 맞는 요소들을 필터링해줍니다**

ex)

```js
const arr = [1, 2, 3, 4, 5]; //배열 정의
const result = arr.filter((odd) => odd % 2 !== 0); // 홀수를 걸러서 result에 담기
console.log(result); //결과 출력
```
