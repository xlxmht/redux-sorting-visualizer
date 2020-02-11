export const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_LEFT_RIGHT':
            return action.data;
        default:
            return state;
    }
}

export const setFoundReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FOUND':
            return action.data;
        default:
            return state;
    }
}