//  implement a Queue data structure

class Queue {
    constructor(){
        const storage = [];

        this.print = () => {
            return storage;
        }

        this.enqueue = (item) => {
            return storage.push(item);
        }

        this.dequeue = () => {
            return storage.shift();
        }

        this.front = () => {
            return storage[0];
        }

        this.size = () => {
            return storage.length;
        }

        this.isEmpty = () => {
            return (storage.length === 0);
        }
    }
}

var myQueue = new Queue(); 
myQueue.enqueue(5);
myQueue.enqueue(1); 
myQueue.enqueue(2);
myQueue.enqueue(4);
myQueue.print();
myQueue.dequeue();
console.log(myQueue.front());
console.log(myQueue.print());