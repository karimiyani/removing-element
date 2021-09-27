const num = [10, 20, 30, 40];

// delete from end of array
const end = num.pop();
console.log(end);
// 40
console.log(num);
// *(3) [10, 20, 30]



// delete from first of array
const start = num.shift();
console.log(start);
// 10
console.log(num);
// *(2) [20, 30]


const num2 = [50, 60, 70, 80];
const middle = num2.splice(2, 2);
console.log(middle);
// [70, 80]
console.log(num2);
// *(2) [50, 60]

// (push, pop)   (shift, unshift)  (splice) they are (Mutation)  it means main data change.
