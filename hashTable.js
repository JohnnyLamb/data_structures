const hash = (string,maxIndices) => {
    let hash = 0;
    for(let i = 0; i<string.length; i++){
        hash+= string.charCodeAt(i);
    }
    return hash % maxIndices;
}

// console.log(hash('ikdkdd',111));

class hashTable {
    constructor(){

        let storage = [];
        let arrayLimit = 14;

        // method to show what is in the hashTable
        this.print = () => {
            return storage
        }
        // method to add key:value pair to the hashTable
        this.add = (key, value) => {
            var index = hash(key, arrayLimit);
            if (storage[index] === undefined) {
                storage[index] = [
                    [key, value]
                ];
            } else {
                var inserted = false;
                for (var i = 0; i < storage[index].length; i++) {
                    if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                    }
                }
                if (inserted === false) {
                    storage[index].push([key, value]);
                }
            }
        };
        // method to remove pair from the table
        this.remove = (key) =>{
            let index = hash(key,arrayLimit)
            if(storage[index].length === 1 && storage[index][0][0]===key){
                delete storage[index]
            }else{
                for(let i = 0; i < storage[index].length;i++){
                    if(storage[index][i][0] === key){
                        delete storage[index][i]
                    }
                }
            }        
        }
        // this method allows constant time lookups
        this.lookup = (key) => {
            let index = hash(key,arrayLimit)   
            if(storage[index]===undefined){
                return undefined
            }else{
                for(let i = 0;i<storage[index].length; i++){
                    if(storage[index][i][0]===key){
                        return storage[index][i][1]
                    }
                }
            }
        }

    }
}
// hash('johnny',53)
let myHash = new hashTable();
myHash.add('johnny', 'male');
myHash.add('stephanie', 'female');
myHash.add('sophie', 'female');
myHash.add('river', 'dog')
console.log(myHash.lookup('river'))
console.log(myHash.print());