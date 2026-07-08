### call

call 메서드는 모든 함수에서 사용할 수 있으며, this를 특정 값으로 지정할 수 있습니다

### apply

apply는 함수 매개변수를 처리하는 방법을 제외하면 call과 완전히 같습니다 call은 매개변수를 직접 받고 apply는 배열로 받습니다

### bind

함수의 this 값을 영구적으로 바꿀 수 있습니다

```js
const Bae = {
  name: "Bae",
};

const Park = {
  name: "Park",
};

function showThisName() {
  console.log(this.name);
}

showThisName();
showThisName.call(Bae);
showThisName.call(Park);

function update(birthYear, job) {
  this.birthYear = birthYear;
  this.job = job;
}

update.call(Bae, 2008, "student");
console.log(Bae); // result = name: "Bae", birthYear: 2008, job: "student"

update.apply(Park, [2007, "student"]);
console.log(Park); // result = name: "Park", birthYear: 2007, job: "student"

const updateBae = update.bind(Bae);

updateBae(2000, "teacher");
console.log(Bae);
```
