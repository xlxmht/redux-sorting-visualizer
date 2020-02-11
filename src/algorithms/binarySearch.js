import { setRunning, setLeftRight, setMiddle, setFound } from "../actions";

let swapHistory = [];

const binarySearch = (dispatch, sortedArray, target) => {
    _searchHelper([...sortedArray], target, 0, sortedArray.length - 1);
    _handleDispatch(dispatch);
}

function _searchHelper(array, target, left, right) {
    let middle = Math.floor((left + right) / 2);
    swapHistory.push([left, right]); // #4ED860
    const potentialMatch = array[middle];
    swapHistory.push([middle]); // #DB3939
    if (left > right) {
        return -1;
    } else if (target === potentialMatch) {
        swapHistory.push([true, middle, true]);
        return middle;
    } else if (target < potentialMatch) {
        return _searchHelper(array, target, left, middle - 1);
    } else {
        return _searchHelper(array, target, middle + 1, right);
    }
}

function _handleDispatch(dispatch) {
    if (swapHistory.length !== 0) {
        let dispatchFunction = swapHistory[0].length === 2 ? setLeftRight : swapHistory[0].length === 3 ? setFound : setMiddle;
        dispatch(dispatchFunction(swapHistory.shift()));
        setTimeout(() => {
            _handleDispatch(dispatch);
        }, 1000);
    } else {
        dispatch(setLeftRight([]));
        dispatch(setMiddle([]));
        dispatch(setRunning(false))
    }
}

export default binarySearch;