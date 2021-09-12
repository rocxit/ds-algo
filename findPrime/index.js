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


function findPrime(n) {
    const isPrime = new Array(n+1).fill(true);

    for (let i = 2 ; i*i <= n ; ++i) {
        if (isPrime(i)) {
            for (let j = i*2; j <= n; j = j + i){
                isPrime[j] = true;
            }
        }
    }

    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            console.log(i);
        }
    }
}

function findPrimeEff(n) {
    const isPrime = new Array(n+1).fill(true);

    for (let i = 2 ; i*i <= n ; ++i) {
        if (isPrime(i)) {
            for (let j = i*i; j <= n; j = j + i){
                isPrime[j] = true;
            }
        }
    }

    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            console.log(i);
        }
    }
}


function findPrimeEfff(n) {
    const isPrime = new Array(n+1).fill(true);

    for (let i = 2 ; i <= n ; ++i) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}