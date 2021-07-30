// INPUTS

var l1 = [2, 4, 3]
var l2 = [5, 6, 4]

// FUNCTION

var addTwoNumbers = function (l1, l2) {
    let carry = false
    let ans = []
    let len = Math.max(l1.length, l2.length)

    // making l1 into num1
    for (let i = 0; i < len; i++) {
        ans[i] = l1[i] + l2[i]

        // +1 carrying
        if (carry) {
            ans[i]++
        }

        // carrying over
        if (ans[i] > 9) {
            ans[i] %= 10
            carry = true
        } else {
            carry = false
        }
    }

    return ans
}

// TESTS

console.log(addTwoNumbers(l1, l2))