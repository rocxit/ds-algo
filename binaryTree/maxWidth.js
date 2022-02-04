const Node = require('./Node');

function maxWidth(root) {
    if (root === null) {
        return 0;
    }
    let q = [];
    q.push(root);
    q.push(null);

    let maxWidth = 1;
    while(q.length > 1) {
        let ele = q.shift();

        if (ele === null) {
            if (q.length > maxWidth) {
                maxWidth = q.length;
            }

            q.push(null)
        } else {
            if(ele.left) {
                q.push(ele.left);
            }
    
            if (ele.right) {
                q.push(ele.right);
            }
        }
    }

    return maxWidth;
}

const root = new Node(50);
root.left = new Node(25);
root.right = new Node(25);
root.left.left = new Node(12);
root.left.right = new Node(13);
root.right.left = new Node(11);
root.right.right = new Node(14);

console.log(maxWidth(root));