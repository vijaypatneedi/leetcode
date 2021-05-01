/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let hashMap = {}, ans = 0
    for (const c of jewels) {
        hashMap[c] = 1
    }
    for (const c of stones) {
        if (hashMap[c]) ans++
    }
    return ans
};
// @lc code=end

let jewels = "aA", stones = "aAAbbbb";
let answer = numJewelsInStones(jewels, stones);
console.log(answer)

