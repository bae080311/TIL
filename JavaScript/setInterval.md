# setInterval()

일정한 시간 간격으로 반복 호출되는 함수입니다

형식: setInterval(반복할 함수, 시간 단위)
ex)

```js
let count = 1;
let timer;

timer = setInterval(() => {
  console.log(count++);
}, 1000); // 1초로 세팅하고 카운트에 계속 1을 더하니 숫자 카운트가 됩니다
```
