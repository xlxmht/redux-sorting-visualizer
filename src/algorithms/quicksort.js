let quickHistory = [];

function _quickSort(array, startIdx, lastIdx) {
    if (startIdx < lastIdx) {
        let pivotIndex = __partition(array, startIdx, lastIdx);
        _quickSort(array, startIdx, pivotIndex - 1);
        _quickSort(array, pivotIndex + 1, lastIdx);
    }
}

function __partition(array, first, last) {
    let pivotElement = array[last];
    let tempStart = first - 1;
    while (first <= last) {
        if (array[first] < pivotElement) {
            tempStart += 1;
            __swap(tempStart, first, array);
            quickHistory.push([...array])
        }
        first++;
    }
    __swap(tempStart + 1, last, array);
    quickHistory.push([...array])
    return tempStart + 1;
}

function __swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export default _quickSort;