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

    printList() {
        this.current = this.head;
        console.log(this.current);

        while(this.current.nextNode !== null) {
            console.log(`${this.current.value}-->${this.current.nextNode.value}`);
            this.current = this.current.nextNode;
        }

        console.log(`${this.current.value}-->${this.current.nextNode}`);
        console.log(`Num nodes: ${this.length}`);
    }
}

const myList = new LinkedList();
myList.append('DouDou');
myList.append('Mean Cat');
myList.prepend('John');

myList.printList();




