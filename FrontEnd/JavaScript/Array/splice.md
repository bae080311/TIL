# splice()

메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다

### 구문

`array.splice(start, deleteCount, items)`

- start: 시작 인덱스 값
- deleteCount: 삭제할 값의 갯수
- items: 자리를 대처할 값(optional)

ex)

```js
const array = ["Bae", "Park", "Kim"];

array.splice(0, 1, "Lee");

console.log(array); // result ['Lee', 'Park', 'Kim']
```
