import * as actions from '../actions';

const setArrayReducer = (state = [], action) => {
    switch (action.type) {
        case actions.SET_ARRAY:
            return action.array;
        default:
            return state;
    }
}

export default setArrayReducer;