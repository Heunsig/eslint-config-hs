function foo() { return true; }
function bar() { return true; }


foo();
if (foo()) {
  bar();
} else {
  // baz();
}
