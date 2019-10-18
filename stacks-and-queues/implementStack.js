
// IMPLEMENT STACK

// Create a Stack (last in, first out) implementation using a Javascript class.

// Required methods:
// pop() removes the top item from the stack
// push() add an item to the top of the stack
// peek() returns the top item in the stack
// isEmpty() returns whether the stack is empty

class Item {
    constructor(val) {
        this.value = val
        this.below = null
    }
}

class Stack {
    constructor() {
        this.top = null
    }
    push(val) {
        let item = new Item(val)
        item.below = this.top
        this.top = item
        return this
    }
    pop() {
        if (this.top === null) return null
        let topItem = this.top
        this.top = topItem.below
        return topItem
    }
    peek() {
        return this.top
    }
    isEmpty() {
        if (this.top === null) return true
        return false
    }
}

let stack = new Stack()
console.log(stack.isEmpty()) // true
stack.push(0).push(1).push(2).push(3).push(4).push(5)
console.log(JSON.stringify(stack)) // 5 => 4 => 3 => 2 => 1 => 0 => null
console.log(stack.peek()) // 5
stack.pop()
console.log(JSON.stringify(stack)) // 4 => 3 => 2 => 1 => 0 => null
console.log(stack.isEmpty()) // false
