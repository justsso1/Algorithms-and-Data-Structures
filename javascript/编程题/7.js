// 字节 云计算

setTimeout(() => {
  console.log(3)
  new Promise((resolve, reject) => {
      console.log(5)
      resolve()
  }).then(console.log(6))
}, 0)

setTimeout(() => {
  console.log(4)
}, 0)

new Promise((resolve, reject) => {
  console.log(1)
  resolve()
}).then(console.log(2))
