
// SORT STACK

// Sort Stack is problem 3.5 from Cracking the Coding Interview. Prompt: Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.

// helper Item class

class Item {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

// helper Stack class

class Stack {
    constructor() {
        this.head = null
    }

    push(val) {
        let newItem = new Item(val)
        if (this.head === null) {
            this.head = newItem
        }
        else {
            newItem.next = this.head
            this.head = newItem
        }
        return this
    }

    pop() {
        if (this.head === null) return null
        let popItem = this.head
        this.head = this.head.next
        return popItem
    }

    peek() {
        return this.head
    }

    isEmpty() {
        return (this.head === null)
    }
}

// Test stacks

let stack0 = new Stack()
let stack1 = new Stack()
stack1.push(10)
let stack2 = new Stack()
stack2.push(4).push(6)
let stack3 = new Stack()
stack3.push(8).push(13).push(1)
let stack6 = new Stack()
stack6.push(7).push(3).push(15).push(8).push(2).push(21)


// This function is a brute force attempt that sorts the stack very slowly, by stepping through it once for each node in the stack, finding the largest value each time, and building a new stack with those values. It has n^2 time complexity.

function sortStack(stack) {
    if (stack.head === null || stack.head.next === null) return stack.head
    let highestValueNode = stack.head
    let pointsToHighest = null
    let currentNode = stack.head
    let newStack = new Stack()
    while (stack.head !== null) {
        while (currentNode !== null && currentNode.next !== null) {
            if (currentNode.next.value > highestValueNode.value) {
                highestValueNode = currentNode.next
                pointsToHighest = currentNode
            }
            currentNode = currentNode.next
        }
        newStack.push(highestValueNode.value)
        if (pointsToHighest === null) {
            stack.head = stack.head.next

        }
        else {
            pointsToHighest.next = pointsToHighest.next.next
        }
        currentNode = stack.head
        highestValueNode = stack.head
        pointsToHighest = null
    }
    return newStack
}

// console.log('\nstack6 sorted\n', JSON.stringify(sortStack(stack6)))
// console.log('\nstack3 sorted\n', JSON.stringify(sortStack(stack3)))
// console.log('\nstack2 sorted\n', JSON.stringify(sortStack(stack2)))
// console.log('\nstack1 sorted\n', JSON.stringify(sortStack(stack1)))
// console.log('\nstack0 sorted\n', JSON.stringify(sortStack(stack0)))


// The below function uses the quick sort method to sort the stack.

function quickSortStack(stack) {
    // base case is when the stack is empty or only has one item
    if (stack.head === null || stack.head.next === null) {
        return stack
    }
    // in the recursive case, we break apart the smaller and larger values
    let pivot = stack.head
    let currentItem = stack.head
    let smaller = new Stack()
    let larger = new Stack()
    while (currentItem.next !== null) {
        if (currentItem.next.value >= pivot.value) {
            larger.push(currentItem.next.value)
        }
        else {
            smaller.push(currentItem.next.value)
        }
        currentItem = currentItem.next
    }
    let sortedSmaller = quickSortStack(smaller)
    let sortedLarger = quickSortStack(larger)
    sortedLarger.push(pivot.value)
    let currentSmallItem = sortedSmaller.head
    while (currentSmallItem !== null && currentSmallItem.next !== null) {
        currentSmallItem = currentSmallItem.next
    }
    if (currentSmallItem === null) {
        sortedSmaller.head = sortedLarger.head
    }
    else {
        currentSmallItem.next = sortedLarger.head
    }
    return sortedSmaller
}

// console.log('\nstack6 sorted\n', JSON.stringify(quickSortStack(stack6)))
// console.log('\nstack3 sorted\n', JSON.stringify(quickSortStack(stack3)))
// console.log('\nstack2 sorted\n', JSON.stringify(quickSortStack(stack2)))
// console.log('\nstack1 sorted\n', JSON.stringify(quickSortStack(stack1)))
// console.log('\nstack0 sorted\n', JSON.stringify(quickSortStack(stack0)))


// The below function uses the merge sort method. I considered writing an adapted version of the merge sort function for stacks, but merging two sorted stacks together is significantly less simple of a process than merging two sorted arrays.
