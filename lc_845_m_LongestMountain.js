/*
845. 数组中的最长山脉
我们把数组 A 中符合下列属性的任意连续子数组 B 称为 “山脉”：

B.length >= 3
存在 0 < i < B.length - 1 使得 B[0] < B[1] < ... B[i-1] < B[i] > B[i+1] > ... > B[B.length - 1]
（注意：B 可以是 A 的任意子数组，包括整个数组 A。）

给出一个整数数组 A，返回最长 “山脉” 的长度。

如果不含有 “山脉” 则返回 0。

示例 1：

输入：[2,1,4,7,3,2,5]
输出：5
解释：最长的 “山脉” 是 [1,4,7,3,2]，长度为 5。
示例 2：

输入：[2,2,2]
输出：0
解释：不含 “山脉”。
 

提示：

0 <= A.length <= 10000
0 <= A[i] <= 10000
通过次数24,022提交次数59,266
*/

/*
* 234532463456983457693847569
* ////\\//\////\\///\/\/\/\//
*      6  4     7   5 3 3 3

  21223443343
  -\/-//-\-/\
     *  *** 3
c 11212311123

  2122344332343333
  -\/-//-\-/\/\---
     *  *** 3
c 1121231112345111


跟上一次峰值比较
  降的时候：
    如果有头
      山脉长度增1
    否则
      山脉长度重置为1
  升的时候：
    如果有头并且方向改变：
      结算
    否则：
      山脉长度增1
  平的时候：
    如果有头并且之前是下降
      结算
    重置山脉长度为1
    设置没有开头
*/


/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function (A) {
    let l = A.length
    let i = 0
    let longestLength = 0
    let preDirectionIsDown = false
    let mountainLength = 0
    // 标记是否已经有头，表示已经有过上升趋势
    let hasHead = false
    let pre
    let cur
    while (i < l) {
        cur = A[i]
        if (i > 0) {
            pre = A[i - 1]
            if (cur < pre) {
                if (hasHead) {
                    mountainLength++
                } else {
                    mountainLength = 1
                }
                preDirectionIsDown = true
            } else {
                if (cur > pre) {
                    if (hasHead && preDirectionIsDown) {
                        // 方向改变，结算
                        if (longestLength < mountainLength) {
                            longestLength = mountainLength
                        }
                        mountainLength = 2
                    } else {
                        mountainLength++
                    }
                    hasHead = true
                } else {
                    // 高度不变
                    if (hasHead && preDirectionIsDown) {
                        // 方向改变并且有山峰，结算
                        if (longestLength < mountainLength) {
                            longestLength = mountainLength
                        }
                    }
                    mountainLength = 1
                    hasHead = false
                }
                preDirectionIsDown = false
            }
            if (i == l - 1) {
                // 到尾端，判断是否应该结算
                if (hasHead && preDirectionIsDown) {
                    if (longestLength < mountainLength) {
                        longestLength = mountainLength
                    }
                }
            }
        } else {
            // 刚开始当前长度记录为1
            mountainLength = 1
        }
        i++
    }
    return longestLength
};

console.log(longestMountain('234532463456983457693847569'.split('').map(v => +v)))
console.log(longestMountain('21223443343'.split('').map(v => +v)))
console.log(longestMountain('2122344332343333'.split('').map(v => +v)))
/*
执行结果：
20201025 23:58
通过
显示详情
执行用时：96 ms , 在所有 JavaScript 提交中击败了58.54% 的用户
内存消耗：40.2 MB, 在所有 JavaScript 提交中击败了34.15%的用户
*/