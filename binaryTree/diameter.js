const Node = require('./Node');

let max = Number.MIN_VALUE;
function diameter(root) {
    if (root === null) {
        return 0
    }

    // if (root.left === null && root.right === null) {
    //     return 1;
    // }

    let left = diameter(root.left);
    let right = diameter(root.right);

    max = Math.max(max, 1 + left + right);

    return 1 + Math.max(left + right);

}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);

diameter(root);
console.log(max);