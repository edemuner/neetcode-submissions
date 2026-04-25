class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let currentStreak = 0;
        let consecutiveMax = 0;
        for (let num of nums){
            currentStreak = num === 1 ?
                currentStreak + 1 :
                0;
            
            consecutiveMax = currentStreak > consecutiveMax ?
                consecutiveMax + 1 :
                consecutiveMax;
        }

        return consecutiveMax;
    }
}
