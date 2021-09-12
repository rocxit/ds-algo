// 1 st solution
function printDivisor(n) {
    for (i=1 ; i<n ; ++i) {
        if (n%i === 0) {
            console.log(i);
        }
    }
}

// 2nd solution

function printDivisorEff(n) {
    for (let i = 1; i*i < n; i++){
        if (n%i === 0) {
            console.log(i);

            if (n/i < n) {
                console.log(n/i);
            }
        }
    }
}

printDivisor(150)
printDivisorEff(150)