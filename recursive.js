// implement a recursive summing function
function sum(arr){
    if (arr.length <= 0){
      return 0;
    }
    else{
      return arr[0]+sum(arr.splice(1))
    }
  }
  console.log(sum([4,6,3]))
  
//   implement factorial 5*4*3*2*1
  function factorial(num){
    if(num <=1){return num}
    else{
        return num*=factorial(num-1)
    }
  }
  console.log(factorial(5))