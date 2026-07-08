# replace()

- 사용자가 원하는 특정 문자열을 찾아 다른 문자열로 대체 해주는 함수입니다
- 특정 문자열이나 정규 표현식 패턴을 사용하여 원본 문자열 내에서 대상을 찾습니다

ex)

```js
const before = "Hello, world";

// "Hello"를 "Hi"로 대체
const after1 = before.replace("Hello", "Hi");
console.log(after1); // "Hi, world"

// 정규 표현식을 사용하여 "hello"를 대소문자 구분 없이 "Hi"로 대체
const regex = /Hello/g; // 'i' 플래그를 사용하여 대소문자 구분 없이 검색
const after2 = before.replace(regex, "Hi");
console.log(after2); // "Hi, world"
```
