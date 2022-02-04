class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addAtStart(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node
    }

    reverseList() {
        let temp = this.head;
        let current = temp;
        let prev = null;
        let next = null;

        while(current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;

        return prev;
    }

    printLinkList() {
        let temp = this.head;

        while(temp != null) {
            process.stdout.write(`${temp.data}->`)
            temp = temp.next;
        }
        console.log();
    }
}

let ll = new LinkedList();
ll.addAtStart(2);
ll.addAtStart(3);
ll.addAtStart(4);

ll.printLinkList();

let rev = ll.reverseList();
console.log(rev);
ll.printLinkList()
