const Node = require('./Node');

function printNodeAtKDistance(root, k, level=0) {
    if (root === null) {
        return;
    }

    if (level === 2) {
        console.log(root.data);
        return;
    }

    printNodeAtKDistance(root.left, k, level + 1);
    printNodeAtKDistance(root.right, k, level + 1)
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);

printNodeAtKDistance(root, 2)