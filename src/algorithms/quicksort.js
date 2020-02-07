import dispatchHandler from './dispatch.handler';

let quickHistory = [];

function quickSort(array, dispatch) {
    let arrayClone = [...array];
    _handleSort(arrayClone, 0, array.length - 1);
    dispatchHandler(dispatch, quickHistory);
}

function _handleSort(array, startIdx, lastIdx) {
    if (startIdx < lastIdx) {
        let pivotIndex = __partition(array, startIdx, lastIdx);
        _handleSort(array, startIdx, pivotIndex - 1);
        _handleSort(array, pivotIndex + 1, lastIdx);
    }
}

function __partition(array, first, last) {
    let pivotElement = array[last];
    let tempStart = first - 1;
    while (first <= last - 1) {
        if (first !== last - 1) {
            quickHistory.push([first, last - 1]); /* To track current two bubble */
        }
        if (array[first] < pivotElement) {
            tempStart += 1;
            quickHistory.push([tempStart, first, true]); /* To track current swapper */
            __swap(tempStart, first, array);
            if (tempStart !== first) {
                quickHistory.push([...array])
            }
            quickHistory.push([]);
        }
        first++;
    }
    if (tempStart + 1 !== last) {
        quickHistory.push([tempStart + 1, last, true]);
    }
    __swap(tempStart + 1, last, array);
    if (tempStart + 1 !== last) {
        quickHistory.push([...array])
    }
    quickHistory.push([]);
    return tempStart + 1;
}

function __swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export default quickSort;