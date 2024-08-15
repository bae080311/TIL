# Math

수학적인 상수와 함수를 위한 속성과 메서드를 가진 내장 객체입니다

### floor

내림을 해주는 메서드
ex)

```js
const num = 1.4;

console.log(Math.floor(num)); // 1
```

### ceil

올림을 해주는 메서드
ex)

```js
const num = 1.4;

console.log(Math.ceil(num)); // 2
```

### round

반올림을 해주는 메서드
ex)

```js
const num = 1.4;

console.log(Math.round(num)); // 1
```

### max & min

max는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자, 최댓값을 반환합니다
min은 입력값으로 받은 0개 이상의 숫자 중 가장 작은 숫자, 최소값을 반환합니다

ex)

```js
console.log(Math.max(-10, 20)); // 20
console.log(Math.min(10, 20)); // 10
```

### abs

절대값을 반환해줍니다
ex)

```js
const x = -1;

console.log(Math.abs(x)); // 1
```
