
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
        this.stacks = []
        this.threshold = threshold
        this.remainingCapacity = []
    }

    push(val) {
        let newTop = new Item(val)
        if (this.stacks.length === 0 || this.remainingCapacity[this.remainingCapacity.length - 1] === 0) {
            let newStack = new Stack()
            newStack.push(newTop)
            this.remainingCapacity.push(this.threshold - 1)
            this.stacks.push(newStack)
        }
        else {
            this.stacks[this.stacks.length - 1].push(newTop)
            this.remainingCapacity[this.remainingCapacity.length - 1]--
        }
        return this
    }

    pop() {
        if (this.stacks.length === 0) return null
        if (this.remainingCapacity[this.remainingCapacity.length - 1] === this.threshold && this.stacks.length === 1) {
            this.stacks = []
            this.remainingCapacity = []
            return null
        }
        if (this.remainingCapacity[this.remainingCapacity.length - 1] === this.threshold) {
            this.stacks.pop()
            this.remainingCapacity.pop()
            let itemToPop = this.stacks[this.stacks.length - 1].pop()
            this.remainingCapacity[this.remainingCapacity.length - 1]++
            return itemToPop
        }
        let itemToPop = this.stacks[this.stacks.length - 1].pop()
        this.remainingCapacity[this.remainingCapacity.length - 1]++
        return itemToPop
    }

    popAt(index) {
        if (index < 0 || index >= this.stacks.length) return null
        let targetStack = this.stacks[index]
        let poppedItem = targetStack.pop()
        if (poppedItem !== null) {
            this.remainingCapacity[index]++
        }
        return poppedItem
    }
}

let set = new SetOfStacks(3)
set.push(5).push(6).push(2)
console.log('after three\n', JSON.stringify(set)) // stacks: [{2, 6, 5}]; threshold: 3; remainingCapacity: [0]

set.push(9).push(4)
console.log('\nafter five\n', JSON.stringify(set)) // stacks: [{2, 6, 5}, {4, 9}]; threshold: 3; remainingCapacity: [0, 1]

set.pop()
set.pop()
console.log('\npopped two of five\n', JSON.stringify(set)) // stacks: [{2, 6, 5}, {}]; threshold: 3; remainingCapacity: [0, 3]

set.pop()
console.log('\npopped again\n', JSON.stringify(set)) // stacks: [{6, 5}]; threshold: 3; remainingCapacity: [1]

set.push(10).push(15)
console.log('\npushed again\n', JSON.stringify(set)) // stacks: [{10, 6, 5}, {15}]; threshold: 3; remainingCapacity: [0, 2]

console.log('\npopped val\n', set.popAt(0)) // 10
console.log('\nset\n', JSON.stringify(set)) // stacks: [{6, 5}, {15}]; threshold: 3; remainingCapacity: [1, 2]

set.pop()
set.pop()
console.log('\ntwo more pops\n', JSON.stringify(set)) // stacks: [{5}]; threshold: 3; remainingCapacity: [2]

set.push(4).push(8).push(7).push(57).push(24).push(17)
console.log('\nmore pushes\n', JSON.stringify(set)) // stacks: [{8, 4, 5}, {24, 57, 7}, {17}]; threshold: 3; remainingCapacity: [0, 0, 2]
