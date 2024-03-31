setTimeout(() => {
  console.log(1);
}, 0);

const promise = new Promise((resolve, reject) => {
  console.log(2);
  reject(3);
  console.log(4);
});

promise
  .then(() => console.log(5))
  .catch(() => console.log(6))
  .then(() => console.log(7))
  
  .catch(() => console.log(8))
  .then(() => console.log(9));

console.log(10);

// 2
// 10
// 8
// 1

// const fn = (...args) => {
//     let strArr = args[0];
//     let otherNums = args.slice(1);
//     return strArr.reduce((pre, curr, index) => {
//         if (index < otherNums.length) {
//             pre = pre + "" + curr + otherNums[index];
//         }
//         return pre;
//     }, '');

// //   for (const arg of args) {
// //     console.log(arg);
// //   }
// };
// const [a, b] = [1, 2];
// console.log(fn`${a} + ${b} = ${a + b}`);


// expect(fn`${a} + ${b} = ${a + b}`).toEqual('1 + 2 = 3')