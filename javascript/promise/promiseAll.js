/**
 * 手写 Promise.all() 
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 * 首先；解析 Promise.all() API
 * 接受参数是一个 promise 数组，.then() 的回调函数里的参数也是每个promise执行结果的数组，结果的顺序要和promise的顺序一致
 * 
 * 思路：
 * 1. 先判断参数是不是数组，不是数组抛出错误
 * 2. 接收的参数是可迭代的 promise 对象，可迭代就是用 Iterator 接口的就可以，可以是数组 Map Set
 * 2. Promise.all() 返回的是promise 实例
 * 3. promise 数组是同时开始执行的，但不一定是同时结束的，返回结果的顺序要和原顺序保持一致
 * 4. 要用一个当前执行第几个记住作为返回结果数组的下标
 * 5. 还有一个记录promise完成数量的标记，当有promise完成就+1，然后判断是否等于传入参数的长度，等于就 resolve() 出 执行结果
 * 
 * 参考：https://zhuanlan.zhihu.com/p/362648760
 * 
 */

Promise.all = function (params){
    
    return new Promise((resolve, reject) => {
        let promiseResult = [];
        let runCount = 0;  // 当前第几个
        let finishCount = 0;  // 执行完几个 promise

        for (const p of params) {
            let pIndex = runCount;
            runCount += 1;

            Promise.resolve(p).then((res) => {
                promiseResult[pIndex] = res;
                finishCount +=1;
                if(finishCount === params.length){  // 如果传进来的参数是 map 或者 set，就没有length属性了
                    resolve(promiseResult)
                }
            }).catch(err => {
                reject(err)
            });
        }

        if(runCount === 0 ){
            resolve(params)
        }
    })
}

function PromiseAll (params) {
    if(!Array.isArray(params)) {
        throw new Error('TypeError: params is not iterable')
    }
    return new Promise((resolve, reject) => {
        let promiseResult = [];
        let iterateIndex = 0; // 当前执行到第几个
        let fullFilledCount = 0; // fulFilled 状态的 promise 数量

        for (const p of params) {
            // for of 遍历顺序，用于返回正确顺序的结果
            // 因iterator用forEach遍历后的key 和value一样，所以必须存一份for of 的 iterateIndex
            let resultIndex = iterateIndex;
            iterateIndex += 1;
            // 包一层，以兼容非promise的情况
            Promise.resolve(p).then(value => {
                promiseResult[resultIndex] = value;
                fullFilledCount += 1;
                // Iterator 接口的数据无法单纯的用length或size来判断长度，不能局限Array或者 Map类型中
                if(fullFilledCount === iterateIndex) {
                    resolve(promiseResult);
                }
            }).catch(err => {
                reject(err)
            })
        }
        if(iterateIndex === 0) { 
            resolve(promiseResult)
        }
    })
}

// 测试一下
const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('p1')
    }, 3000)
})
const p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('p2')
    }, 2000)
})
const p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('p3')
    }, 1000)
})

PromiseAll([p1, p2, p3]).then((value) => {
    console.log(value)
})

Promise.all([p1, p2, p3]).then(value => {
    console.log(value)
})

// PromiseAll(p1).then(v => {console.log(v)}).catch(err => {console.error(err)})
// Promise.all(p1).then(v => {console.log(v)}).catch(err => {console.error(err)})