import dispatchHandler from './dispatch.handler';

const bubbleSort = (array, dispatch) => {
    let arrayClone = [...array];
    let swapHistory = [];
    let isSwapped = true;
    while (isSwapped) {
        isSwapped = false;
        for (let i = 0; i < arrayClone.length - 1; i++) {
            swapHistory.push([i, i + 1]); /* To track current two bubbles */
            if (arrayClone[i] > arrayClone[i + 1]) {
                swapHistory.push([i, i + 1, true]); /* To track current swapper */
                let temp = arrayClone[i];
                arrayClone[i] = arrayClone[i + 1];
                arrayClone[i + 1] = temp;
                isSwapped = true;
                swapHistory.push([...arrayClone]); /* To track changes in state of array after swapping (keeping history of swaps) */
                swapHistory.push([]);
            }
        }
    }
    _handleDispatch(dispatch, swapHistory);
}

function _handleDispatch(dispatch, swapHistory) {
    return dispatchHandler(dispatch, swapHistory);
}

export default bubbleSort;