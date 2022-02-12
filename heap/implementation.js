function heapify(arr) {
    for (let i = arr.length-1 ; i >= 0 ; --i) {

    }
}

function getParent(index) {
    return Math.floor((index-1)/2);
}

function getLeft(index) {
    return 2*index + 1;
}


function getRight(index) {
    return 2*index + 2;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapifyNew(arr) {
    let last = arr.length - 1;
    let parent = getParent(last);
    while(last > parent && arr[last] < arr[parent]) {
        let temp = arr[last];
        arr[last] = arr[parent];
        arr[parent] = temp;
        last = parent;
        parent = getParent(last);
    }

    return arr;
}

function minHeapify(arr, i) {
    let left;
    let right;
    let minIndex = i;

    do {
        swap(arr, i, minIndex);
        i = minIndex;
        left = getLeft(i);
        right = getRight(i);

        if (arr[left] < arr[i] && arr[left] < arr[right]) {
            minIndex = left;
        } else if (arr[right] < arr[i] && arr[left] > arr[right]) {
            minIndex = right;
        }
    } while(minIndex !== i);
}

function extractMin(heap) {
    if (heap.length === 0) {
        return Number.MIN_VALUE;
    }

    if (heap.length === 1) {
        return heap.pop();
    }

    let val = heap[0];
    heap[0] = heap.pop();
    minHeapify(heap, 0);

    return val;
}

function buildHeap(arr) {
    for (let i = Math.floor((arr.length - 2)/2) ; i >= 0 ; --i) {
        minHeapify(arr, i);
    }

    console.log(arr);
}

let arr = [10, 12, 1, 5, 3, 7, 8, 9];
buildHeap(arr);

// let heap = [40, 20, 30, 35, 25, 100, 70, 60, 80, 32];
// function insert(val) {
//     heap.push(val);
//     heapifyNew(heap);
// }

// console.log(minHeapify(heap, 0));
// console.log(heap);