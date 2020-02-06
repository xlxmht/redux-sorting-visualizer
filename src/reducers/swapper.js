import { SET_CURRENT_SWAPPERS } from '../actions';

const currentSwapperReducer = (state = [], action) => {
    switch (action.type) {
        case SET_CURRENT_SWAPPERS:
            return action.data;
        default:
            return state;
    }
}

export default currentSwapperReducer;