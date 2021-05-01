/*
 * @lc app=leetcode id=709 lang=cpp
 *
 * [709] To Lower Case
 */

// @lc code=start
class Solution
{
public:
    string toLowerCase(string str)
    {
        for (char &c : str)
        {
            if (c >= 'A' && c <= 'Z')
                c += 32;
        }
        return str;
    }
};
// @lc code=end
