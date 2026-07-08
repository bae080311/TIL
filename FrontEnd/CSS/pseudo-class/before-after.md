# ::before-::after

CSS의 ::before와 ::after는 가상 요소(pseudo-elements)로, HTML 요소의 앞이나 뒤에 콘텐츠를 추가하는 데 사용됩니다 <br>
content 속성이 필수로 요구 됩니다
`선택자::before`
`선택자::after`

```css
.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  position: relative;
}

.button::before {
  content: "🔥";
  position: absolute;
  left: -25px;
  top: 0;
}

.button::after {
  content: "⭐";
  position: absolute;
  right: -25px;
  top: 0;
}
```
