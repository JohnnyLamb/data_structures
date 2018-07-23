// implement binary search in Javascript
function binarySearch(list,item){
    
    low = 0;

    high = list.length-1;

    while(low <= high){

        mid = Math.floor((low+high)/2);

        guess = list[mid];

        if(guess === item){

            return mid;

        }else if(guess > item){

            high = mid-1;

        }else{

            low = mid+1;
        }
    }
    return "not in ARRAY"

}

console.log(binarySearch([1,3,5,6,7,8,9,10],5));