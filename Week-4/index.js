
// WEEK 4
// Exercise4.1:

function getNumber() {
    return new Promise((res, rej) => {
        const randomNumber = parseInt(Math.random() * 100, 10)
        setTimeout(() => {
            if (randomNumber % 5 === 0) {
                rej(`Rejected with number ${randomNumber}`)
            }
            res(`Resolved with number ${randomNumber}`)

        }, randomNumber * 10)
    })

}
// getNumber().then((result) => {
//     console.log(result)
// })

// Exercise4.2:

var Person = function () { };

Person.prototype.initialize = function (name) {
    this.name = name;
}


var teacher = function () {}

teacher.prototype = new Person();

teacher.prototype.teach = function (subject){
    console.log(` ${this.name} is now teaching ${subject} `)
}

var call = new teacher();
call.initialize("ketan")
call.teach('chemistry')


// Exercise 4.3:

const fib =  (n) => ({
    n:5,
    [Symbol.iterator] : function () {
        let i = 1;
        let old =0, latest = 0
        return {
            next: () => {
                if(i++ <= n){
                    [old, latest] = [latest ,(old + latest) || 1]
                    return { value: old, done: false}
                }else{
                    return {done :true}
                }
            }
        }
    }


})

for(let num of fib(6)){
    console.log(num)
}