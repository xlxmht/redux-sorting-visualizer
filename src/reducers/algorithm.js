import { SET_ALGORITHM } from '../actions';

export const BUBBLE = 'bubbleSort';
export const QUICK = 'quickSort';
export const MERGE = 'mergeSort';

const setAlgorithmReducer = (state = BUBBLE, action) => {
    switch (action.type) {
        case SET_ALGORITHM:
            return action.data;
        default:
            return state;
    }
}

export default setAlgorithmReducer;