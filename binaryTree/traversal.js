const Node = require('./Node');

function bfs(root) {
    let q = [];
    q.push(root);

    while(q.length) {
        let node = q.shift();
        process.stdout.write(node.data + "->")
        if (node.right) {
            q.push(node.right);
        }
        
        if (node.left) {
            q.push(node.left);
        }
    }

    console.log();
}

function bfsLineByLine(root) {
    let q = [];
    q.push({node: root, level: 0});

    let lastLevel = 0;
    while(q.length) {
        let value = q.shift();
        if (value.level === lastLevel + 1) {
            lastLevel = value.level
            console.log();
        }
        process.stdout.write(value.node.data + "->")
        if (value.node.right) {
            q.push({node: value.node.right, level: value.level + 1});
        }
        
        if (value.node.left) {
            q.push({node: value.node.left, level: value.level + 1});
        }
    }

    console.log();
}

function inorder(root) {
    if (root === null) {
        return;
    }

    inorder(root.left);
    process.stdout.write(root.data + "->");
    inorder(root.right);
}

function preorder(root) {
    if (root === null) {
        return;
    }

    process.stdout.write(root.data + "->");
    preorder(root.left);
    preorder(root.right);
}

function postorder(root) {
    if (root === null) {
        return;
    }

    postorder(root.left);
    postorder(root.right);
    process.stdout.write(root.data + "->");
}

function inorderNonRec(root) {
    let stack = [];
    let node = root;
    while(node || stack.length) {
        if (node) {
            stack.push(node);
        }

        while(node && node.left) {
            node = node.left;
            stack.push(node);
        }

        node = stack.pop();
        process.stdout.write(node.data + '->');
        node = node.right;
    }
}

function preorderNonRec(root) {
   let node = root;
   let stack = []; 
   while(node || stack.length) {
       if (node) {
           stack.push(node)
       }

       while (node) {
           process.stdout.write(node.data + "->");
           node = node.left;

           if (node) {
               stack.push(node);
           }
       }

       node = stack.pop().right;
   }
}


const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);

console.log(root);
bfs(root);
bfsLineByLine(root)
// inorder(root);
// console.log();
// inorderNonRec(root);
// preorder(root);
// console.log();
// preorderNonRec(root)
// postorder(root);
