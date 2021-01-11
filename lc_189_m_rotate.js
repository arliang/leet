/*
https://leetcode-cn.com/problems/rotate-array/
189. 旋转数组
给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:

输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
示例 2:

输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释: 
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
说明:

尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
要求使用空间复杂度为 O(1) 的 原地 算法。
通过次数208,861提交次数464,864
*/
var rotate = [
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    function (nums, k) {
        let a = nums.slice(nums.length - k, nums.length)
        let b = nums.slice(0, nums.length - k)
        return a.concat(b)
    },
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    function (nums, k) {
        while (k--) {
            nums.unshift(nums.pop())
        }
        return nums
    },
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    function (nums, k) {
        if (k > nums.length / 2) {
            k = nums.length - k
            while (k--) {
                nums.push(nums.shift())
            }
        } else {
            while (k--) {
                nums.unshift(nums.pop())
            }
        }
        return nums
    }
]

let arr = new Array(1024*10).fill(0).map((v, i) => v + i)
rotate.forEach((rotate, i) => {
    console.time(i)
    arr.forEach(offset =>
        rotate(Array.from(arr), offset)
    )
    console.timeEnd(i)
})