# css-module이란?

CSS Module은 CSS 파일을 로컬 범위에서만 적용되도록 하는 방식입니다. 즉, CSS 클래스 이름의 충돌을 방지하기 위해 만들어졌습니다

`이름.module.css` 이런 형식으로 파일명을 지어줍니다

ex)
Button.module.css

```css
/* Button.module.css */
.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}
```

Button.jsx

```js
// Button.jsx
import React from "react";
import styles from "./Button.module.css"; // CSS Module import

function Button() {
  return <button className={styles.button}>Click Me</button>;
}

export default Button;
```
