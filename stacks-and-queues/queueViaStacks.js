
// QUEUE VIA STACKS

// Queue Via Stacks is problem 3.4 from Cracking the Coding Interview. The prompt: Implement a MyQueue class which implements a queue using two stacks.

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

class MyQueue {

    constructor() {
        this.frontStack = new Stack()
        this.backStack = new Stack()
    }

    reverse() {
        while (!this.backStack.isEmpty()) {
            let currentItem = this.backStack.pop()
            this.frontStack.push(currentItem.value)
        }
    }

    push(val) {
        this.backStack.push(val)
        return this
    }

    pop() {
        if (this.backStack.isEmpty() && this.frontStack.isEmpty()) return null
        if (this.frontStack.isEmpty()) this.reverse()
        return this.frontStack.pop()
    }
}

// Tests

let queue = new MyQueue()
queue.pop()
queue.push(10).push(46).push(8).push(4).push(19)
console.log('\ninitial full back, empty front\n', JSON.stringify(queue)) // frontStack: null; backStack: 19 => 4 => 8 => 46 => 10
queue.pop()
console.log('\nafter first pop\n', JSON.stringify(queue)) // frontStack: 46 => 8 => 4 => 19; backStack: null
queue.pop()
queue.pop()
queue.pop()
queue.pop()
queue.pop()
console.log('\nall popped away\n', JSON.stringify(queue)) // frontStack: null; backStack: null
queue.push(49)
console.log('\npushed one more\n', JSON.stringify(queue)) // frontStack: null; backStack: 49
