import { setArray, setRunning, setCurrentSwapper, setCurrentBubble } from '../actions';
const TIME_INTERVAL_IN_MS = 1;

export const arrayGenerator = () => {
    let array = [];
    while (array.length < 100) {
        array.push(Math.floor((Math.random() * 200) + 10));
    }
    return array;
}

const handler = (dispatch, swapHistory) => {
    if (swapHistory.length !== 0) {
        let dispatchFunction;
        if (swapHistory[0].length > 3) {
            dispatchFunction = setArray;
        } else if (swapHistory[0].length === 3 || swapHistory[0].length === 0) {
            dispatchFunction = setCurrentSwapper;
        } else if (swapHistory[0].length === 2) {
            dispatchFunction = setCurrentBubble;
        }
        dispatch(dispatchFunction(swapHistory.shift()));
        setTimeout(() => {
            handler(dispatch, swapHistory);
        }, TIME_INTERVAL_IN_MS);
    } else {
        setTimeout(() => {
            dispatch(setCurrentBubble([]));
            dispatch(setRunning(false));
        }, TIME_INTERVAL_IN_MS);
    }
}

export default handler;