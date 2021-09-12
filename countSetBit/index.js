function getBaseLog(x, y) {
    return Math.log(x) / Math.log(y);
  }

function countSetBit(n) {
    let y = 0;
    let count = 0;

    while (n !== 0) {
        const x = Math.floor(getBaseLog(n, 2));
        const val = Math.pow(2, x);
        y += val;
        n = n - val;
        count++
    }

    console.log(count);
}

// 2nd sol
function countSetBit2nd(n) {
    let res = 0;

    while (n > 0) {

        // n % 2 !== 0 if last bit is one or (n & 1 === 1 )
        if (n % 2 !== 0) {
            res++;
        }

        n = n/2;
    }

    return res;
}

// Kerningam algo
function countSetBitKer(n) {
    let count = 0;

    while (n > 0) {
        n = n & (n - 1);
        count++;
    }

    return count;
}



countSetBit(13);