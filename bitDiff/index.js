function bitDiff(a, b) {
    let count = 0;
       
    while (a !== 0 || b !== 0) {
        if (((1 & a) ^ (1 & b)) !== 0) {
            count++;
        }
        
        a = a >> 1;
        b = b >> 1;
    }
    
    return count;
}

console.log(bitDiff(20, 25));