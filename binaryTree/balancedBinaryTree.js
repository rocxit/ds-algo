const Node = require('./Node');

function height(root) {
    if (root === null) {
        return 0;
    }

    let leftHeight = 1 + height(root.left);
    let rightHeight = 1 + height(root.right);

    return leftHeight > rightHeight ? leftHeight : rightHeight;
}

function checkBalBinTree(root) {
    if (root === null) {
        return true;
    }

   let l = height(root.left);
   let r = height(root.right);

   return Math.abs(l - r) <= 1 && checkBalBinTree(root.left) && checkBalBinTree(root.right);

}

function isBalanced(root) {
    if (root === null) {
        return 0;
    }

    let leftHeight = height(root.left);

    if (leftHeight === -1) {
        return - 1;
    }
    let rightHeight = height(root.right);
    if (rightHeight === -1) {
        return -1;
    }

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
    } else {
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

const root = new Node(50);
root.left = new Node(25);
root.right = new Node(25);
root.left.left = new Node(12);
root.left.right = new Node(13);
root.right.left = new Node(11);
root.right.right = new Node(14);
root.right.right.right = new Node(14);
root.right.right.right.right = new Node(14);

console.log(checkBalBinTree(root));
console.log(isBalanced(root));