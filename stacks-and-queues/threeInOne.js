
// THREE IN ONE

// Three in One is problem 3.1 from Cracking the Coding Interview. Prompt: Describe how you could use a single array to implement three stacks.

let stack1Top = 6
let stack2Top = 5
let stack3Top = 4

let stacks = [
    {value: 4, next: null},
    {value: 7, next: null},
    {value: 9, next: 0},
    {value: 2, next: null},
    {value: 0, next: 3},
    {value: 3, next: 1},
    {value: 4, next: 2}
]

// to add to stack 1
stacks[stacks.length] = {value: 5, next: stack1Top}
stack1Top = stacks.length - 1

console.log(stacks)

// Basically you keep track of the top of the stack by referencing the index in the array of the top of that stack. To add to the stack, you push a new item into the end of the array and assign its next value to the previous top. Then you reassing the top value to the new index.
// To remove an item, you would use its next value to identify where to reassign the top pointer. Then you could reassign that index in the array to null, or honestly just leave it there.
// For isEmpty, you would make sure that the top pointer is a positive integer.
// For peeking, you would pull the item using the top pointer and accessing that index in the array.
