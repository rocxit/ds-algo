function deepClone(inObj) {
    let outObj;

    if (typeof inObj !== 'object' || inObj === null) {
        return inObj;
    }

    outObj = Array.isArray(inObj) ? [] : {};

    for (let key in inObj) {
        let val = inObj[key];

        outObj[key] = deepClone(val);
    }

    return outObj;
}

let arr = [ {
    a: 'abc',
    c: [{name: 'roshan'}]
}, {
    b: 'bcd'
}];

let obj = deepClone(arr)

obj[0].a = 'xyz'

console.log(obj);
console.log(arr);