function isSparse(n) {
    while( n > 0) {
        if ((3 & n) === 3) {
            return 0;
        }
        
        n = n >> 1;
    }
    
    return 1;
}

console.log(isSparse(78));