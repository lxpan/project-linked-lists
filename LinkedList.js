import NodeFactory from './Node.js';

class LinkedList {
    constructor() {
        this.head = null; // this should be a pointer to the first node.
        this.tail = null;
        this.size = 0;
    }

    * [Symbol.iterator]() {
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
            this.size += 1;
            return;
        }

        for (const node of this) {
            if (node.nextNode == null) {
                this.tail = NodeFactory(value);
                node.nextNode = this.tail;
                this.size += 1;
                return;
            }
        }
    }

    // add new node to start of life
    prepend(value) {
        const newNode = NodeFactory(value, this.head);
        this.head = newNode;
        this.size += 1;
    }

    // index starts at 1 (head node)
    at(index) {
        let i = 1;

        for (const node of this) {
            if (i == index) {
                return node;
            }
            i += 1;
        }
    }

    // removes and returns the last element from the list
    pop() {
        const lastNode = this.tail;
        const secondToLastNode = this.at(this.size - 1);

        secondToLastNode.nextNode = null;
        this.tail = secondToLastNode;
        this.size -= 1;
        return lastNode;
    }

    contains(value) {
        // traverse list until tail node is reached
        for (const node of this) {
            if (node !== null && node.value == value) {
                return true;
            }
        }

        return false;
    }

    find(value) {
        let i = 1;

        for (const node of this) {
            if (node !== null && node.value == value) {
                return i;
            }
            i += 1;
        }
        return null;
    }

    // string representation of linked list
    toString() {
        let linkedListString = '';

        for (const node of this) {
            linkedListString += node == null ? 'null' : `( ${node.value} ) -> `;
        }

        console.log(linkedListString);
    }

    insertAt(value, index) {
        /*
        nodeBeforeIndex -> NewNode -> nodeAtIndex
        */
        const nodeAtIndex = this.at(index);
        const newNode = NodeFactory(value, nodeAtIndex);

        // equivalent to prepending
        if (index == 1) {
            this.prepend(value);
        } else {
            const nodeBeforeIndex = this.at(index - 1);
            nodeBeforeIndex.nextNode = newNode;
            this.size += 1;
        }
    }

    removeAt(index) {
        // first case: head node
        if (index == 1) {
            this.head = this.head.nextNode;
            this.size -= 1;
        }
        // second case: tail node
        else if (index == this.size) {
            this.pop();
        }
        // third case: node in-between head and tail
        else {
            const nodeBeforeIndex = this.at(index - 1);
            let nodeToDelete = this.at(index);
            const nodeAfterIndex = this.at(index + 1);

            nodeBeforeIndex.nextNode = nodeAfterIndex;
            // this allows deleted node to be garbage collected in strict mode
            nodeToDelete = null;
            this.size -= 1;
        }
    }
}

const myList = new LinkedList();
myList.append('DouDou');
myList.append('Mean Cat');
myList.prepend('John');
myList.append('LastNode');
myList.insertAt('FatCats', 1);
myList.removeAt(3);
// console.log(myList.at(3));
// console.log(myList.contains('Mean Cat'));
// console.log(myList.find(null));
// console.log(myList.pop());
myList.toString();
console.log(`List size: ${myList.size}`);
