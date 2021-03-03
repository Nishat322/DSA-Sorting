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

/************************************************* Merge Sort **************************************************/
// divide and conquer approach to sorting, breaks down the array into continuously smaller chunks and then merges them back together in the correct order

//time complexity O(nlog(n))
function mergeSort(array){
    if(array.length <= 1){
        return array
    }

    const middle = Math.floor(array.length / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle, array.length)

    left = mergeSort(left)
    right = mergeSort(right)
    return merge(left, right, array)
}

function merge(left, right, array){
    let leftIndex = 0
    let rightIndex = 0
    let outputIndex = 0
    while(leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex]){
            array[outputIndex++] = left[leftIndex++]
        } else {
            array[outputIndex++] = right[rightIndex++]
        }
    }

    for (let i = leftIndex; i < left.length; i++){
        array[outputIndex++] = left[i]
    }

    for (let i = rightIndex; i < right.length; i++){
        array[outputIndex++] = right[i]
    }

    return array
}