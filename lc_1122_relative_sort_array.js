/*
1122. 数组的相对排序
给你两个数组，arr1 和 arr2，

arr2 中的元素各不相同
arr2 中的每个元素都出现在 arr1 中
对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。

 

示例：

输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
输出：[2,2,2,1,4,3,3,9,6,7,19]
 

提示：

arr1.length, arr2.length <= 1000
0 <= arr1[i], arr2[i] <= 1000
arr2 中的元素 arr2[i] 各不相同
arr2 中的每个元素 arr2[i] 都出现在 arr1 中
通过次数27,045提交次数40,122
https://leetcode-cn.com/problems/relative-sort-array/
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
'use strict'
var relativeSortArray = function (arr1, arr2) {
    let r = arr1.sort((a, b) => a - b)
    let s = new Set(arr2)
    let index = arr2.reduce((r, n, i) => {
        r[n] = i
        return r
    }, {})
    r = r.reduce(({ head, tail }, n) => {
        if (s.has(n)) {
            head[index[n]] = head[index[n]] || []
            head[index[n]].push(n)
        } else {
            tail.push(n)
        }
        return { head, tail }
    }, { head: [], tail: [] })
    r.head = r.head.reduce((r, i) => r.concat(i), [])
    return r.head.concat(r.tail)
};
/*
2020-11-14 11:50
执行用时：92 ms, 在所有 JavaScript 提交中击败了50.84%的用户
内存消耗：39.3 MB, 在所有 JavaScript 提交中击败了14.81%的用户
*/

console.log(relativeSortArray(
    [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    [2, 1, 4, 3, 9, 6]
), 'expect', [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19])
