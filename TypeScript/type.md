# TypeScript의 기본 타입들

- number
- string
- array
- Tuple
- void
- never
- enum
- null
- undefined

```js
let age: number = 30;
let isAdult: boolean = true;
let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];

let week1: string[] = ["mon", "tue", "wed"];
let week2: Array<string> = ["mon", "tue", "wed"];

// Tuple

let b: [string, number];

b = ["z", 1];
b = [1, "z"]; // error

// void

function Hello(): void {
  console.log("Hello");
}

// never 끝나지 않거나 에러를 다루는 함수에 never를 많이 사용합니다
function Error(): never {
  throw new Error();
}

function loof(): never {
  while (true) {
    console.log("loop!");
  }
}

// enum
enum Os {
    ios= 'ios',
    window = 'win',
    Android= 'and'
}

let myOs:Os;
myOs = Os.window;

// null undefined

let a:null=null;
let a:undefined=undefined;
```
