# module이란?

여러 기능들에 관한 코드들이 하나의 파일 안에 모여있는 것입니다

### module을 사용하는 이유?

- 유지보수성이 좋습니다
- 재사용성이 좋습니다
- 다른 자체적인 스코프를 가져서 함수나 변수명의 충돌을 막을 수 있습니다
  이러한 장점 때문에 여러 기능들을 모듈화 해서 사용하면 좋습니다

필요한 코드가 담긴 파일을 import해 사용합니다

#### ES6 module

```js
import Example from "example";
```

완성된 모듈을 export해서 다른 파일에서 그 파일을 import할 수 있게 합니다

```js
export default function Hello() {
  console.log("Hello");
}
```
