var nums = [3, 2, 4]
var target = 6

var hi = function (nums, target) {
    let ans = []

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                ans = [i, j]
                return ans
            }
        }
    }

    return nums;
}

console.log(hi(nums, target))
