const Node = require('./Node');

function height(root) {
    if (root === null) {
        return 0;
    }

    let lHeight = height(root.left);
    let rHeight = height(root.right);

    return lHeight > rHeight ? lHeight + 1: rHeight + 1;
}


const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);

console.log(height(root));