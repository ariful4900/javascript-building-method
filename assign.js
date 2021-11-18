const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

console.log(target);

const returnedTarget = Object.assign(source, target);

console.log(target);

console.log(returnedTarget);
