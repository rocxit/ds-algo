const Node = require('./Node');

function count(root) {
    let lh = 0;
    let rh = 0;

    let curr = root;

    while(curr) {
        curr = curr.left;
        lh++;
    }

    curr == root;

    while(curr) {
        curr = curr.right;
        rh++;
    }

    if(lh === rh) {
        return Math.pow(2, lh) - 1;
    }

    return 1 + count(root.left) + count(root.right);
}