function reverseWord(str) {
    let words = str.split(" ");

    let i = 0;
    let j = words.length-1;

    while (i < j) {
        let temp = words[i];
        words[i] = words[j];
        words[j] = temp;
        i++;
        j--;
    }

    return words.toString().replace(/,/g, " ");
}

console.log(reverseWord("i like this program very much"));