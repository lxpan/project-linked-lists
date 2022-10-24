import NodeFactory from './Node.js';

class LinkedList {
    constructor() {
        this.head = NodeFactory();
        this.length = 0;
    }

    prepend(value) {
        const newNode = NodeFactory(value, this.head);
        this.head = newNode;
        this.length++;
    }
}

const myList = new LinkedList();
myList.prepend('John');
myList.prepend('Johannes');
myList.prepend('Johanna');
console.log(myList);



