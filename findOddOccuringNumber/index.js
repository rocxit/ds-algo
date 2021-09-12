function findOddOccuringNumber(arr) {
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        res = res ^ arr[i];
    }

    return res
}

console.log(findOddOccuringNumber([8, 7, 7, 8, 9, 10]));