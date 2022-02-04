const Node = require('./Node');

let prev = null;
function toDLL(root) {
    if (root === null) {
        return null
    }

    let head = toDLL(root.left);

    if (prev === null) {
        head = root;
    } else {
        root.left = prev;
        prev.right = root
    }

    prev = root;

    toDLL(root.right);

    return head;

}

function print(head) {
    let temp = head;

    while(temp) {
        process.stdout.write(temp.data + "- >");
        temp = temp.right
    }

    console.log();
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);

let head = toDLL(root);
print(head)