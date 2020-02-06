import { setArray, setRunning, setCurrentSwapper, setCurrentBubble } from '../actions';
const TIMEOUT_INTERVAL = 1;

const bubbleSort = (array, dispatch) => {
    let arrayClone = [...array];
    let swapHistory = [];
    let isSwapped = true;
    while (isSwapped) {
        isSwapped = false;
        for (let i = 0; i < arrayClone.length; i++) {
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
    if (swapHistory.length !== 0) {
        let dispatchFunction;
        if (swapHistory[0].length > 3) {
            dispatchFunction = setArray;
        } else if (swapHistory[0].length === 3 || swapHistory[0].length === 0) {
            dispatchFunction = setCurrentSwapper;
        } else if (swapHistory[0].length === 2) {
            dispatchFunction = setCurrentBubble;
        }
        dispatch(dispatchFunction(swapHistory.shift())); /* Removes and returns first element from array */
        setTimeout(() => {
            _handleDispatch(dispatch, swapHistory);
        }, TIMEOUT_INTERVAL);
    } else {
        /* Clearing curernt bubbles */
        setTimeout(() => {
            dispatch(setCurrentBubble([]));
            dispatch(setRunning(false));
        }, TIMEOUT_INTERVAL);
    }
}

export default bubbleSort;