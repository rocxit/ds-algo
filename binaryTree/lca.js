const Node = require('./Node');

function findPath(root, n1, path) {
    if (root === null) {
        return false
    }

    path.push(root.data);

    if (root.data === n1) {
        return path;
    }

    if (findPath(root.left, n1, path) || findPath(root.right, n1, path)) {
        return true;
    }

    path.pop();

    return false;
}

function lca(root, n1, n2) {
    let l1 = [];
    let l2 = [];

    if (findPath(root, n1, l1) === false || findPath(root, n2, l2) === false) {
        return null;
    }

    for (let i = 0; i < l1.length - 1 && i< l2.length - 1; i++) {
        if (l1[i + 1] !== l2[i + 1]) {
            return l1[i];
        }
    }

    return false;
}

function lcaEff(root, n1, n2) {
    if (root === null) {
        return null;
    }

    if (root.data === n1 || root.data === n2) {
        return root;
    }


    let left = lcaEff(root.left, n1, n2);
    let right = lcaEff(root.right, n1, n2);

    if (left !== null && right !== null) {
        console.log(root.data + "---");
        return root;
    }

    if (left !== null) {
        return left;
    } else {
        return right;
    }
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);

console.log(lca(root, 40, 50));
console.log(lcaEff(root, 40, 50));
