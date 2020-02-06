import { combineReducers } from 'redux';
import array from './array';
import isRunning from './isrunning';
import currentSwappers from './swapper';
import currentBubbles from './bubble';

/* These properties will be available to components with exact same names as imported */
export default combineReducers({
    array,
    isRunning,
    currentSwappers,
    currentBubbles
});