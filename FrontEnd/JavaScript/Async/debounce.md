# debounce

연속적으로 발생하는 이벤트(scroll, input 등등)를 하나로 처리하는 방식입니다(마지막 이벤트만 발생)

![debounce](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F994614365C17654319)

debounce 구현, 사용 예시

```js
function debounce(func) {
  let timer;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 300);
  };
}

window.addEventListener(
  "scroll",
  debounce(() => {
    alert("내가 스크롤 했다!!!");
  })
);
```

++ 직접 구현하지 않고 lodash 라이브러리를 이용해서 사용 가능합니다
