import NodeFactory from './Node.js';

class LinkedList {
    constructor() {
        this.head = null; // this should be a pointer to the first node.
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        // Initialise very first created node as the head
        if (this.head == null) {
            const firstNode = NodeFactory(value);
            this.head = firstNode;
            this.tail = firstNode;
            this.size++;
            return;
        }

        let current = this.head;
        
        // traverse list until tail node is reached
        while(current.nextNode !== null) {
            current = current.nextNode;
        }

        // add new node to tail node
        if (current.nextNode == null) {
            const newNode = NodeFactory(value);
            current.nextNode = newNode;
            this.tail = current.nextNode;
            this.size++;
        }
    }

    // add new node to start of life
    prepend(value) {
        const newNode = NodeFactory(value, this.head);
        this.head = newNode;
        this.size++;
    }

    // index starts at 1 (head node)
    at(index) {
        let current = this.head;
        let i = 1;
        
        // traverse list until tail node is reached
        while(current !== undefined) {
            if (i == index) {
                return current;
            }

            current = current.nextNode;
            i += 1;
        }
    }

    // removes and returns the last element from the list
    pop() {
        const lastNode = this.tail;
        const secondToLastNode = this.at(this.size - 1);
        
        secondToLastNode.nextNode = null;
        this.tail = secondToLastNode;
        return lastNode;
    }

    contains(value) {
        let current = this.head;
        
        // traverse list until tail node is reached
        while(current !== null) {
            if (current.value == value) {
                return true;
            }
            current = current.nextNode;
        }
        
        return false;
    }

    // string representation of linked list
    toString() {
        let current = this.head;
        let linkedListString = '';

        while(current.nextNode !== null) {
            linkedListString += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        // final node needs to be added
        const tailString = `( ${current.value} ) -> ${current.nextNode}`;
        linkedListString += tailString;
        
        console.log(linkedListString);
    }
}

const myList = new LinkedList();
myList.append('DouDou');
myList.append('Mean Cat');
myList.prepend('John');
myList.append('LastNode')
// myList.toString();
// console.log(myList.at(2));
// console.log(myList.pop());
myList.toString();
console.log(myList.contains(111));
// console.log(myList.size);
// console.log(myList.head);
// console.log(myList.tail);
