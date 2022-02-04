function checkTyped(name, typed, i, j) {

    if (i >= name.length && j >= typed.length) {
        return true;
    }

    if (name[i] === typed[j]) {
        return checkTyped(name, typed, i+1, j+1)
    }

    if (i > 0) {
        if (name[i-1] === typed[j]) {
            return checkTyped(name, i, j+1);
        }
    }

    return false;
}


function check(name, typed) {
    let j = 0;
    for (let i = 0; i < name.length ; i++) {
        if (name[i] == typed[j]) {
            j++;
        } else if (name[i-1] === typed[j]) {
            --i;
            ++j;
        } else {
            return false;
        }
    }

    return true;
}
