export const SET_ARRAY = 'SET_ARRAY';
export const SET_RUNNING = 'SET_RUNNING';
export const SET_CURRENT_SWAPPERS = 'SET_CURRENT_SWAPPERS';
export const SET_CURRENT_BUBBLES = 'SET_CURRENT_BUBBLES';
export const SET_ALGORITHM = 'SET_ALGORITHM';

export const setArray = (array) => {
    return {
        type: SET_ARRAY,
        array
    }
}

export const setRunning = (data) => {
    return {
        type: SET_RUNNING,
        data
    }
}

export const setCurrentSwapper = (data) => {
    return {
        type: SET_CURRENT_SWAPPERS,
        data
    }
}

export const setCurrentBubble = (data) => {
    return {
        type: SET_CURRENT_BUBBLES,
        data
    }
}

export const setAlgorithm = (data) => {
    return {
        type: SET_ALGORITHM,
        data
    }
}