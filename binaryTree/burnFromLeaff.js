const Node = require('./Node');

class Distance {
    constructor(val) {
        this.val = val;
    }
}

let result = -1;

function burn(root, leaf, dist) {
    if (root === null) {
        return 0;
    }

    if (root.data === leaf) {
        dist.val = 0;
        return 1;
    }

    let lDist = new Distance(-1);
    let rDist = new Distance(-1);

    let lh = burn(root.left, leaf, lDist);
    let rh = burn(root.right, leaf, rDist);

    if (lDist.val !== -1) {
        dist.val = 1 + lDist.val;
        result = Math.max(result, lDist.val + rh);
    }

    if (rDist.val !== -1) {
        dist.val = 1 + rDist.val;
        result = Math.max(result, rDist.val + lh);
    }

    return Math.max(lh, rh)  + 1;
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);

burn(root, 70, new Distance(-1));
console.log(result);