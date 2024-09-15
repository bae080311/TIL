# interface

상호 간에 정의한 약속 혹은 규칙입니다
같은 범주에 대해 약속을 정의할 수 있습니다

ex)

```js
type Score = 'A' | 'B' | 'C' | 'F';

interface User {
  name: string;
  age: number;
  gender?: string; // optional
  readonly birthYear: number; // 읽기 전용
  [grade:number]: Score;
}

let user: User = {
  name: "Bae",
  age: 17,
  birthYear: 2000,
  1: 'A'
  2: 'B'
  3: 'c' // error
};

user.gender = "male";
user.birthYear = 2008; // error


console.log(user.name);

interface Add{
  (num1: number, num2: number): number;
}

const add: Add = function (x, y){
  return x + y;
}

add(10, 20);

interface isAdult {
  (age:number): boolean;
}

const check: IsAdult = (age) =>{
  return age>19;
}
```
