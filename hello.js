function createHelloWorld() {
  return function helloWorld() {
    return "Hello world";
  };
}

const result = createHelloWorld();

console.log(result);

let f = (function (a, b) {
  return a + b;
})(3, 4);

console.log(f);

//creating a function within  afunction

function funcA() {
  function funcB(a, b) {
    return a + b;
  }

  return funcB;
}

const t1 = funcA()

console.log(t1(1,4));

const h = (a, b) => a + b