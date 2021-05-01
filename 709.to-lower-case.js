/*
 * @lc app=leetcode id=709 lang=javascript
 *
 * [709] To Lower Case
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
    let res = "";

    for (let i = 0; i < str.length; i++) {
        let ascii = str.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90) res += String.fromCharCode(ascii + 32);
        else res += str.charAt(i);
    }

    return res;
};
// @lc code=end

