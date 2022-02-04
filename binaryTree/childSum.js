const Node = require('./Node');

// function childSum(root) {
//     if (root === null) {
//         return 0;
//     }

//     let leftVal = childSum(root.left);
//     let rightVal = childSum(root.right);

//     if ((root.data === leftVal + rightVal) || (leftVal === 0 && rightVal === 0)) {
//         return root.data;
//     } else {
//         return false;
//     }
// }

function childSum(root) {
    if (root === null) {
        return true;
    }

    if (root.left === null && root.right === null) {
        return true;
    }

    let sum = 0;

    if (root.left) {
        sum += root.left.data;
    }

    if (root.right) {
        sum += root.right.data;
    }

    return root.data === sum && childSum(root.left) && childSum(root.right);
}

const root = new Node(50);
root.left = new Node(25);
root.right = new Node(25);
root.left.left = new Node(12);
root.left.right = new Node(13);
root.right.left = new Node(11);
root.right.right = new Node(14);

console.log(childSum(root));