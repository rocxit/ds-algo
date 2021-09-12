function isPrime(n) {
    if (n === 1) return false;

    if (n === 3 || n === 2) return true;
    if (n % 2 === 0 || n % 3 === 0 ) {
        return false;
    }

    for (let i = 5; i*i <= n ; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false; 
    }

    return true;
}

// 1st solution
function primeFactor(n) {
    const res = [];
    for (i = 2 ; i <= n ; ++i) {
        if (isPrime(i)) {
            let x = i;
            while (n % x === 0) {
                res.push(i);
                x = x * i;
            }
        }
    }

    return res;
}

// 2nt solution
function primeFactorEfficient(n) {
    if (n <= 1) return;
    
    for (let i = 2; i*i <= n; i++) {
        while ( n % i === 0) {
            console.log(i);
            n = n / i;
        }
    }

    if(n > 1) {
        console.log(n);
    }
}

// 3rd solution
function primeFactorMoreEfficient(n) {
    if (n <= 1) return;
    
    for (let i=2 ; i <=3 ; ++i) {
        while ( n % i === 0) {
            console.log(i);
            n = n / i;
        }
    } 

    for (let i = 5; i*i <= n; i = i+6) {
        while ( n % i === 0) {
            console.log(i);
            n = n / i;
        }

        while ( n % (i+2) === 0) {
            console.log(i);
            n = n / (i+2);
        }
    }

    if(n > 3) {
        console.log(n);
    }
}
console.log(primeFactor(512));