function debounce(fn) {
    let timeOut;

    return function (...args) {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            fn(...args)
        }, 3000);
    }
}

function test() {
    console.log("Hello");
}

const testDebounce = debounce(test);

testDebounce();
testDebounce();
testDebounce();

