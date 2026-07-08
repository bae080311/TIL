# switch문

- 복수의 if문을 switch문이라는 것으로 사용하면 좋습니다
- 특정 변수를 다양한 상황에서 비교할 수 있게 해줍니다
- 문법은 switch문은 하나 이상의 case문으로 구성됩니다 대개 default문도 있지만 이는 필수는 아닙니다
  ex)

```js
const num = 1;
switch (num) {
  case 1:
    console.log("1입니다");
    break;
  case 2:
    console.log("2입니다");
    break;
  default:
    console.log("1도 2도 아닙니다");
}
```
