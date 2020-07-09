class Node {
    private value: string;
    private next: Node;
    private previous: Node;

    constructor(value: string, next: Node, previous: Node) {
        this.value = value;
        this.next = next;
        this.previous = previous
    }

    getNext() {
        return this.next;
    }

    setNext(node: Node) {
        this.next = node;
    }

    getPrevious() {
        return this.previous;
    }

    setPrevious(node: Node) {
        this.previous = node;
    }

    getValue() {
        return this.value;
    }

    setValue(value: string) {
        this.value = value;
    }
}