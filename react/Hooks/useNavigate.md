# useNavigate()

페이지를 이동할 때 사용합니다

첫번째 파라미터에는 주소를 넣거나 -1(이전 페이지) 같은 값을 넣어 주소를 이동 시킬 수 있습니다

두번째 파라미터에는 선택사항인데 `{replace : true}` 이렇게 하면 이전으로 갈 수 없어집니다

예시

```js
import { useNavigate } from "react-router-dom";

const navigation = useNavigate();

navigation("/", { replace: true });
```
