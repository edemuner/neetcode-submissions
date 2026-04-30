class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let placeIndex = 0;
        for (let i = 0; i < nums.length; i++){
            if(nums[i] != val){
                nums[placeIndex] = nums[i];
                placeIndex++;
            }
        }
        nums.length = placeIndex;
        return placeIndex;
    }
}
