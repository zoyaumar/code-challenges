/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (root)
        return path(root, targetSum) 
    else return false
};
function path(node, sum){
    if (!node.left && !node.right)
        return sum-node.val == 0

    if(node.left && path(node.left, sum - node.val))
        return true    
    if(node.right && path(node.right, sum - node.val))
        return true

    return false
}
