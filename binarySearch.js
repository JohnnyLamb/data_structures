// implement binary search in Javascript
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
  


console.log(binarySearch([1,3,5,6,7,8,9,10],5));