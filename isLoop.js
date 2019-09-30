
// LINKED LIST LOOP

// The question is how to determine whether a linked list is a loop.

// This is a helper Node class and a helper LinkedList class.
class Node {
    constructor(val, next = null) {
        this.value = val
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    addToTail(val, next = null) {
        if (this.head === null) {
            this.head = new Node(val, next)
        }
        else {
            let currentNode = this.head
            while (currentNode.next !== null) {
                currentNode = currentNode.next
            }
            currentNode.next = new Node(val, next)
        }
    }
}

// This is the main function.
function isLoop(node) {
    if (node === null || node.next === null || node.next.next === null) return false
    let tortoise = node.next
    let hare = node.next.next
    while (hare.next && hare.next.next) {
        if (tortoise === hare) return true
        tortoise = tortoise.next
        hare = hare.next.next
    }
    return false
}

// Here are some sample linked lists for testing, along with some tests.
// let list0 = new LinkedList
// console.log(isLoop(list0.head))
// list0.addToTail(1)
// console.log(isLoop(list0.head))
// list0.addToTail(1)
// console.log(isLoop(list0.head))
// list0.addToTail(1)
// console.log(isLoop(list0.head))
// list0.addToTail(1)
// console.log(isLoop(list0.head))

let list1 = new LinkedList
list1.addToTail(1)
list1.addToTail(2)
console.log(isLoop(list1.head)) // false
list1.addToTail(4)
console.log(isLoop(list1.head)) // false
list1.addToTail(3, list1.head)
console.log(isLoop(list1.head)) // true

