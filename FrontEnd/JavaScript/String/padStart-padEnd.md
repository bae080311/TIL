# padStart(), padEnd()

날짜를 계산할 때 앞뒤에 0을 붙여야 하거나, 일부 암호화를 해야할 때가 있습니다. 그럴 때 padStart()는 앞에 padEnd()는 뒤에 붙여줍니다

ex)

```js
// 적용할문자열.(채울길이, 채울문자)

const str1 = "12345";

console.log(str1.padEnd(10, ".")); // -> "12345....."
console.log(str1.padStart(10, ".")); // -> ".....12345"
```
