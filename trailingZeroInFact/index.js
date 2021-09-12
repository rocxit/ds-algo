function trailingZeroInFact(n) {
    let count = 0;
    for (i = 5 ; i <= n ; i = i*5) {
        count = count + Math.floor(n/i)
    }

    return count;
}

// function trailingZerosByFact(n) {
//     let fact = BigInt(1);

//     for (let i = 2 ; i <= n ; ++i) {
//         fact = fact * BigInt(i);
//     }

//     count = 0;

//     while (fact % 10n == 0) {
//         count++;
//         fact = fact/10n;
//     }

//     return count;
// }

console.log(trailingZeroInFact(251));
console.log(trailingZerosByFact(225));