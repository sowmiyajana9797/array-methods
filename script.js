// Array Methods


// 1. concat:

var array1 = [6,7,8];
var array2 = [9,10,11];

console.log(array1.concat(array2));
 
// output
// [ 6, 7, 8, 9, 10, 11 ]


// 2. join:

let name = ["sowmi","sathya","ajitha"];

console.log(name.join("_"));

// output
// sowmi_sathya_ajitha

// 3. pop:

var array = ["sowmi","sathya"];
let arr2 = array.pop();
console.log(array);

// output
// [ 'sowmi' ]

// 4. push:

let number = [1,2,3,4];
let num = number.push(5,6);
console.log(number);

// output
// [ 1, 2, 3, 4, 5, 6 ]

// 5.fill:

let sen = ["hello","sowmiya"];
let sentence = sen.fill("positive");
console.log(sen);

// output
// [ 'positive', 'positive' ]

// 6.reverse:

let numbers = [445,677,990,34];
let wow = numbers.reverse();
console.log(numbers);

// output
// [ 34, 990, 677, 445 ]

// 7. shift:

let array = ["hii","no","yes"];
let arr = array.shift();
console.log(array);

// output
// [ 'no', 'yes' ]

// 8. unshift:

let word = ["Are","you","doing?"]; 
let wor = word.unshift("what");
console.log(word);

// output
// [ 'what', 'Are', 'you', 'doing?' ]

// 9.includes:

let inclu = [9,7,false];
console.log(inclu.includes(false));

// output
// true

// 10. at:

let praveen = ["bmw","audi","ford"];
console.log(praveen.at(2));

// output
// ford

// 11.indexof:

let sow = ["car","bike","lorry"];
console.log(sow.indexOf('bike'));

// output
// 1

// 12.entries:

let maha = ["a","b","c"];
const iterator = maha.entries();
console.log(iterator);

// output
// Object [Array Iterator] {}

// 13.tostring:

let kam = ["html","css","js","react"];
console.log(kam.toString());

// output
// html,css,js,react

// 14. valueof:

let sath = [1,2,3,4,5,6,7,8];
console.log(sath.valueOf());

// output
// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
//   ]