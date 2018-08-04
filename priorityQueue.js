//  implement a Priority Queue data structure

class PriorityQueue {
    constructor(){
        const storage = [];

        this.print = () => {
            return storage;
        }

        this.enqueue = (item) => {
            if(this.isEmpty()){
                storage.push(item)
            }else{
                let added = false;
                for(let i = 0; i<storage.length; i++){
                    if(item[1] < storage[i][1]){
                        storage.splice(i,0,item)
                        added = true;
                        break;
                    }
                }
                if(!added){
                    storage.push(item)
                }
            } 
        }

        this.dequeue = () => {
            let value = storage.shift();
            return value[0];
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

var myPriorityQueue = new PriorityQueue(); 
myPriorityQueue.enqueue('johnny',5);
myPriorityQueue.enqueue('sophie',1); 
myPriorityQueue.enqueue('steph',2);
myPriorityQueue.enqueue('dog',4);
myPriorityQueue.print();
myPriorityQueue.dequeue();
console.log(myPriorityQueue.front());
console.log(myPriorityQueue.print());