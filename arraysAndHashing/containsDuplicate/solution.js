class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const count = {};
        for(let num of nums){
            count[num] = count [num] + 1 || 1;
            if(count[num] >= 2){
                return true
            }
        }
        return false
    }
}
