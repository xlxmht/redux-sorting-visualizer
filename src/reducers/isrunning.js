const isRunningReducer = (state = false, action) => {
    switch (action.type) {
        case 'SET_RUNNING':
            return action.data;
        default:
            return state;
    }
}

export default isRunningReducer;