function missingNumber(arr) {
    let res = 0;

    for (let i = 0; i < arr.length; i++) {
        res = res ^ arr[i];
    }

    for (let i = 1; i <= arr.length + 1; i++) {
        res = res ^ i
    }

    return res;
}

console.log(missingNumber([1, 3, 5, 4, 6]));