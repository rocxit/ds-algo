function factRec(n) {
    if (n===0 || n===1) {
        return 1;
    }

    return n*factRec(n-1);
}


function factIter(n) {
    let fact = 1;

    for (i=2 ; i<=n ; ++i)
        fact = fact*i;

    return fact;
}

console.log(factRec(5));