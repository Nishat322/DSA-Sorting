/************************************************ Bubble Sort *****************************************************/
// loop through an array to find out whether the adjacent values need swapping and you keep going until there are no more values that need swapping

function swap(array, i, j) { //swaps the values
    const tmp = array[j]
    array[j] = array[i]
    array[i] = tmp
} 

//time complexity O(n^2)
function bubbleSort(array) {
    let swaps = 0
    for (let i = 0; i < array.length - 1; i++){
        if(array[i] > array[i + 1]){
            swap(array, i, i + 1)
            swaps++
        }
    }
    if (swaps > 0){
        return bubbleSort(array)
    }

    return array
}