
 // Definition for singly-linked list.
  function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

  function print(root) {
      while(root) {
          process.stdout.write(root.val + "->");
          root = root.next
      }
  }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    let root = null;
    let output = root;
    let carry = 0;
    
    let i = 0;
    while (l1 || l2) {
        // console.log(++i)
        let val1 = 0;
        let val2 = 0;
        // console.log(l1, l2);
        if (l1 && l2) {
            val1 = l1.val;
            val2 = l2.val;
            l1 = l1.next;
            l2 = l2.next;
        } else if (l2) {
            val2 = l2.val;
            l2 = l2.next;
        } else if (l1) {
            val1 = l1.val
            l1 = l1.next;
        }
        
        let result = val1 + val2 + carry;
        if (result > 9) {
            carry = 1;
            result = result % 10;
        } else {
            carry = 0;
        }

        if (root === null) {
            root = new ListNode(result);
            output = root
        } else {
            output.next = new ListNode(result);
            output = output.next
        }
    }
    
    if (carry) {
         output.next = new ListNode(carry);
    }
    
    return root;
};

let list1 = new ListNode(9);
let temp1 = list1;
temp1.next = new ListNode(9);
temp1 = temp1.next;
temp1.next =  new ListNode(9);
temp1 = temp1.next;
temp1.next =  new ListNode(9);
temp1 = temp1.next;
temp1.next =  new ListNode(9);
temp1 = temp1.next;
temp1.next =  new ListNode(9);
temp1 = temp1.next;
temp1.next =  new ListNode(9);

let list2 = new ListNode(9);
let temp2 = list2;
temp2.next = new ListNode(9);
temp2 = temp2.next;
temp2.next = new ListNode(9);
temp2 = temp2.next;
temp2.next = new ListNode(9);

// print(list1);
// console.log();
// print(list2)
let result = addTwoNumbers(list1, list2);
print(result)