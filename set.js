    // Set data structure
class customSet{
        // an array will hold the elements in the set
        constructor(){

            
            let collection = [];

            // the "has" method will check if the given set has an element or not, return true if it does and false if it does not
            this.has = function(element){
                return (collection.indexOf(element)!== -1);
            }
            // this method will return all the elements in the set
            this.values = function(){
                return collection;
            }
            // this method adds an element to a given set
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
            
            // this method returns a combination of two sets without duplicates
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

            // this method will return the overlap of two sets, as a unique set
            this.overlap = function(targetSet){
                let overlapSet = new customSet();
                let firstSet = this.values();
                firstSet.forEach(function(x){
                    if(targetSet.has(x)){
                        overlapSet.add(x);
                    }
                });
                return overlapSet
            }

            // this method will return the different elements in two sets
            this.difference = function(targetSet){
                let differenceSet = new customSet();
                let firstSet = this.values();
                firstSet.forEach(function(x){
                    if(!targetSet.has(x)){
                        differenceSet.add(x);
                    }
                });
                return differenceSet;
            }

            //  this method will return a subset of two sets
            this.subSet = function(targetSet){
                let firstSet = this.values();
                return firstSet.every(function(x){
                    return targetSet.has(x)
                });
            }
    }
}


let setA = new customSet();  
let setB = new customSet();  
setA.add("a"); 
setA.add("b");
setA.add("c"); 
setA.add("d");
setA.add("g");
setB.add("d");
  
setB.add("e");  
setB.add("f");  
setB.add("g");  

let subSET = setA.subSet(setB);
let overLap = setA.overlap(setB).values();
let difference = setB.difference(setA).values();

let union = setA.union(setB).values();
console.log(overLap)
console.log(union)
console.log(difference)
console.log(subSET)