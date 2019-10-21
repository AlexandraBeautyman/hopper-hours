
// STACK MIN

// Stack Min is problem 3.2 from Cracking the Coding Interview. Prompt: How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element. Push, pop, and min should all operate in O(1) time.

class Item {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.min = []
    }
    push(val) {
        let newTop = new Item(val)
        if (this.top === null) {
            this.top = newTop
            this.min.push(newTop)
        }
        else {
            newTop.next = this.top
            this.top = newTop
            if (this.top.value < this.min[this.min.length - 1].value) {
                this.min.push(this.top)
            }
        }
        return this
    }

    pop() {
        if (this.top === null) return null
        let oldTop = this.top
        if (oldTop === this.min[this.min.length - 1]) {
            this.min.pop()
        }
        this.top = oldTop.next
        return oldTop
    }

    min() {
        return this.min[this.min.length - 1]
    }
}

// Test stacks

let stack0 = new Stack
let stack1 = new Stack
stack1.push(7).push(6).push(2).push(5).push(1).push(9)
console.log(JSON.stringify(stack1)) // 9, 1, 5, 2, 6, 7; min = [7, 6, 2, 1]
stack1.pop()
stack1.pop()
console.log(JSON.stringify(stack1)) // 5, 2, 6, 7; min = [7, 6, 2]
