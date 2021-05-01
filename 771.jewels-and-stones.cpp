#include <iostream>
#include <algorithm>
using namespace std;

/*
 * @lc app=leetcode id=771 lang=cpp
 *
 * [771] Jewels and Stones
 */

// @lc code=start
class Solution
{
public:
    int numJewelsInStones(string jewels, string stones)
    {
        int num = 0;
        for (int i = 0; i < jewels.size(); i++)
        {
            num += count(stones.begin(), stones.end(), jewels[i]);
        }
        return num;
    }
};
// @lc code=end
int main()
{
    Solution ob;

    string jewels = "aA", stones = "aAAbbbb";

    int answer = ob.numJewelsInStones(jewels, stones);
    cout << answer << endl;
}
