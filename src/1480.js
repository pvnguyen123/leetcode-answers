
let solution = (nums) => {
    let sum = 0
    nums.forEach((element, i) => {
        sum += element
        nums[i] = sum
    });
    return nums
}


console.log('1480. Running Sum of 1d Array')
console.log(solution([1,2,3]))