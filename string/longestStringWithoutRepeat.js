var NO_OF_CHARS = 256;
 
function longestUniqueSubsttr(str)
    {
        let n = str.length;
 
        let res = 0; // result
 
        // last index of all characters is initialized
        // as -1
        let lastIndex = new Array(NO_OF_CHARS).fill(-1); 
        // Initialize start of current window
        let i = 0;
 
        // Move end of current window
        for (let j = 0; j < n; j++) {
 
            // Find the last index of str[j]
            // Update i (starting index of current window)
            // as maximum of current value of i and last
            // index plus 1
            i = Math.max(i, lastIndex[str.charCodeAt(j)] + 1);
 
            // Update result if we get a larger window
            res = Math.max(res, j - i + 1);
 
            // Update last index of j.
            lastIndex[str.charCodeAt(j)] = j;
        }
        return res;
    }
 
    /* Driver program to test above function */
     
        let str = "geeksforgeeks";
        console.log("The input string is " + str);
        let len = longestUniqueSubsttr(str);
        console.log("The length of the longest non repeating character is " + len);
 