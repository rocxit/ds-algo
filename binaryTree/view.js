const Node = require('./Node');

function leftView(root) {
    let q = [];
    let map = new Map();
    let level = 0;
    map.set(level, root.data);
    level++;
    q.push(root);
    q.push(null);

    while(q.length > 1) {
        let val = q.shift();
        if (val === null) {
            q.push(null);
            level++;
        } else {
            if (val.left) {
                q.push(val.left);
                if (!map.has(level)) {
                    map.set(level, val.left.data)
                }
            }
    
            if (val.right) {
                q.push(val.right);
                if (!map.has(level)) {
                    map.set(level, val.right.data)
                }
            }
        }
    }

    console.log(map);
}

function leftViewRec(root) {
    let maxLevel = 0;

    function leftView(root, level=1) {
        if (root === null) {
            return null;
        }

        if (maxLevel < level) {
            console.log(root.data);
            maxLevel = level;
        }

        leftView(root.left, level + 1);
        leftView(root.right, level + 1);
    }

    leftView(root);
}

const root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);

leftView(root);
leftViewRec(root)
