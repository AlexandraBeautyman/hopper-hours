
// LOOP DETECTION

// Loop Detection is problem 2.8 from Cracking the Coding Interview. Prompt: Given a linked list which might contain a loop, implement an algorithm that returns the node at the beginning of the loop (if one exists).

// EXAMPLE
// Input: A => B => C => D => E => C [the same C as earlier]
// Output: C

// Helper Node class

class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

// Helper List class

class List {
    constructor() {
        this.head = null
    }
    addToHead(val) {
        let newNode = new Node(val)
        newNode.next = this.head
        this.head = newNode
        return this
    }
}

// Test lists

let list0 = new List()
let list1 = new List()
list1.addToHead(1)
let list2 = new List()
list2.addToHead(2).addToHead(1)
let list3 = new List()
list3.addToHead(3).addToHead(2).addToHead(1)
let list4 = new List()
list4.addToHead(4).addToHead(3).addToHead(2).addToHead(1)
let list5 = new List()
list5.addToHead(5).addToHead(4).addToHead(3).addToHead(2).addToHead(1)
list5.head.next.next.next.next.next = list5.head.next.next

// This approach uses a set as a kind of hash table (with no values, but all you need are the keys).

function findLoopStart(head) {
    if (head === null) return null
    let currentNode = head
    let nodeSet = new Set()
    nodeSet.add(head)
    while (currentNode.next !== null) {
        if (nodeSet.has(currentNode.next)) {
            return currentNode.next
        }
        nodeSet.add(currentNode.next)
        currentNode = currentNode.next
    }
    return null
}

// console.log(findLoopStart(list0.head)) // null
// console.log(findLoopStart(list1.head)) // null
// console.log(findLoopStart(list2.head)) // null
// console.log(findLoopStart(list3.head)) // null
// console.log(findLoopStart(list4.head)) // null
// console.log(findLoopStart(list5.head)) // 3 => 4 => 5 => etc.

// This approach uses the fact that the tortoise and the hare will end up on the same node k steps away from the first node of the loop, where k is also the distance from the head to the first node of the loop.

// This is a helper function to find the intersection of the tortoise and the hare.

function findIntersection(head) {
    let tortoise = head.next
    let hare = head.next.next
    while (tortoise !== hare && hare.next !== null && hare.next.next !== null) {
        tortoise = tortoise.next
        hare = hare.next.next
    }
    if (tortoise !== hare) return null
    return tortoise
}

// This is the main function.

function findLoopStart2(head) {
    if (head === null || head.next === null || head.next.next === null) return null
    let tortoise = findIntersection(head)
    if (tortoise === null) return null
    let currentNode = head
    while (tortoise !== currentNode) {
        tortoise = tortoise.next
        currentNode = currentNode.next
    }
    return currentNode
}

console.log(findLoopStart2(list0.head)) // null
console.log(findLoopStart2(list1.head)) // null
console.log(findLoopStart2(list2.head)) // null
console.log(findLoopStart2(list3.head)) // null
console.log(findLoopStart2(list4.head)) // null
console.log(findLoopStart2(list5.head)) // 3 => 4 => 5 => etc.
