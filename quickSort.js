// implement quick sort algorith for faster sorting that selection sort. Use the sorted array for a binarySearch
let array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const quickSort = (array) => {
    if(array.length < 2){
        return array
    }
        let pivot = array[0];
        let lesser = [];
        let greater = [];

        for(let i = 1; i < array.length; i++){
            if(array[i] < pivot){
                lesser.push(array[i])
            }else{
                greater.push(array[i])
            }
        }
     return quickSort(lesser).concat(pivot, quickSort(greater));
}


 const binarySearch = (arr,item) => {
  low = 0;
  high = arr.length-1;
  while(low<=high){

    mid = Math.floor((low+high)/2)
    guess = arr[mid];
    if(guess === item){
      console.log(arr)
      return "your item was found at index: "+mid
    }
    if(guess>item){
      high = mid-1;
    }else{
      low = mid+1;
    }

  }
  return 'not in array';

}

binarySearch(quickSort(array),10)