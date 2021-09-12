// Euclidean optimized solution
function gcd(a, b) {
     if (b === 0) {
         return a;
     }

     return gcd(b, a%b);
}

// Euclidean solution
function gcdEucl(a, b) {
    while (a !== b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }

    return a;
}

// Naive solution
// max GCD can only go upto min of give two number
function gcdNaive(a, b) {
    let result = Math.min(a, b);

    while (result > 0) {
        if (a % result === 0 && b % result === 0) {
            return result;
        }

        result--;
    }

    return result;
}

console.log(gcd(200, 130));
console.log(gcdNaive(7, 130));