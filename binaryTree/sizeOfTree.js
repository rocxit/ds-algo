const Node = require('./Node');

function getSize(root) {
   if (root === null) {
       return 0;
   }

   return 1 + getSize(root.left) + getSize(root.right);
}

function maximumOfBinaryTree(root) {
    if (root === null) {
        return -Infinity;
    }

    let leftSide = maximumOfBinaryTree(root.left);
    let rightSide = maximumOfBinaryTree(root.right);

    return Math.max(root.data, leftSide, rightSide);
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);

console.log(getSize(root));
console.log(maximumOfBinaryTree(root));
