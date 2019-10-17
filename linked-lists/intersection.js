
// INTERSECTION

// Intersection is problem 2.7 from Cracking the Coding Interview. The prompt: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.

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
list5.addToHead(2).addToHead(1)
list5.head.next.next = list4.head.next.next


// In this approach, we throw all the nodes from the first list into a set, then work through the second list to find if any of its nodes are in the set.

function findIntersection(head1, head2) {
    if (head1 === null || head2 === null) return null
    let nodeSet = new Set()
    nodeSet.add(head1)
    let pointer1 = head1
    while (pointer1.next !== null) {
        nodeSet.add(pointer1.next)
        pointer1 = pointer1.next
    }
    let pointer2 = head2
    while (pointer2.next !== null) {
        if (nodeSet.has(pointer2.next)) {
            return pointer2.next
        }
        pointer2 = pointer2.next
    }
    return null
}

// console.log(findIntersection(list0.head, list1.head)) // null
// console.log(findIntersection(list1.head, list2.head)) // null
// console.log(findIntersection(list2.head, list3.head)) // null
// console.log(findIntersection(list3.head, list4.head)) // null
// console.log(findIntersection(list4.head, list5.head)) // node 3 => 4 => null


// This approach uses recursion to work down to the tails, compares them, then works back up with the null value (tails don't match) or the tail value (they do), replacing the tail value as long as the previous nodes match.

function findIntersection2(head1, head2) {
    //base case 1
    if (head1 === null || head2 === null) return null
    // base case 2
    if (head1.next === null && head2.next === null) {
        // we've reached the tail
        if (head1 === head2) return head1
        return null
    }
    // recursive case
    if (head1 === head2) return head1
    return findIntersection(head1.next || head1, head2.next || head2)
}

// console.log(findIntersection2(list0.head, list1.head)) // null
// console.log(findIntersection2(list1.head, list2.head)) // null
// console.log(findIntersection2(list2.head, list3.head)) // null
// console.log(findIntersection2(list3.head, list4.head)) // null
// console.log(findIntersection2(list4.head, list5.head)) // node 3 => 4 => null

// This approach checks the lengths as it traverses to the tails, compares the tails, then makes the lengths the same and tranverses through for the first matching node.

// This is a helper function for making the two lists the same length.

function equalizeLengths(head1, head2, length1, length2) {
    let pointer1 = head1
    let pointer2 = head2
    if (length1 > length2) {
        let chopOffLength = length1 - length2
        for (let i = 0; i < chopOffLength; i++) {
            pointer2 = pointer2.next
        }
    }
    else {
        let chopOffLength = length2 - length2
        for (let i = 0; i < chopOffLength; i++) {
            pointer1 = pointer1.next
        }
    }
    return [pointer1, pointer2]
}

// This is the main function.

function findIntersection3(head1, head2) {
    if (head1 === null || head2 === null) return null
    let pointer1 = head1
    let length1 = 1
    while (pointer1.next !== null) {
        pointer1 = pointer1.next
        length1++
    }
    let pointer2 = head2
    let length2 = 1
    while (pointer2.next !== null) {
        pointer2 = pointer2.next
        length2++
    }
    if (pointer1 !== pointer2) {return null}
    [pointer1, pointer2] = equalizeLengths(head1, head2, length1, length2)
    while (pointer1 !== null) {
        if (pointer1 === pointer2) return pointer1
        pointer1 = pointer1.next
        pointer2 = pointer2.next
    }
}

console.log(findIntersection3(list0.head, list1.head)) // null
console.log(findIntersection3(list1.head, list2.head)) // null
console.log(findIntersection3(list2.head, list3.head)) // null
console.log(findIntersection3(list3.head, list4.head)) // null
console.log(findIntersection3(list4.head, list5.head)) // node 3 => 4 => null
