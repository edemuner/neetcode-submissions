class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = Array.from(nums);
        for(let i = 0; i < nums.length; i++){
            const current = nums[i];
            ans.push(current);
        }
        return ans;
    }
}
