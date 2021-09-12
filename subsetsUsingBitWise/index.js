function subSet(str) {
    str = str.split('');
    console.log(str);
    let subSet = '';
    let n = str.length;
    let powerSize = Math.pow(2 ,n);
    for (let i = 0; i < powerSize; i++) {
        for (let j = 0; j < n; j++) {
            if ((i & (1 << j)) !== 0) {
                subSet = subSet + str[j];
            }
        }
        console.log(subSet);
        subSet = '';
    }
}

subSet('abcd')