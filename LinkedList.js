import NodeFactory from './Node.js';

class LinkedList {
    constructor() {
        this.head = null; // this should be a pointer to the first node.
        this.size = 0;
    }

    append(value) {
        // Initialise very first created node as the head
        if (this.head == null) {
            const firstNode = NodeFactory(value);
            this.head = firstNode;
            this.size++;
            return;
        }

        let current = this.head;
        
        // traverse linked list until next node pointer is null
        while(current.nextNode !== null) {
            current = current.nextNode;
        }

        if (current.nextNode == null) {
            current.nextNode = NodeFactory(value);
            this.size++;
        }
    }

    prepend(value) {
        const newNode = NodeFactory(value, this.head);
        this.head = newNode;
        this.size++;
    }

    toString() {
        let current = this.head;
        let linkedListString = '';

        while(current.nextNode !== null) {
            linkedListString += `( ${current.value} ) -> `;
            current = current.nextNode;
        }

        linkedListString += `( ${current.value} ) -> ${current.nextNode}`;
        
        console.log(linkedListString);
    }
}

const myList = new LinkedList();
myList.append('DouDou');
myList.append('Mean Cat');
// myList.prepend('John');
myList.append('LastNode')
myList.toString();
console.log(myList.size);
