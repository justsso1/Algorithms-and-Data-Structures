/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let l = 0, right = 0;
    let m = new Map();
    let maxLength = 0;

    while (right < s.length) {

        if (!m.has(s[right])) {
            m.set(s[right], right)
            right++
        } else {
            maxLength = Math.max(right - l, maxLength)

            let index = m.get(s[right]);
            l = index + 1
            right = l
            m.clear()
        }
    }
    maxLength = Math.max(right - l, maxLength)

    return maxLength

};
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("   "))
console.log("  4  ".length)

// 方法二：
function lengthOfLongestSubstring2(s: string): number {
    let left = 0;
    let right = 0;
    let max = 0;
    const map = new Map();
  
    while (right < s.length) {
      if (!map.has(s[right])) {
        map.set(s[right], right);
        right++;
      } else if (map.has(s[right]) && map.get(s[right]) >= left) {
        // 在 子字符串中
        max = Math.max(max, right - left);
        left = map.get(s[right]) + 1; // left 指向 命中的值 的 后一个
        map.set(s[right], right);
        right++;
      } else {
        // 不在子字符串中，就添加进 map
        map.set(s[right], right);
        right++;
      }
    }
    max = Math.max(max, right - left);
    return max;
  }

  // Case 1
const s1 = "abcabcbb";
console.log(lengthOfLongestSubstring2(s1));

// Case 2
const s2 = "bbbbb";
console.log(lengthOfLongestSubstring2(s2));

// Case 3
const s3 = "pwwkew";
console.log(lengthOfLongestSubstring2(s3));

const s4 = "aab";
console.log(lengthOfLongestSubstring2(s4));


function lengthOfLongestSubstring3(s: string): number {
    let left = 0;
    let right = 0;
    let max = 0;
    // map 只是做一个不重复的存储，里面的字母不一定是连续的了
    const map = new Map();
  
    while (right < s.length) {
      if (!map.has(s[right])) {
        // 不在子串中
        map.set(s[right], right);
        right++;
      } else if (map.has(s[right]) && map.get(s[right]) >= left) {
        // 在子串中
        max = Math.max(max, right - left);
        // 关键在这里，left 置为重复的下标的后一个，map慢慢往后移动
        left = map.get(s[right]) + 1;
        map.set(s[right], right);
        right++;
      } else {
        // 相当于不在子串中
        map.set(s[right], right);
        right++;
      }
    }
  
    max = Math.max(max, right - left);
    return max;
  }
  