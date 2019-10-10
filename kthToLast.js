
// Kth TO LAST

// Kth To Last is problem 2.2 from Cracking the Coding Interview. The prompt: implement an algorithm to find the kth to last element of a singly linked list.

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

// Below is a solution using recursion. It assumes there is no loop.

function kthToLast(head, k) {
    let count = 0
    let tortoise = head
    let hare = head
    while (hare !== null && count < k) {
        hare = hare.next
        count++
    }
    if (count < k) return null
    while (hare !== null) {
        tortoise = tortoise.next
        hare = hare.next
    }
    return tortoise
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
//console.log(list6.head)

// Tests

console.log('list6, 3', JSON.stringify(kthToLast(list6.head, 3))) // 3
console.log('list6, 2', JSON.stringify(kthToLast(list6.head, 2))) // 4
console.log('list6, 1', JSON.stringify(kthToLast(list6.head, 1))) // 5
console.log('list6, 0', JSON.stringify(kthToLast(list6.head, 0))) // null
console.log('list6, 4', JSON.stringify(kthToLast(list6.head, 4))) // 2
console.log('list6, 5', JSON.stringify(kthToLast(list6.head, 5))) // 1
console.log('list6, 6', JSON.stringify(kthToLast(list6.head, 6))) // 0
console.log('list6, 7', JSON.stringify(kthToLast(list6.head, 7))) // null

console.log('list0, 3', JSON.stringify(kthToLast(list0.head, 3))) // null
console.log('list0, 0', JSON.stringify(kthToLast(list0.head, 0))) // null

console.log('list1, 0', JSON.stringify(kthToLast(list1.head, 0))) // null
console.log('list1, 1', JSON.stringify(kthToLast(list1.head, 1))) // 0

console.log('list2, 3', JSON.stringify(kthToLast(list2.head, 3))) // null
console.log('list2, 2', JSON.stringify(kthToLast(list2.head, 2))) // 0

console.log('list3, 3', JSON.stringify(kthToLast(list3.head, 3))) // 0
console.log('list3, 1', JSON.stringify(kthToLast(list3.head, 1))) // 2
