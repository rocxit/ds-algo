const Node = require('./Node');

class Tree {
    constructor() {
        this.root = null;
    }

    mirror(root) {
        if (root == null) {
            return;
        }

        if (root.left || root.right) {
            let temp = root.left;
            root.left = root.right;
            root.right = temp;    
        }

        this.mirror(root.left);
        this.mirror(root.right);
    }

    checkBST(root, left, right) {
        if(root === null) {
            return true;
        }

        if (left !== null && root.data > left.data) {
            return false;
        }

        if (right !== null && root.data < right.data) {
            return false;
        }

        return this.checkBST(root.left, root, right) && this.checkBST(root.right, left, root);
    }

    printBottomView(node, level, map) {
        if (node == null) {
            return;
        }

        map.set(level, node.data);
        this.printDownData(node.left, level -1, map);
        this.printDownData(node.right, level + 1, map);
    }clear
}

root = new Node(6);
root.left = new Node(4);
root.right = new Node(7);
root.left.left = new Node(3);
root.left.right = new Node(5);

console.log(root);

const tree = new Tree();
// tree.mirror(root);
// console.log(root);
// let map = new Map();
// tree.printBottomView(root, 0, map);
// console.log(map);
console.log(root);
console.log(tree.checkBST(root, null, null));
