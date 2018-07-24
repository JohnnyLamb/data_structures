/* Sets */
function customSet(){
    // an array will hold the elements in the set
    let collection = [];

    // the "has" method will check if the given set has an element or not, return true if if does and false if it does not
    this.has = function(element){
        return (collection.indexOf(element)!== -1);
    }
    // this method will return all the elements in the set
    this.values = function(){
        return collection;
    }
    // this method adds and element to a given set
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element)
            return true;
        }else{
            return false;
        }
    }
    
    // this method deletes an element from the set
    this.deleteElement = function(element){
        if(this.has(element)){
            index = collection.indexOf(element)
            collection.splice(index,1)
            return true;
        }else{
            return false;
        }
    }
    // this method returns the size of the collection
    this.size = function(){
        return collection.length;
    }

}

function customSet() {
 
    // this method will return the union of two sets
    this.union = function(otherSet) {
        let unionSet = new customSet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
    // this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet) {
        let intersectionSet = new customSet();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    // this method will return the difference of two sets as a new set
    this.difference = function(otherSet) {
        let differenceSet = new customSet();
        let firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };
    // this method will test if the set is a subset of a different set
    this.subset = function(otherSet) {
        let firstSet = this.values();
        return firstSet.every(function(value) {
          return otherSet.has(value);
        });
    };
}
let setA = new customSet();  
let setB = new customSet();  
setA.add("a");  
setB.add("b");  
setB.add("c");  
setB.add("a");  
setB.add("d");  
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

let setC = new Set();  
let setD = new Set();  
setC.add("a");  
setD.add("b");  
setD.add("c");  
setD.add("a");  
setD.add("d");  
console.log(setD.values())
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));
