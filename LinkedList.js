import NodeFactory from './Node.js';


class LinkedList {
    constructor() {
        this.head = null; // this should be a pointer to the first node.
        this.tail = null;
        this.size = 0;
    }

    *[Symbol.iterator]() {
        let current = this.head;
        while (current !== undefined) {
            // result = current;
            if (current !== null) {
                yield current;   
                current = current.nextNode; 
            } else {
                yield null;
                return;
            }
            
        }   
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

        for (const node of this) {
            if (node.nextNode == null) {
                this.tail = NodeFactory(value);
                node.nextNode = this.tail;
                this.size++;
                return;
            }
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

    find(value) {
        let current = this.head;
        let i = 1;
        
        // traverse list until tail node is reached
        while(current !== null) {
            if (current.value == value) {
                return i;
            }
            current = current.nextNode;
            i += 1;
        }
        
        return null;
    }

    // string representation of linked list
    toString() {
        let linkedListString = '';

        for (const node of this) {
            linkedListString += (node == null) ? 'null' : `( ${node.value} ) -> `;
        }

        console.log(linkedListString);
    }
}

const myList = new LinkedList();
myList.append('DouDou');
myList.append('Mean Cat');
myList.prepend('John');
myList.append('LastNode')
// console.log(myList.at(2));
// console.log(myList.pop());
myList.toString();
console.log(myList.size);
