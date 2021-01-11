/*
https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
129. 求根到叶子节点数字之和
给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。

例如，从根到叶子节点路径 1->2->3 代表数字 123。

计算从根到叶子节点生成的所有数字之和。

说明: 叶子节点是指没有子节点的节点。

示例 1:

输入: [1,2,3]
    1
   / \
  2   3
输出: 25
解释:
从根到叶子节点路径 1->2 代表数字 12.
从根到叶子节点路径 1->3 代表数字 13.
因此，数字总和 = 12 + 13 = 25.
示例 2:

输入: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
输出: 1026
解释:
从根到叶子节点路径 4->9->5 代表数字 495.
从根到叶子节点路径 4->9->1 代表数字 491.
从根到叶子节点路径 4->0 代表数字 40.
因此，数字总和 = 495 + 491 + 40 = 1026.
通过次数44,476提交次数68,179
*/

/*
    4
   / \
  9   0
 / \
5   1
|
3

4
  40+9
    490+5
      4950+3
    490+1
  40
r = 5484
*/

/** Definition for a binary tree node.
 * @param {number} val node value
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} [root.left]
 * @param {TreeNode} [root.right]
 * @param {number} [root.val]
 * @return {number}
 */
var sumNumbers = function (root) {
  let tmp = root
  let pSum = 0  // 父节点sum
  let sum = 0   // 结果
  let stack = [] // [ [rightNode, pSum], ... ]
  while (tmp) {
    pSum = pSum * 10 + tmp.val
    if (tmp.left && tmp.right) {
      stack.push([tmp.right, pSum]) // 将右节点跟父节点sum推入栈
      tmp = tmp.left
    } else {
      tmp = tmp.left || tmp.right
      if (!tmp) {
        sum += pSum // 没有子节点了，累计当前pSum值
        if (stack.length) { // 栈中还有数据则弹出
          [tmp, pSum] = stack.pop()
        }
      }
    }
  }
  return sum
};

console.log(sumNumbers({
  val: 4,
  left: {
    val: 9,
    left: { val: 5, left: { val: 3 } },
    right: { val: 1 }
  },
  right: {
    val: 0
  }
}))

/*
执行结果：
通过显示详情执行用时：120 ms, 在所有 JavaScript 提交中击败了7.43%的用户
内存消耗：39.8 MB, 在所有 JavaScript 提交中击败了5.74%的用户
*/