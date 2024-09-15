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
- union
- intersetion

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

// union type

interface Car{
  name: "car";
  color: string;
  start(): void;
}

interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

function Getgift(gift: Car | Mobile){
  console.log(gift.color);
  if (gift.name==="Car"){
    gift.start();
  }else{
    gift.call();
  }
}
//intersection Type

interface Car{
  name: string;
  start(): void;
}
interface Toy{
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & car ={
  name: "타요",
  start(){},
  color: "blue",
  price: 10000
}
```
