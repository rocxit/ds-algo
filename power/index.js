function pow(x, n) {
    x = BigInt(x);
    let result = 1n;
    while (n > 0) {
        if (n % 2 !== 0) {
            result = result * x;
        }

        x = x * x;
        n = Math.floor(n/2);
    }

    console.log(result);
}

function pow2(x, n) {
    x = BigInt(x);
    let result = 1n;
    while (n > 0) {
        if (n % 2 !== 0) {
            result = result * x;
        }

        x = x * x;
        n = Math.floor(n/2);
    }

    console.log(result%1000000007n);
}

function pow3(x, n) {
    x = BigInt(x);
    let z = BigInt(x);
    let result = 1n;
    let run = Math.floor(n/2);
    while (run > 0) {
        if (run % 2 !== 0) {
            result = result * z;
        }

        z = z * z;
        run = Math.floor(run/2);
    }

    result = (result*result)%1000000007n;
    if (n%2 === 0) {
        console.log((result)%1000000007n);
    } else {
        console.log((x*result)%1000000007n)
    }
    // console.log(result%1000000007n);
}

console.log(pow2(361, 163))
console.log(pow3(361,163));
