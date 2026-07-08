# match()

정규식이나 단어로 원하는 텍스트가 문구 안에 포함되어 있는지 확인할 수 있는 함수입니다

ex) 단어

```js
const str = "My name is BAE";

str.match("BAE"); // result BAE
```

ex)

```js
const str = "My name is BAE";
const regex = /BAE/i;

str.match(regex);
```
