function createCounter(n) {
    return function count(){
        return n++
    }
}

const counter = createCounter(10)
console.log(counter());
console.log(counter());
console.log(counter());


// contains three function(increament, decrement, rest)
//return an object of increament, decrement, rest

function createCounter2(){

}