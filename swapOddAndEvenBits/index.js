function swapBits(n) {
    let evenBits = 0xAAAAAAAA & n;
    let oddBits = 0x55555555 & n;
    
    evenBits >>= 1;
    oddBits <<= 1;
    
    return evenBits | oddBits;
}