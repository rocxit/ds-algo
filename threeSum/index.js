function threeSum(arr, target) {
    let set = new Set();

    for (let i = 0 ; i < arr.length ; ++i) {
        set.add(arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        for (const val of set) {
            if (val !== arr[i] && set.has(target - val - arr[i])) {
                console.log(arr[i], val, target - val - arr[i]);
                break;
            }
        }
        break;
    }
}

let arr = [4, 6, 7, 1, 3, 10]
threeSum(arr, 11)