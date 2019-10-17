
// PALINDROME

// Palindrome is problem 2.6 from Cracking the Coding Interview. The prompt is as follows: Implement a function to check if a linked list is a palindrome.

// First, we'll assume the linked list is doubly linked.

// This is the Node class we will use.
class Node {
    constructor(val, previous = null, next = null) {
        this.value = val
        this.prev = previous
        this.next = next
    }
}

// This is a helper function that makes sure the linked list doesn't have a loop.
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

// This is a helper function that checks for a palindrome in the odd case, after we've found the center node of the list.

function isOddPalindrome(centerNode) {
    let previousNode = centerNode.prev
    let nextNode = centerNode.next
    while (previousNode !== null) {
        if (previousNode.value !== nextNode.value) {
            return false
        }
        previousNode = previousNode.prev
        nextNode = nextNode.next
    }
    return true
}

// This is a helper function that checks for a palindrome in the even case, after we've found the left-of-center node of the list.

function isEvenPalindrome(nearCenterNode, hare) {
    if (nearCenterNode === hare) {
        return nearCenterNode.value === hare.next.value
    }
    let left = nearCenterNode
    let right = nearCenterNode.next
    while (left.prev !== null) {
        if (left.prev.value !== right.next.value) {
            return false
        }
        left = left.prev
        right = right.prev
    }
    return true
}

function isPalindrome(node) {
    if (isLoop(node)) return false
    let tortoise = node
    let hare = node
    if (node === null || node.next === null) {
        return true
    }
    while (hare.next !== null && hare.next.next !== null) {
        tortoise = tortoise.next
        hare = hare.next.next
    }
    if (hare.next !== null) {
        // this is the even number of nodes case. hare is at the second-to-last node.
        return isEvenPalindrome(tortoise, hare)
    }
    else {
        // this is the odd number of nodes case. hare is at the last node. tortoise is at the center node.
        return isOddPalindrome(tortoise)
    }
}


// Test cases below

// let list0 = null

// let list1 = new Node(1)

// let list2 = new Node(1)
// list2.next = new Node(1, list2)

// let list22 = new Node(1)
// list22.next = new Node(2, list22)

// let list3 = new Node(1)
// list3.next = new Node(2, list3)
// list3.next.next = new Node(1, list3.next)

// let list32 = new Node(1)
// list32.next = new Node(2, list32)
// list32.next.next = new Node(2, list32.next)

// let list4 = new Node(1)
// list4.next = new Node(2, list4)
// list4.next.next = new Node(2, list4.next)
// list4.next.next.next = new Node(1, list4.next.next)

// let list42 = new Node(1)
// list42.next = new Node(2, list42)
// list42.next.next = new Node(2, list42.next)
// list42.next.next.next = new Node(2, list42.next.next)

// let list5 = new Node(1)
// list5.next = new Node(2, list5)
// list5.next.next = new Node(2, list5.next)
// list5.next.next.next = new Node(2, list5.next.next)
// list5.next.next.next.next = new Node(1, list5.next.next.next)

// let list52 = new Node(1)
// list52.next = new Node(2, list52)
// list52.next.next = new Node(2, list52.next)
// list52.next.next.next = new Node(2, list52.next.next)
// list52.next.next.next.next = new Node(2, list52.next.next.next)

// console.log(isPalindrome(list0)) // true
// console.log(isPalindrome(list1)) // true
// console.log(isPalindrome(list2)) // true
// console.log(isPalindrome(list22)) // false
// console.log(isPalindrome(list3)) // true
// console.log(isPalindrome(list32)) // false
// console.log(isPalindrome(list4)) // true
// console.log(isPalindrome(list42)) // false
// console.log(isPalindrome(list5)) // true
// console.log(isPalindrome(list52)) // false


// Now, let's assume the linked list is singly linked.

// Here is a new class to deal with the singly-linked type of node.

class SinglyLinkedNode {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

// Below is a function that dumps the values from a singly linked list into an array, then checks if the array is a palindrome.

function isPalindrome2(node) {
    if (isLoop(node)) return false
    if (node === null || node.next === null) {
        return true
    }
    let tortoise = node
    let listArr = [node.value]
    while (tortoise.next !== null) {
        tortoise = tortoise.next
        listArr.push(tortoise.value)
    }
    let start = 0
    let end = listArr.length - 1
    while (end >= start) {
        if (listArr[start] !== listArr[end]) {
            return false
        }
        end--
        start++
    }
    return true
}


// Test cases below

let slist0 = null

let slist1 = new SinglyLinkedNode(1)

let slist2 = new SinglyLinkedNode(1)
slist2.next = new SinglyLinkedNode(1)

let slist22 = new SinglyLinkedNode(1)
slist22.next = new SinglyLinkedNode(2)

let slist3 = new SinglyLinkedNode(1)
slist3.next = new SinglyLinkedNode(2)
slist3.next.next = new SinglyLinkedNode(1)

let slist32 = new SinglyLinkedNode(1)
slist32.next = new SinglyLinkedNode(2)
slist32.next.next = new SinglyLinkedNode(2)

let slist4 = new SinglyLinkedNode(1)
slist4.next = new SinglyLinkedNode(2)
slist4.next.next = new SinglyLinkedNode(2)
slist4.next.next.next = new SinglyLinkedNode(1)

let slist42 = new SinglyLinkedNode(1)
slist42.next = new SinglyLinkedNode(2)
slist42.next.next = new SinglyLinkedNode(2)
slist42.next.next.next = new SinglyLinkedNode(2)

let slist5 = new SinglyLinkedNode(1)
slist5.next = new SinglyLinkedNode(2)
slist5.next.next = new SinglyLinkedNode(2)
slist5.next.next.next = new SinglyLinkedNode(2)
slist5.next.next.next.next = new SinglyLinkedNode(1)

let slist52 = new SinglyLinkedNode(1)
slist52.next = new SinglyLinkedNode(2)
slist52.next.next = new SinglyLinkedNode(2)
slist52.next.next.next = new SinglyLinkedNode(2)
slist52.next.next.next.next = new SinglyLinkedNode(2)

// console.log(isPalindrome2(slist0)) // true
// console.log(isPalindrome2(slist1)) // true
// console.log(isPalindrome2(slist2)) // true
// console.log(isPalindrome2(slist22)) // false
// console.log(isPalindrome2(slist3)) // true
// console.log(isPalindrome2(slist32)) // false
// console.log(isPalindrome2(slist4)) // true
// console.log(isPalindrome2(slist42)) // false
// console.log(isPalindrome2(slist5)) // true
// console.log(isPalindrome2(slist52)) // false


// Below is an approach that checks if a singly linked list is a palindrome using recursion.

// This is a helper function that finds the length. It assumes no loop, since it's only called in the no loop case.

function findLength(head) {
    let tortoise = head
    let hare = head
    if (head === null) return 0
    if (head.next === null) return 1
    if (head.next.next === null) return 2
    let count = 1
    while (hare.next !== null && hare.next.next !== null) {
        tortoise = tortoise.next
        hare = hare.next.next
        count++
    }
    if (hare.next !== null) {
        return count * 2
    }
    else {
        return count * 2 - 1
    }
}

// This is a helper function that does that actual recursive work once we know the length.
function recursiveHelper(node, length) {
    if (length <= 0) {
        // We've hit the just-right-of-middle of an even-lengthed list, or the original list was only one or zero nodes long.
        return {boolean: true, currentNode: node}
    }
    else if (length === 1) {
        // We've hit the middle of an odd-lengthed list.
        return {boolean: true, currentNode: node.next}
    }
    else {
        let result = recursiveHelper(node.next, length - 2)
        if (result.boolean) {
            return {boolean: node.value === result.currentNode.value, currentNode: result.currentNode.next}
        }
        else {
            return result
        }
    }
}

function isPalindrome3(head) {
    if (isLoop(head)) return false
    let length = findLength(head)
    let result = recursiveHelper(head, length)
    return result.boolean
}

// Below are tests.

console.log(isPalindrome3(slist0)) // true
console.log(isPalindrome3(slist1)) // true
console.log(isPalindrome3(slist2)) // true
console.log(isPalindrome3(slist22)) // false
console.log(isPalindrome3(slist3)) // true
console.log(isPalindrome3(slist32)) // false
console.log(isPalindrome3(slist4)) // true
console.log(isPalindrome3(slist42)) // false
console.log(isPalindrome3(slist5)) // true
console.log(isPalindrome3(slist52)) // false
