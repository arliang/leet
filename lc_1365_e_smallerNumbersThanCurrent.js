/*
1365. 有多少小于当前数字的数字
给你一个数组 nums，对于其中每个元素 nums[i]，请你统计数组中比它小的所有数字的数目。

换而言之，对于每个 nums[i] 你必须计算出有效的 j 的数量，其中 j 满足 j != i 且 nums[j] < nums[i] 。

以数组形式返回答案。

 

示例 1：

输入：nums = [8,1,2,2,3]
输出：[4,0,1,1,3]
解释： 
对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。 
对于 nums[1]=1 不存在比它小的数字。
对于 nums[2]=2 存在一个比它小的数字：（1）。 
对于 nums[3]=2 存在一个比它小的数字：（1）。 
对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。
示例 2：

输入：nums = [6,5,4,8]
输出：[2,1,0,3]
示例 3：

输入：nums = [7,7,7,7]
输出：[0,0,0,0]
 

提示：

2 <= nums.length <= 500
0 <= nums[i] <= 100
通过次数29,452提交次数35,963
*/

const { count } = require("console");

/*
* 1,2,2,4,2,3,2,4,2,3,4,4,4
4                         8
4                       8
4                     8
3       8       8   6
2       7   6   7 1
4               6
2       6   5 1
3       5   4
2       4 1
4       3
2     1
2   1
1 0
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let countList = nums.reduce((result, num) => {
        result[num] = (result[num] || 0) + 1
        return result
    }, {})
    // console.log(countList)
    let smallCount = {}
    for (let key in countList) {
        smallCount[key] = 0
        for (let num in countList) {
            if (+key > +num) {
                smallCount[key] += countList[num]
            }
        }
    }
    return nums.map(v => smallCount[v])
};
/*
执行结果：通过
显示详情 https://leetcode-cn.com/submissions/detail/118594519/
执行用时：116 ms, 在所有 JavaScript 提交中击败了43.65%的用户
内存消耗：42 MB, 在所有 JavaScript 提交中击败了15.80%的用户
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent2 = function (nums) {
    let size = nums.length
    let result = new Array(size)
    let countList = {}
    let indexList = {}
    let i = 0
    while(i < size){
        if(nums[i] in countList){
            countList[nums[i]] ++
            indexList[nums[i]].push(i)
        } else {
            countList[nums[i]] = 1
            indexList[nums[i]] = [i]
        }
        i++
    }
};

console.log(smallerNumbersThanCurrent([1, 2, 2, 4, 2, 3, 2, 4, 2, 3, 4, 4, 4]))
console.log(smallerNumbersThanCurrent([5, 0, 10, 0, 10, 6])) // [2,0,4,0,4,3]
console.log(smallerNumbersThanCurrent2([1, 2, 2, 4, 2, 3, 2, 4, 2, 3, 4, 4, 4]))