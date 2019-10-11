
// SUM LISTS

// Sum Lists is problem 2.5 of Cracking the Coding Interview. The prompt: You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 2's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list. (You are not allowed to "cheat" and just convert the linked list to an integer.)

// EXAMPLE
// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.

// FOLLOW UP. Suppose the digits are stored in forward order. Repeat the above problem.
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295.
// Output: 9 -> 1 -> 2. That is, 912.


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

// Test lists

let listA = new List()
listA.addToHead(6).addToHead(1).addToHead(7)
let listB = new List()
listB.addToHead(2).addToHead(9).addToHead(5)
let listC = new List()
let listD = new List()
listD.addToHead(5).addToHead(2)

console.log('listA', JSON.stringify(listA))
console.log('listB', JSON.stringify(listB))
console.log('listC', JSON.stringify(listC))
console.log('listD', JSON.stringify(listD))

// Part 1.

function sumLists(head1, head2) {
    if (head1 === null) return head2
    if (head2 === null) return head1
    let sumList = new List()
    let firstCurrent = head1
    let secondCurrent = head2
    let carryValue = 0
    while (firstCurrent !== null || secondCurrent !== null) {
        let sum = carryValue
        if (firstCurrent !== null) {
            sum += firstCurrent.value
            firstCurrent = firstCurrent.next
        }
        if (secondCurrent !== null) {
            sum += secondCurrent.value
            secondCurrent = secondCurrent.next
        }
        if (sum > 9) {
            carryValue = 1
            sum = sum - 10
        }
        else {
            carryValue = 0
        }
        sumList.addToTail(sum)
    }
    return sumList
}

// console.log('A and B', JSON.stringify(sumLists(listA.head, listB.head)))
// console.log('A and C', JSON.stringify(sumLists(listA.head, listC.head)))
// console.log('A and D', JSON.stringify(sumLists(listA.head, listD.head)))


// Part 2.

// Helper function to return new versions of head1 and head2 that are even in length.

function evenLengths(head1, head2) {
    if (head1 === null) return head2
    if (head2 === null) return head1
    let length1 = 0
    let current1 = head1
    while (current1 !== null) {
        length1++
        current1 = current1.next
    }
    let length2 = 0
    let current2 = head2
    while (current2 !== null) {
        length2++
        current2 = current2.next
    }
    while (length1 > length2) {
        let newNode = new Node(0)
        newNode.next = head2
        head2 = newNode
        length2++
    }
    while (length2 > length1) {
        let newNode = new Node(0)
        newNode.next = head1
        head1 = newNode
        length1++
    }
    return [head1, head2]
}

// Helper function to do recursive work.

function recursiveHelper(evenHead1, evenHead2) {
    if (evenHead1.next === null) {
        let sum = evenHead1.value + evenHead2.value
        let carry = 0
        if (sum > 9) {
            carry = 1
            sum = sum - 10
        }
        let sumList = new Node(sum)
        return {
            carry,
            sumList
        }
    }
    else {
        let result = recursiveHelper(evenHead1.next, evenHead2.next)
        let sum = result.carry + evenHead1.value + evenHead2.value
        let carry = 0
        if (sum > 9) {
            carry = 1
            sum = sum - 10
        }
        let sumList = new Node(sum)
        sumList.next = result.sumList
        return {
            carry,
            sumList
        }
    }
}

// Main function for part 2.

function sumLists2(head1, head2) {
    if (head1 === null) return head2
    if (head2 === null) return head1
    let [evenedHead1, evenedHead2] = evenLengths(head1, head2)
    let result = recursiveHelper(evenedHead1, evenedHead2)
    let sumList = result.sumList
    if (result.carry > 0) {
        let newHead = new Node(result.carry)
        newHead.next = sumList
        sumList = newHead
    }
    return sumList
}


console.log('sumList A and B', JSON.stringify(sumLists2(listA.head, listB.head)))
console.log('sumList A and C', JSON.stringify(sumLists2(listA.head, listC.head)))
console.log('sumList A and D', JSON.stringify(sumLists2(listA.head, listD.head)))
console.log('sumList D and B', JSON.stringify(sumLists2(listD.head, listB.head)))
