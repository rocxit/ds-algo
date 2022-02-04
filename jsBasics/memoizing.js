function memoize(func) {
    const map = new Map();

    return function(...args) {
        let key = JSON.stringify(args);
        
        if (map.has(key)) {
            return map.get(key);
        }

        let value = func(...args);
        map.set(key, value);

        return value;
    }
}

function add(val1, val2) {
    return val1 + val2;
}

const addMemo = memoize(add);

console.log(addMemo(2, 7));
console.log(addMemo(2, 8));
console.log(addMemo(2, 8));
console.log(addMemo(2, 7));