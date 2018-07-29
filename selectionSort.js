function findLeast(arr){
    least = arr[0];
    leastIndex = 0;
    for(let i = 0;i<=arr.length;i++){
        if(arr[i]<least){
            least = arr[i]
            leastIndex = i;
        }
    }
    return leastIndex;
}
function selectionSort(arr){
    let arr2 = Array.from(arr);
    sortedArr = [];
    for(let i=0;i<arr.length;i++){
        smallest = findLeast(arr2);
        let value = arr2.splice(smallest, 1 )[0]
        sortedArr.push(value)    
    }
    return sortedArr;
}
console.log(selectionSort([5,3,6,2,10,7]))