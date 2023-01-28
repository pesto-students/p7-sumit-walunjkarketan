// WEEK 5:
// Exercise 5.1

function* doTask1() {
    console.log(' before first yield')
    yield 'a'

    console.log(' before second yield')
    yield 'b'

    console.log(' before third yield')
    yield 'c'
}

let str = ''

function generate() {

    for (const value of doTask1()) {
        str = str + value
    }
    console.log(str)

}

generate()


function doTask2() {

    const strArray = ['a', 'b', 'c'];
    let str = ''

    for (let i in strArray) {
        str = str + strArray[i]
    }
    return str

}

async function asyncAwait() {

    const result = await doTask2()

    console.log(result)

}
asyncAwait()

// Exercise 5.2:

function isVowel(char) {

    return "aeiou".includes(char);

}

function vowelCount(str) {
    const vowelMap = new Map();
    for (let i in  str) {
        let lowerCaseChar = str[i].toLowerCase()

        if (isVowel(lowerCaseChar)) {
            if (vowelMap.has(i)) {

                vowelMap.set(i, vowelMap.size+1);

            } else {
                
                vowelMap.set(i, vowelMap.size+1);
            }
        }
    }
    return vowelMap;
}
console.log(vowelCount('aiedf'))

// Exercise 5.3:

const arr = [1,2,3,4,5,1]

const result  = new Set(
    arr.map(value =>{
        return value
    })
)

console.log(result)

const hasDuplicate = result.size !== arr.length
console.log('hasDuplicate    : '+hasDuplicate) 


