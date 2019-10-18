
// IMPLEMENT QUEUE

// Implement a queue (first in, first out) using a Javascript class.

// Required methods:
// add() adds an item to the end of the list
// remove() removes the first item in the list
// peek() returns the top of the queue
// isEmpty() returns whether the queue is empty

class Item {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
    }
    add(val) {
        let newItem = new Item(val)
        if (this.first === null) {
            this.first = newItem
            this.last = newItem
        }
        else {
            this.last.next = newItem
            this.last = newItem
        }
        return this
    }
    remove() {
        if (this.first === null) return null
        let toBeServed = this.first
        if (this.first === this.last) {
            this.first = null
            this.last = null
        }
        else {
            this.first = this.first.next
        }
        return toBeServed
    }
    peek() {
        return this.first
    }
    isEmpty() {
        if (this.first === null) return true
        return false
    }
}

let queue = new Queue()
console.log(queue.isEmpty()) // true
queue.add(0).add(1).add(2).add(3).add(4).add(5)
console.log(JSON.stringify(queue)) // 0 => 1 => 2 => 3 => 4 => 5
console.log(queue.peek())
queue.remove()
console.log(JSON.stringify(queue)) // 1 => 2 => 3 => 4 => 5
console.log(queue.isEmpty()) // false
