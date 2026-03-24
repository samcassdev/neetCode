/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth = function(root) {
        if(root === null) return 0
        return Math.max(maxDepth(root.left) +1, maxDepth(root.right) +1)
    }
};
