import { combineReducers } from 'redux';
import array from './array';
import isRunning from './isrunning';
import currentSwappers from './swapper';
import currentBubbles from './bubble';
import algorithm from './algorithm';
import { setFoundReducer as currentFound, searchReducer as currentLeftRight } from './search';
import currentMiddle from './middle';

/* These properties will be available to components with exact same names as imported */
export default combineReducers({
    algorithm,
    array,
    isRunning,
    currentSwappers,
    currentBubbles,
    currentLeftRight,
    currentMiddle,
    currentFound
});