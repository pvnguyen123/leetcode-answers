
let solution = (time) => {
    let arr = new Array(60).fill(0)

    time.forEach(element => {
        arr[element % 60] += 1
    });

    let acc = 0
    for (let i = 1; i < 30; i++) {
        let lookup = 60 - i 
        acc += arr[i] * arr[lookup]
    }

    return acc + comb2(arr[0]) + comb2(arr[30])
}


let comb2 = (n) => {
    if( n < 2 ) return 0
    return n * (n-1) / 2
}

// let factorial = (n) => {
//     let value = 1
//     for (let i= 1; i <= n; i++) {
//         value *= i
//     }
//     return value
// }
/** NOTES 
(a + b) % 60 = 0

1. Create table with index 0 -> 59 and count
2. Loop through time list and count matching value

** Careful to not double count pairs such as 30 + 30, 0 +0

**/
console.log(comb2(351));

console.log("1010. Pairs of Songs With Total Durations Divisible by 60");
console.log(solution([30,20,150,100,40]));