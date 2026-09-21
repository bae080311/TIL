# throttle

마지막 함수가 호출된 후 일정 시간이 지나기 전에 다시 호출되지 않도록 하는 것입니다

![throttle](https://junhyunny.github.io/images/posts/2021/throttle-test-with-jest-01.png)

throttle 구현, 사용 예시

```js
function throttle(func) {
  let time;
  return () => {
    if (time) return;
    time = setTimeout(() => {
      func();
      time = null; // 초기화 불필요한 참조를 제거하여 메모리 누수를 방지
    }, 300);
  };
}

window.addEventListener(
  "scroll",
  throttle(() => {
    console.log("scroll~");
  })
);
```
