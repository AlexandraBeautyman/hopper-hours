// ANIMAL SHELTER

// Animal Shelter is problem 3.6 from Cracking the Coding Interview. Prompt: An animal shelter, which holds only dogs and cats, operates on a strictly "first in, first out" basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built-in LinkedList data structure.
// The last sentence in the prompt is not relevant for Javascript implementations.


// Below is an implementation that uses a single queue to hold both cats and dogs.
class Pet {
    constructor(type) {
        this.type = type
        this.next = null
    }
}

class Shelter {
    constructor() {
        this.oldest = null
    }

    enqueue (type) {
        const newAnimal = new Pet(type)
        if (this.isEmpty()) {
            this.oldest = newAnimal
        }
        else {
            let currentAnimal = this.oldest
            while (currentAnimal.next !== null) {
                currentAnimal = currentAnimal.next
            }
            currentAnimal.next = newAnimal
        }
        return this
    }

    dequeue (type) {
        if (this.isEmpty()) {
            return null
        }
        else if (type === 'cat') {
            return this.dequeueCat()
        }
        else if (type === 'dog') {
            return this.dequeueDog()
        }
        else {
            return this.dequeueAny()
        }
    }

    dequeueCat() {
        if (this.oldest.type === 'cat') {
            let adoptedCat = this.oldest
            this.oldest = adoptedCat.next
            return adoptedCat
        }
        let previousAnimal = this.oldest
        let currentAnimal = this.oldest.next
        while (currentAnimal !== null && currentAnimal.type !== 'cat') {
            previousAnimal = currentAnimal
            currentAnimal = currentAnimal.next
        }
        if (currentAnimal === null) {
            return null
        }
        previousAnimal.next = currentAnimal.next
        return currentAnimal
    }

    dequeueDog() {
        if (this.oldest.type === 'dog') {
            let adoptedCat = this.oldest
            this.oldest = adoptedCat.next
            return adoptedCat
        }
        let previousAnimal = this.oldest
        let currentAnimal = this.oldest.next
        while (currentAnimal !== null && currentAnimal.type !== 'dog') {
            previousAnimal = currentAnimal
            currentAnimal = currentAnimal.next
        }
        if (currentAnimal === null) {
            return null
        }
        previousAnimal.next = currentAnimal.next
        return currentAnimal
    }

    dequeueAny() {
        let adoptedAnimal = this.oldest
        this.oldest = adoptedAnimal.next
        return adoptedAnimal
    }

    isEmpty() {
        if (this.oldest === null) return true
        return false
    }

    peek () {
        if (this.isEmpty()) return null
        return this.oldest.type
    }
}

// Below is a solution that uses two queues adapted from the Java solution in Cracking the Coding Interview.

class Animal {
    constructor(name) {
        this.name = name
        this.date = null
        this.next = null
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
    }
}

class Queue {
    constructor() {
        this.front = null
    }

    enqueue(animal) {
        if (this.isEmpty()) {
            this.front = animal
        }
        else {
            let currentAnimal = this.front
            while (currentAnimal.next !== null) {
                currentAnimal = currentAnimal.next
            }
            currentAnimal.next = animal
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        let oldFront = this.front
        this.front = this.front.next
        return oldFront
    }

    peek() {
        return this.front
    }

    isEmpty() {
        return (this.front === null)
    }
}

class AnimalQueue {
    constructor() {
        this.cats = new Queue()
        this.dogs = new Queue()
    }

    enqueue(animal) {
        animal.date = new Date()
        if (animal instanceof Dog) {
            this.dogs.enqueue(animal)
        }
        else if (animal instanceof Cat) {
            this.cats.enqueue(animal)
        }
        return this
    }

    dequeueAny() {
        if (this.dogs.isEmpty()) {
            return this.dequeueCats()
        }
        else if (this.cats.isEmpty()) {
            return this.dequeueDogs()
        }
        if (this.dogs.front.date < this.cats.front.date) {
            return this.dequeueDogs()
        }
        else {
            return this.dequeueCats()
        }
    }

    dequeueDogs() {
        return this.dogs.dequeue()
    }

    dequeueCats() {
        return this.cats.dequeue()
    }
}

let shelter = new AnimalQueue()
shelter.enqueue(new Dog('Spot the Dog'))
.enqueue(new Dog('Ralph the Dog'))
.enqueue(new Cat('Paris the Cat'))
.enqueue(new Dog('Sally the Dog'))
.enqueue(new Cat('Lucy the Cat'))

console.log(shelter.dequeueAny())

console.log(JSON.stringify(shelter))
