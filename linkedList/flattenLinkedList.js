let head = null;

class Node {
    constructor(val) 
    {
        this.data = val;
        this.down = null;
        this.right = null;
    }
}

function push(head_ref, data) {
    /* 1 & 2: Allocate the Node & 
              Put in the data */
    let new_node = new Node(data);
  
    // 3. Make next of new Node as head
    new_node.down = head_ref;
  
    // 4. Move the head to point to 
    // new Node 
    head_ref = new_node;
  
    // 5. return to link it back 
        return head_ref;
}

function merge(currentRoot, nextRoot) {
    if (nextRoot === null) {
        return currentRoot;
    }

    let merged;
    let mergedHead;
    while(currentRoot && nextRoot) {
        let val;
        if (currentRoot.data < nextRoot.data) {
            val = currentRoot.data;
            currentRoot = currentRoot.down;
        } else {
            val = nextRoot.data;
            nextRoot = nextRoot.down;
        }

        if (!merged) {
            merged = new Node(val);
            mergedHead = merged;
        } else {
            merged.down = new Node(val);
            merged = merged.down;
        }
    }

    while(currentRoot) {
        merged.down = new Node(currentRoot.data);
        merged = merged.down;
        currentRoot = currentRoot.down;
    }

    while(nextRoot) {
        merged.down = new Node(nextRoot.data);
        merged = merged.down;
        nextRoot = nextRoot.down;
    }

    return mergedHead;
}

function flatten(root) {
    if (root === null) {
        return null;
    }

    let flat = flatten(root.right);
    let headRef = merge(root, flat);

    return headRef;
}

function printList(headR) {
    let temp = headR;
    while (temp != null) 
    {
        process.stdout.write(temp.data + " ");
        temp = temp.down;
    }
   console.log();
}

head = push(head, 30);
head = push(head, 8);
head = push(head, 7);
head = push(head, 5);
  
head.right = push(head.right, 20);
head.right = push(head.right, 10);
  
head.right.right = push(head.right.right, 50);
head.right.right = push(head.right.right, 22);
head.right.right = push(head.right.right, 19);
  
head.right.right.right = push(head.right.right.right, 45);
head.right.right.right = push(head.right.right.right, 40);
head.right.right.right = push(head.right.right.right, 35);
head.right.right.right = push(head.right.right.right, 20);

console.log(head);
  
// Flatten the list
let headR = flatten(head);
  
printList(headR);