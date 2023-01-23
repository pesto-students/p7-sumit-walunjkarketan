// Exercise 3.1
const memoize = () => {
    let cache = {};

    return (num1, num2) => {
        const strKey = `${num1 + num2}`
        if (strKey in cache) {
            console.log('Fetching from cache');
            return cache[strKey];
        }
        else {
            console.log('Calculating result');
            let result = num1 + num2;
            cache[strKey] = result;
            return result;
        }
    }
}
// returned function from memoizedAdd
const emoizedAdd = memoize();
// console.log(emoizedAdd(9, 9)); // calculated
// console.log(emoizedAdd(9, 9)); // cached

//Exercise 3.2
// 3.2.1 bind example

let count = 0
function createIncrementBind() {
    count++
    console.log(`Count is ${count}`);
}

const bind = createIncrementBind.bind();
// bind();

// 3.2.2 call example

function incrementCall() {
    count++
    console.log(`Count is ${count}`);
}

// incrementCall.call();


// 3.2.3 apply example

function incrementApply() {
    count++
    console.log(`Count is ${count}`);
}

// incrementApply.apply();


// 3.4 

function createStack() {
    // Write your code here...
    let items = [];
    return {
        push(item){
            items.push(item);
        },
        pop(){
            return items.pop();
        }
    }
  }
  const stack = createStack();
  stack.push(10);
  stack.push(5);
  stack.pop(); // => 5
  console.log(stack.items); // => undefined



