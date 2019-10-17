
// REMOVE DUPLICATES

// Remove Dups is problem 2.1 from Cracking the Coding Interview. The prompt is as follows: Write code to remove duplicates from an unsorted linked list. (The list is singly linked and has no loops.)

class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class List {
    constructor() {
        this.head = null
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
    }
}

function removeDups(head) {
    let storageObj = {}
    let currentNode = head
    if (currentNode === null || currentNode.next === null) return currentNode
    let currentValue = head.value.toString()
    storageObj[currentValue] = true
    let tempNode = new Node(null)
    while (currentNode !== null && currentNode.next !== null) {
        let nextValue = currentNode.next.value.toString()
        if (storageObj.hasOwnProperty(nextValue)) {
            tempNode.next = currentNode.next.next
        }
        else {
            storageObj[nextValue] = true
            tempNode = currentNode.next
        }
        currentNode = tempNode
    }
    return head
}

// creating test list
let list = new List()
list.addToTail(1)
list.addToTail(2)
list.addToTail(3)
list.addToTail(4)
list.addToTail(1)
list.addToTail(2)
list.addToTail(6)
list.addToTail(1)

//removeDups(list.head)
//console.log(list.head.next.next)


// The below function is another version of the function.

function removeDups2(head) {
    let valueStorage = {}
    if (head === null || head.next === null) return head
    let headValue = head.value.toString()
    valueStorage[headValue] = true
    let currentNode = head
    while (currentNode !== null && currentNode.next !== null) {
        let nextValue = currentNode.next.value.toString()
        let nextNode = currentNode.next
        if (valueStorage.hasOwnProperty(nextValue)) {
            while (nextNode !== null && valueStorage.hasOwnProperty(nextNode.value.toString())) {
                nextNode = nextNode.next
            }
            currentNode.next = nextNode
        }
        else {
            valueStorage[nextValue] = true
        }
        currentNode = currentNode.next
    }
}

// creating another test list
let list2 = new List()
list2.addToTail(1)
list2.addToTail(2)
list2.addToTail(3)
list2.addToTail(4)
list2.addToTail(1)
list2.addToTail(1)
list2.addToTail(2)
list2.addToTail(6)
list2.addToTail(1)

// removeDups2(list2.head)
// console.log(list2.head)
// console.log(list2.head.next.next.next)


// The below function tackles the same problem, but in constant space. It has O(l^2) time, where l is the length of the list.

function removeDups3(head) {
    if (head === null || head.next === null) return head
    let currentNode = head
    while (currentNode.next !== null) {
        let tortoise = currentNode
        let hare = tortoise
        while (hare !== null && hare.next !== null) {
            if (hare.next.value === tortoise.value) {
                hare.next = hare.next.next
            }
            else {
                hare = hare.next
            }
        }
        currentNode = currentNode.next
    }
}

// creating another test list
let list3 = new List()
list3.addToTail(1)
list3.addToTail(2)
list3.addToTail(3)
list3.addToTail(4)
list3.addToTail(1)
list3.addToTail(1)
list3.addToTail(2)
list3.addToTail(6)
list3.addToTail(1)

removeDups3(list3.head)
console.log(list3.head)
console.log(list3.head.next.next.next)
