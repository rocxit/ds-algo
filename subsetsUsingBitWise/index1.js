function printSubset(str, base, start, n) {
    for (i = start+1 ; i <= n ; ++ i) {
        console.log(str[base] +str.slice(start, i));
    }
}

function subset(str, n) {
    for (let i = 0; i < n; i++) {
        console.log(str[i]);
        for (let j = i + 1; j < str.length; j++) {
            printSubset(str, i, j, n);
        }
    }
}

subset('abcd', 4)