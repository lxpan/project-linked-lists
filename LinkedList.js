import NodeFactory from './Node.js';

class LinkedList {
    constructor() {
        this.head = null; // this should be a pointer to the first node.
        this.length = 0;
    }

    append(value) {
        if (this.head == null) {
            const newNode = NodeFactory(value);
            this.head = newNode;
            this.length++;
        }

        let current = this.head;
        
        while(current.nextNode !== null) {
            current = current.nextNode;
        }

        if (current.nextNode == null) {
            current.value = value;
            current.nextNode = NodeFactory(value);
        }
    }

    prepend(value) {
        const newNode = NodeFactory(value, this.head);
        this.head = newNode;
        this.length++;
    }

    toString() {
        let current = this.head;
        let linkedListString = '';

        while(current.nextNode !== null) {
            linkedListString += `( ${current.value} ) -> `;
            current = current.nextNode;
        }

        linkedListString += `${current.nextNode}`;
        
        console.log(linkedListString);
    }
}

const myList = new LinkedList();
myList.append('DouDou');
myList.append('Mean Cat');
myList.toString();
myList.prepend('John');
myList.toString();

// myList.toString();
// console.log(myList);
