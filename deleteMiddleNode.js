
// DELETE MIDDLE NODE

// Delete Middle Node is problem 2.3 of Cracking the Coding Interview. The prompt: Implement an algorithm to delete a node in the middle (i.e. any node but the first and last node, not necessarily the exact middle) of a singly linked list, given access only to that node.

// Helper node class for testing.
class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

// Helper list class for testing.
class List {
    constructor() {
        this.head = null
    }
    addToHead(val) {
        let node = new Node(val)
        node.next = this.head
        this.head = node
        return this
    }
}

// Test lists
let list0 = new List()
let list1 = new List()
list1.addToHead(0)
let list2 = new List()
list2.addToHead(1).addToHead(0)
let list3 = new List()
list3.addToHead(2).addToHead(1).addToHead(0)
let list4 = new List()
list4.addToHead(3).addToHead(2).addToHead(1).addToHead(0)
let list5 = new List()
list5.addToHead(4).addToHead(3).addToHead(2).addToHead(1).addToHead(0)
let list6 = new List()
list6.addToHead(5).addToHead(4).addToHead(3).addToHead(2).addToHead(1).addToHead(0)

function deleteMiddleNode(node) {
    node.value = node.next.value
    node.next = node.next.next
}

deleteMiddleNode(list6.head.next)
console.log(JSON.stringify(list6.head))

deleteMiddleNode(list5.head.next.next.next)
console.log(JSON.stringify(list5.head))
