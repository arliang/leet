/*
https://leetcode-cn.com/problems/partition-labels/
763. 划分字母区间
字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。

示例 1：

输入：S = "ababcbacadefegdehijhklij"
输出：[9,7,8]
解释：
划分结果为 "ababcbaca", "defegde", "hijhklij"。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
 

提示：

S的长度在[1, 500]之间。
S只包含小写字母 'a' 到 'z' 。
通过次数25,165提交次数34,119
*/

/**
 * @param {string} S
 * @return {number[]}
 * @example
 * _ 1234567890ABCDEFGHIJKLMN
 * _ ababcbacadefegdehijhklij
 * l                      L
 * k                     K
 * j                   I    N
 * i                  H    M
 * h                 G  J
 *                  *
 * g              D
 * f            B
 * e             C  F
 * d          0    E
 *           *
 * c     5  8 
 * b  1 3 6 
 * a 0 2   7 9
 */
var partitionLabels = function (S) {
  let bounds = []
  let idx = { length: 0 }
  let len = S.length
  let i = 0
  // 整理边界信息并排序
  while (i < len) {
    if (S[i] in idx) {
      bounds[idx[S[i]]][1] = i
    } else {
      idx[S[i]] = idx.length++
      bounds[idx[S[i]]] = [i, i]
    }
    i++
  }
  return bounds.reduce(merge, [[0, 0]]).map(([a, b]) => b - a + 1)
};

// 合并边界数组
var merge = function (r, b) {
  let a = r[r.length - 1]
  // a  a
  //      b  b
  if (a[1] < b[0]) {
    // r[r.length - 1] = a
    // r.push(b)
    r[r.length] = b
    // a     a
    //   b  b
    // } else if (b[1] < a[1]) {
    //   r[r.length - 1] = a
    // a     a
    //   b     b
  } else if (b[1] > a[1]) {
    // r[r.length - 1] = [a[0], b[1]]
    r[r.length - 1][1] = b[1]
  }
  return r
}

console.log(JSON.stringify(partitionLabels('ababcbacadefegdehijhklij'), null, 2))