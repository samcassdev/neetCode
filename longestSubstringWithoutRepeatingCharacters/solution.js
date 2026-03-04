class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longestString = 0;
        let set = new Set();

        let left = 0;
        let right = 0;

        while(right < s.length){
            let letter = s[right];

            if(!set.has(letter)){
                set.add(letter);
                longestString = Math.max(longestString, set.size);
                right++;
            } else {
                set.delete(s[left]);
                left++
            }
        }
        return longestString;
    }
}
