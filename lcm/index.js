function gcd (a, b) {
    if (b === 0) return a;

    return gcd(b, a%b);
}

function lcm(a, b) {
    let result = Math.max(a, b);

    while (result%a !== 0 || result%b !== 0) {
        result++;
    }

    return result;
}

// a*b = gcd(a,b) * lcm(a, b)
function lcmOptimized(a, b) {
    return (a*b)/gcd(a,b);
}

console.log(lcm(2, 7));