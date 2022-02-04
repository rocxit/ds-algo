let dynArray;
function isPilindrome(i, j, str) {
    if (i === j) {
        dynArray[i][j] = true;
        return true;
    }

    if (dynArray[i][j] !== -1) {
        return dynArray[i][j];
    }
    
    if(dynArray[i][j] === -1) {
        if (str[i] === str[j]) {
            if (i+1 <= j-1) {
                dynArray[i][j] = isPilindrome(i+1, j-1, str);
                return dynArray[i][j]
            } else {
                dynArray[i][j] = true;
                return true
            }
        } else {
            dynArray[i][j] = false;
            return false;
        }
    }
}

function solution(str) {
    dynArray = new Array(str.length).fill(0).map(() => new Array(str.length).fill(-1));

    for (let i = 0; i < str.length; i++) {
        for (let j = i+1; j < str.length; j++) {
            if (isPilindrome(i, j, str)) {
                console.log(str.slice(i, j+1));
            }
        }
    }
}

solution('abaceeceedad');