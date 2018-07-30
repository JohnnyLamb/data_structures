// implement quick sort algorith for faster sorting that selection sort.
let array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
function quickSort(array){
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
console.log(quickSort(array))