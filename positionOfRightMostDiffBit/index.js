function posOfRightMostDiffBit(m, n) {
    let i = 1;
    
    while (((m & (1 << i -1)) ^ (n & (1 << i -1))) === 0 && i++);
    
    return i;
}

console.log(posOfRightMostDiffBit(11, 9));