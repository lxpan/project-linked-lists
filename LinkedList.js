import NodeFactory from './Node.js';

class LinkedList {
    constructor() {
        this.head = NodeFactory('HEAD');
        this.length = 0;
        this.current = null;
    }

    append(value) {
        this.current = this.head;

        while(this.current.nextNode !== null) {
            this.current = this.current.nextNode;
        }

        if (this.current.nextNode == null) {
            this.current.nextNode = NodeFactory(value);
            this.length++;
        }
    }

    prepend(value) {
        const newNode = NodeFactory(value, this.head.nextNode);
        this.head.nextNode = newNode;
        this.length++;
    }

    toString() {
        this.current = this.head;
        let linkedListString = '';

        console.log(this.current);

        while(this.current.nextNode !== null) {
            linkedListString += `( ${this.current.value} ) -> `;
            // console.log(`${this.current.value}-->${this.current.nextNode.value}`);
            this.current = this.current.nextNode;
        }

        linkedListString += `( ${this.current.value} ) -> ( ${this.current.nextNode} )`;

        // console.log(`${this.current.value}-->${this.current.nextNode}`);
        console.log(`Num nodes: ${this.length}`);
        console.log(linkedListString);
    }
}

const myList = new LinkedList();
myList.append('DouDou');
myList.append('Mean Cat');
myList.prepend('John');

myList.toString();


