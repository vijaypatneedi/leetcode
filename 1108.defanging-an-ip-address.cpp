
#include <iostream>
#include <algorithm>
#include <regex>
using namespace std;
/*
 * @lc app=leetcode id=1108 lang=cpp
 *
 * [1108] Defanging an IP Address
 */

// @lc code=start
class Solution
{
public:
    string defangIPaddr(string address)
    {
        return regex_replace(address, regex("[.]"), "[.]");
    }
};
// @lc code=end
int main()
{
    Solution ob;

    string address = "1.1.1.1";

    string answer = ob.defangIPaddr(address);
    cout << answer << endl;
}