/*
 * @lc app=leetcode id=1108 lang=javascript
 *
 * [1108] Defanging an IP Address
 */

// @lc code=start
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
    function replaceAll(str, match, replacement) {
        return str.replace(new RegExp(escapeRegExp(match), 'g'), () => replacement);
    }

    return replaceAll(address, ".", "[.]");
};
// @lc code=end

