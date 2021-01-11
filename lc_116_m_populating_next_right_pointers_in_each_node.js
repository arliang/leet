/*
116. 填充每个节点的下一个右侧节点指针
给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。

初始状态下，所有 next 指针都被设置为 NULL。

Example.
       1
      /  \
    2 --> 3
   / \    | \
 4 -> 5 -> 6 ->7


Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
 

提示：

你只能使用常量级额外空间。
使用递归解题也符合要求，本题中递归程序占用的栈空间不算做额外的空间复杂度。
*/

/**
 * 
 * @param {*} val 
 */

function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
};

/**
 * 
 * @param {Node} root 
 */
var connect1 = function(root) {
  var nodeList = travel(root, [], 0)
  let i = 0
  while(nodeList[i]){
    let j = 0
    while(nodeList[i][j]){
      nodeList[i][j].next = nodeList[i][++j] || null
    }
    i++
  }
  return root
};

var travel = function(node, nodeList, depth){
  console.log('t', node && node.value, depth, nodeList[depth] && nodeList[depth].reverse()[0])
  nodeList[depth] = nodeList[depth] || []
  nodeList[depth].push(node)
  node && node.left && travel(node.left, nodeList, depth + 1)
  node && node.right && travel(node.right, nodeList, depth + 1)
  return nodeList
}

// 运行慢
var connect_slow = function (root) {
  if(root){
    var nodeList = arguments[1] || []
    var depth = arguments[2] || 0
    if (nodeList[depth]) {
      nodeList[depth].next = root
    }
    nodeList[depth] = root
    root.next = null
    root.left && connect_slow(root.left, nodeList, depth + 1)
    root.right && connect_slow(root.right, nodeList, depth + 1)
  }
  return root
}

// 会变快？
var connect = function (root, nodeList = [], depth = 0) {
  if(root){
    if (nodeList[depth]) {
      nodeList[depth].next = root
    }
    nodeList[depth] = root
    root.next = null
    root.left && connect(root.left, nodeList, depth + 1)
    root.right && connect(root.right, nodeList, depth + 1)
  }
  return root
}

 // var connect = function (root) {
//   root = travel(root, [], 0)
//   return root
// };


// var travel = function (node, nodeList, depth) {
//   let next = null
//   if (!nodeList[depth]) {
//     nodeList[depth] = node
//   } else {
//     next = node
//   }
//   nodeList[depth].next = next
//   // nodeList[depth] = next
//   node && node.left && travel(node.left, nodeList, depth + 1)
//   node && node.right && travel(node.right, nodeList, depth + 1)
//   return node
// }

var head = {
  value: '1',
  left: {
    value: '2',
    left: {
      value: '4',
      left: null,
      right: null,
      // next: null
    },
    right: {
      value: '5',
      left: null,
      right: null,
      // next: null
    }
  },
  right: {
    value: '3',
    left: {
      value: '6',
      left: null,
      right: null,
      // next: null
    },
    right: {
      value: '7',
      left: null,
      right: null,
      // next: null
    }
  },
  next: null
}
// 输入 null 错误

// console.log(connect(head))
console.log(JSON.stringify(connect1(JSON.parse(JSON.stringify(head)))))
console.log(JSON.stringify(connect(JSON.parse(JSON.stringify(head)))))

// connect1 答案是错的，但leetcode判断结果是通过
