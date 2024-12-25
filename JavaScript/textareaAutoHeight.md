# Textarea 높이 자동 조절 구현

TextArea를 스크롤이 되게 하지 않고 넓이가 늘어나게 구현하기

```js
<textarea
  onChange={(e) => {
    e.target.style.height = 0; // 높이 누적 방지
    e.target.style.height = text.scrollHeight + "px";
  }}
></textarea>
```
