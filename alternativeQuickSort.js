
let myArray = [3, 0, 232, 5, -1, 4 ];
const quick_Sort = (arr) => {
 
  let less=[]
  let pivotList = []
  let more = []

  if(arr.length < 2){
    return arr
  } else {
    pivot = arr[0]
    for(let i=0;i<arr.length;i++){
      if (arr[i] < pivot){
        less.push(arr[i])
      }
      else if(arr[i] > pivot){
        more.push(arr[i])
      }
      else{
        pivotList.push(arr[i])
      }
    }
    
   return quick_Sort(less).concat(pivotList).concat(quick_Sort(more));
  }
}

console.log("Original array: " + myArray);
let sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);