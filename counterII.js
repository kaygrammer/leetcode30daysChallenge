/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

// using functions
var createCounter = function (init) {
  let initialInit = init;
  return {
    increment: function increment() {
      return ++initialInit;
    },
    decrement: function decrement() {
      return --initialInit;
    },
    reset: function reset() {
      initialInit = init;
      return initialInit;
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

// using classes
class CreateCounter {
  constructor(init) {
    this.init = init;
    this.counter = init;
  }

  increment() {
    return ++this.counter;
  }
  decrement() {
    return --this.counter;
  }
  reset() {
    return this.init;
  }
}
