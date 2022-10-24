import NodeFactory from './Node.js';

class LinkedList {
    constructor() {
        this.head = null; // this should be a pointer to the first node.
        this.size = 0;
    }

    append(value) {
        if (this.head == null) {
            const newNode = NodeFactory(value);
            this.head = newNode;
            this.size++;
        }

        let current = this.head;
        
        while(current.nextNode !== null) {
            current = current.nextNode;
        }

        if (current.nextNode == null) {
            current.value = value;
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

        linkedListString += `${current.nextNode}`;
        
        console.log(linkedListString);
    }
}

const myList = new LinkedList();
myList.append('DouDou');
console.log(myList.size);
myList.append('Mean Cat');
console.log(myList.size);
myList.toString();
myList.prepend('John');
myList.append('LastNode')
myList.toString();
console.log(myList.size);
