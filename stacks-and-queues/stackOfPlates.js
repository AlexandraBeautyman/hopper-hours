
// STACK OF PLATES

// Stack of Plates is problem 3.3 from Cracking the Coding Interview. Prompt: Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threhold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack.)

// FOLLOW UP
// Implement a function popAt() which performs a pop operation at a specific substack.

// helper Item class

class Item {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

// helper Stack class, for individual stacks

class Stack {
    constructor() {
        this.top = null
        this.nextStack = null
    }

    push(val) {
        let newTop = new Item(val)
        if (this.top !== null) {
            newTop.next = this.top
        }
        this.top = newTop
        return this
    }

    pop() {
        if (this.top === null) return this.top
        let oldTop = this.top
        this.top = oldTop.next
        return oldTop
    }
}

class SetOfStacks {
    constructor(threshold) {
        this.topStack = null
        this.threshold = threshold
        this.remainingCapacity = threshold
    }

    push(val) {
        let newTop = new Item(val)
        if (this.remainingCapacity === 0 || this.topStack === null) {
            let newStack = new Stack()
            newStack.push(newTop)
            this.remainingCapacity = this.threshold - 1
            newStack.nextStack = this.topStack
            this.topStack = newStack
        }
        else {
            this.topStack.push(newTop)
            this.remainingCapacity--
        }
        return this
    }

    pop() {
        if (this.topStack === null) return null
        if (this.remainingCapacity === this.threshold && this.topStack.nextStack === null) {
            this.topStack = null
            return null
        }
        if (this.remainingCapacity === this.threshold) {
            this.topStack = this.topStack.nextStack
            this.remainingCapacity = 1
            let itemToPop = this.topStack.pop()
            return itemToPop
        }
        let itemToPop = this.topStack.pop()
        this.remainingCapacity++
        return itemToPop
    }
}

let set = new SetOfStacks(3)
set.push(5).push(6).push(2)
console.log('after three', JSON.stringify(set)) // topStack: [top: 2, 6, 5; nextStack: null]; threshold: 3; remainingCapacity: 0

set.push(9).push(4)
console.log('after five', JSON.stringify(set)) // topStack: [top: 4, 9; nextStack: 2, 6, 5]; threshold: 3; remainingCapacity: 1

set.pop()
set.pop()
console.log('popped two of five', JSON.stringify(set)) // topStack: [top: null; nextStack: 2, 6, 5]; threshold: 3; remainingCapacity: 3

set.pop()
console.log('popped again', JSON.stringify(set)) // topStack: [top: 6, 5; nextStack: null]; threshold: 3; remainingCapacity: 1

set.push(10).push(15)
console.log('pushed again', JSON.stringify(set)) // topStack: [top: 15; nextStack: 10, 6, 5]; threshold: 3; remainingCapacity: 2
