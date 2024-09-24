# find()

배열 요소 중에서 조건에 맞는 첫번째 요소를 반환합니다

사용법은
`array.find(element, index, array);`

- element: 현재 배열의 요소
- index(optional): 현재 요소의 index
- array(optional): filter 함수를 호출한 배열
- array(optional): callback을 실행할 때 this로 사용되는 값(= map 함수에서 사용될 this값) <br>
  ex)

```js
const array = ["cat", "dog", "cat"];
const found = array.find((element) => element === "cat");

console.log(found); // "cat"
```
