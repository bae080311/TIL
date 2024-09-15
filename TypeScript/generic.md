# Generic

함수, 클래스, 인터페이스 등이 다양한 타입에서 동작할 수 있도록 타입을 파라미터화하는 기능입니다.

```js
function getSize<T>(T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
getSize<number>(arr1); //3

const arr2 = ["1", "2", "3"];
getSize<string>(arr2); //3

const arr3 = [false, true, true];
getSize<boolean>(arr3); //3
```
