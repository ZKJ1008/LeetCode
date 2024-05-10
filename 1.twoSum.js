// 题目描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */

const twoSum = (nums, target) => {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        } else {
            map.set(nums[i], i)
        }
    }
}

const nums = [2, 2, 3, 4, 5, 6]
const target = 8
console.log(twoSum(nums, target));