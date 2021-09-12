function palindrome(arr) {
    // compare 1st and last, second and second last and so on till middle don't overlap
    for (let i = 0, j = arr.length - 1 ; i < j ; ++i, --j)
        if (arr[i] !== arr[j]) return false;

    return true;
}


function palindromeNumber(num) {
    let temp = num;
    let rev = 0;

    // reverse the number
    while (temp != 0) {
        let ld = temp%10;
        rev = rev*10 + ld;
        temp = Math.floor(temp/10);
    }

    return rev === num

}
// console.log(palindrome([2,1]));

console.log(palindromeNumber(212212));