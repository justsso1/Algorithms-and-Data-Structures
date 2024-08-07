/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let i = 0, j = 0, re = 0, set = new Set()

    while (j < s.length) {
        j = i
        while (j < s.length && !set.has(s[j])) {
            set.add(s[j])
            j++
        }
        re = Math.max(j - i, re)
        set.clear()
        i++
    }
    return re
};
console.log(lengthOfLongestSubstring(''));
console.log("lengthOfLongestSubstring",lengthOfLongestSubstring("pwwkew"))
console.log("lengthOfLongestSubstring",lengthOfLongestSubstring("bbbbb"))
console.log("lengthOfLongestSubstring",lengthOfLongestSubstring("0"))
let set = new Set()
set.add(1).add(2).add(3)
set.delete(set.keys().next().value)
set.add(1)
// console.log(set)

/**
 * @param {string} s
 * @return {number}
 */

//滑动窗口
var lengthOfLongestSubstring2 = function (s) {
    let i = 0, j = 0, re = 0, set = new Set()

    while (j < s.length) {

        while (j < s.length && !set.has(s[j])) {
            set.add(s[j])
            j++
        }
        re = Math.max(j - i, re)
        set.delete(set.keys().next().value) // 删除set中的第一个字符
        i++
    }
    return re
}
console.log("lengthOfLongestSubstring2",lengthOfLongestSubstring2("pwwkew"))
console.log("lengthOfLongestSubstring2",lengthOfLongestSubstring2("bbbbb"))
console.log("lengthOfLongestSubstring2",lengthOfLongestSubstring2("0"))


//优化滑动窗口，找到被重复的值的下标；然后从下标之后再往后遍历
// !!! 用这个方法
let lengthOfLongestSubstring3 = function (s) {
    let l = 0, right = 0;
    let m = new Map();
    let maxLength = 0;

    while (right < s.length) {
        if (!m.has(s[right])) {
            m.set(s[right], right)
            right++;
        } else {
            maxLength = Math.max(right - l, maxLength);
            let index = m.get(s[right]);
            l = index + 1
            right = l
            m.clear()
        }
    }
    maxLength = Math.max(right - l, maxLength)
    return maxLength
}
console.log("lengthOfLongestSubstring3",lengthOfLongestSubstring3("pwwkew"));
console.log("lengthOfLongestSubstring3",lengthOfLongestSubstring3("bbbbb"))
console.log("lengthOfLongestSubstring3",lengthOfLongestSubstring3("0"))

function lengthOfLongestSubstring4(s){
    let left = 0;
    let set = new Set();
    let res = 0;
    for(let i = 0; i < s.length; i++){
        if(set.has(s[i])){
            set.delete(set.keys().next().value);
            left = left + 1;
        }
        set.add(s[i]);
        res = Math.max(res, i - left + 1);
    }
    return res;
}
console.log(lengthOfLongestSubstring4("pwwkew"));

var lengthOfLongestSubString5 = function(s){
    let left = 0;
    let right = 0;
    let m = new Map();
    let max = 0;
    while(right < s.length){
        if(!m.has(s[right])){
            m.set(s[right], right);
            right ++;
        }else{
            max = Math.max(max, m.size);
            let temp = m.get(s[right]);
            left = temp + 1;
            right = left;
            m.clear();

        }
    }
    max = Math.max(max, right - left);
    return max;
}