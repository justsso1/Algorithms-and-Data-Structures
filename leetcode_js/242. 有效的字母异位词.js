/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//思路： 利用26个英文字符，维护一个26长度的数组，第一个字符串中遇到的字符，相应位置+1，第二个字符串遇到的字符，相应位置-1.
//最后判断，26长度的数组，每一个是否为0，返回true；否则返回false
var isAnagram = function (s, t) {
    let str = 'abcdefghijklmnopqrstuvwxyz';
    let arr = new Array(26)
    arr.fill(0, 0)
    let i = 0
    while (i < s.length || i < t.length) {
        if (s[i] && str.indexOf(s[i])!==-1) {
            arr[str.indexOf(s[i])] = arr[str.indexOf(s[i])] + 1
        }
        if (t[i] && str.indexOf(t[i])!==-1) {
            arr[str.indexOf(t[i])] = arr[str.indexOf(t[i])] - 1
        }
        i++
    }

    i = 0
    while (i < arr.length) {
        if (arr[i] !== 0) {
            return false
        }
        i++
    }

    return true
};

let s = 'aa'
let t = 'a';

console.log(isAnagram(s, t))

function isAnagram2(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    const str = 'abcdefghijklmnopqrstuvwxyz';
    let obj = {};
    str.split('').forEach(s => {
        obj[s] = 0
    });
    for(let i = 0; i < s.length; i++){
        obj[s[i]]++;
        obj[t[i]]--;
    }
    return Object.values(obj).every(item => item ===0)
}

const s2 = "anagram", t2 = "nagaram";
const s3 = 'rat', t3 = 'car';
console.log(isAnagram2(s2, t2));
console.log(isAnagram2(s3, t3));