function throttle(fn, delay) {
    let prevTime = false;

    return function(...args) {
        const now = new Date().getTime();

        if (now - prevTime > delay) {
            prevTime = now;
            fn(...args);
        }
    }
}