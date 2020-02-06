import { SET_CURRENT_BUBBLES } from '../actions';

const setCurrentBubbleReducer = (state = [], action) => {
    switch (action.type) {
        case SET_CURRENT_BUBBLES:
            return action.data;
        default:
            return state;
    }
}

export default setCurrentBubbleReducer;