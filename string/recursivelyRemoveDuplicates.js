function removeAdjacentDuplicates(str) {
    let removed = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            let j = i;
            while(str[i] === str[j]) {
                j++;
            }

            --j;
            str = str.replace(str.substring(i, j+1), "");
            removed = true;
           if (i > 0) {
            i = i - 2;
           }
        }
    }

    if(removed) {
        return removeAdjacentDuplicates(str);
    }

    return str;
}

console.log(removeAdjacentDuplicates('acaaabbbacdddd'));