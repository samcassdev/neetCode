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
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root) return 1;
        let heightL = isBalanced(root.left);
        let heightR = isBalanced(root.right);
        if (heightL === false || heightR === false) return false;
        if (Math.abs(heightL = heightR) > 1) return false;
        return Math.max(heightL, heightR) + 1;
    }
}
