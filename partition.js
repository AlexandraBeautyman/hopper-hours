
// PARTITION

// Partition is problem 2.4 from Cracking the Coding Interview. The prompt: Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. (IMPORTANT: The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions. The additional spacing in the example below indicates the partition.)

// EXAMPLE
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// Output: 3 -> 1 -> 2  ->  10 -> 5 -> 5 -> 8

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
    addToTail(val) {
        if (this.head === null) {
            this.head = new Node(val)
        }
        else {
            let currentNode = this.head
            while (currentNode.next !== null) {
                currentNode = currentNode.next
            }
            currentNode.next = new Node(val)
        }
        return this
    }
}

// Lists for testing

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
let list6b = new List()
list6b.addToTail(5).addToTail(1).addToTail(4).addToTail(3).addToTail(2).addToTail(0)
//console.log(JSON.stringify(list6b.head))

// Below is an inefficient algorithm that uses the addToTail method in the List class.

function partitionSlowly(head, x) {
    let leftList = new List()
    let rightList = new List()
    let currentNode = head
    while (currentNode !== null) {
        let currentVal = currentNode.value
        if (currentVal < x) {
            leftList.addToTail(currentVal)
        }
        else {
            rightList.addToTail(currentVal)
        }
        currentNode = currentNode.next
    }
    let left = leftList.head
    if (left === null) return rightList
    while (left.next !== null) {
        left = left.next
    }
    left.next = rightList.head
    return leftList
}

// console.log(JSON.stringify(partitionSlowly(list6b.head, 0)))
// console.log(JSON.stringify(partitionSlowly(list6b.head, 1)))
// console.log(JSON.stringify(partitionSlowly(list6b.head, 2)))
// console.log(JSON.stringify(partitionSlowly(list6b.head, 3)))
// console.log(JSON.stringify(partitionSlowly(list6b.head, 4)))
// console.log(JSON.stringify(partitionSlowly(list6b.head, 5)))
// console.log(JSON.stringify(partitionSlowly(list6b.head, 6)))


// Below is a more efficient solution that uses the built-in addToHead method of the List class, which has constant time complexity.

function partition(head, x) {
    let leftList = new List()
    let rightList = new List()
    let currentNode = head
    let lastLeft
    while (currentNode !== null) {
        if (currentNode.value < x) {
            leftList.addToHead(currentNode.value)
            if (leftList.head.next === null) {
                lastLeft = leftList.head
            }
        }
        else {
            rightList.addToHead(currentNode.value)
        }
        currentNode = currentNode.next
    }
    if (leftList.head === null) return rightList
    lastLeft.next = rightList.head
    return leftList
}

// console.log(JSON.stringify(partition(list6b.head, 0)))
// console.log(JSON.stringify(partition(list6b.head, 1)))
// console.log(JSON.stringify(partition(list6b.head, 2)))
// console.log(JSON.stringify(partition(list6b.head, 3)))
// console.log(JSON.stringify(partition(list6b.head, 4)))
// console.log(JSON.stringify(partition(list6b.head, 5)))
// console.log(JSON.stringify(partition(list6b.head, 6)))

let list5b = new List()
list5b.addToHead(4).addToHead(3).addToHead(2).addToHead(1).addToHead(0)

// console.log(JSON.stringify(partition(list5b.head, 0)))
// console.log(JSON.stringify(partition(list5b.head, 1)))
// console.log(JSON.stringify(partition(list5b.head, 2)))
// console.log(JSON.stringify(partition(list5b.head, 3)))
// console.log(JSON.stringify(partition(list5b.head, 4)))
// console.log(JSON.stringify(partition(list5b.head, 5)))
// console.log(JSON.stringify(partition(list5b.head, 6)))

console.log(JSON.stringify(partition(list5b.head, -1)))
