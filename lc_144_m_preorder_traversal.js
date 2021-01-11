/*
144. 二叉树的前序遍历
给定一个二叉树，返回它的 前序 遍历。

 示例:

输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [1,2,3]
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

通过次数213,520提交次数312,977
https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
20201027 2211
*/

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let result = []
    walk(root, result)
    return result
};

function walk(root, result) {
    if (root) {
        if (root.val) {
            result.push(root.val)
        }
        walk(root.left, result)
        walk(root.right, result)
    }
}

var preorderTraversal = function (root) {
    let result = [], stack = []
    while(root || stack.length){
        result.push(root.val)
        root.right && stack.push(root.right)
        root = root.left || stack.pop()
    }
    return result
};
/*
https://leetcode-cn.com/submissions/detail/119087508/
20201027 22:35
执行用时：76 ms, 在所有 JavaScript 提交中击败了93.69%的用户
内存消耗：37.8 MB, 在所有 JavaScript 提交中击败了15.37%的用户
*/