const hash = (string,maxIndices) => {
    let hash = 0;
    for(let i = 0; i<string.length; i++){
        hash+= string.charCodeAt(i);
    }
    return hash % maxIndices;
}

console.log(hash('ikdkdd',111));

const hashTable = () => {
    let storage = [];
    let arrayLimit = 4;

    this.print = () => {
        console.log(storage)
    }

}