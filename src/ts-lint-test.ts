function foo<T>() { return true; }
function bar() { return true; }

const a = 1;
const b = 2;
const c = 3;
const d = 4;
let ddd = a && b < 0 || c > 0 || d + 1 === 0;
let ccc = a + b * c;

foo<any>();
if (foo()) {
  bar();
} else {
  baz();
}


interface Bar {
  name: string;
  greet: () => string;
}


type Test = {
  name: string,
  age: number,
};
