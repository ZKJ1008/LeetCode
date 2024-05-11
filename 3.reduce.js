/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    let prv = init
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        prv = fn(prv, cur)
    }
    return prv
};

// var reduce = function(nums, fn, init) {
//     if(nums.length==0){
//         return init
//     }
//     let val = init
//     for(let i of nums){
//         val = fn(val,i)
//     }
//     return val
// };


console.log(reduce([], (prv, cur) => 0, 25));