/*
1207. 独一无二的出现次数
给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。

如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。

 

示例 1：

输入：arr = [1,2,2,1,1,3]
输出：true
解释：在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。没有两个数的出现次数相同。
示例 2：

输入：arr = [1,2]
输出：false
示例 3：

输入：arr = [-3,0,1,-3,1,1,1,-3,10,0]
输出：true
 

提示：

1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000
通过次数40,505提交次数55,000
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    if(arr.length == 1){
        return true
    }
    let countList = {}
    for(let n of arr){
        countList[n] = (countList[n] || 0) + 1
    }
    let s = new Set()
    for(let k in countList){
        if(s.has(countList[k])){
            return false
        }
        s.add(countList[k])
    }
    return true
};
/*
执行用时：92 ms, 在所有 JavaScript 提交中击败了42.70%的用户
内存消耗：39.1 MB, 在所有 JavaScript 提交中击败了15.48%的用户
2020-10-29 02:32
*/