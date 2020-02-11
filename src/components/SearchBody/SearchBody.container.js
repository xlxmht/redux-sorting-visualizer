import { connect } from 'react-redux';
import SearchBody from './SearchBody';
import binarySearch from "../../algorithms/binarySearch";
import { setArray, setRunning, setFound } from '../../actions';

const mapState = ({ array, isRunning, currentLeftRight, currentMiddle, currentFound }) => ({
    array,
    isRunning,
    currentLeftRight,
    currentMiddle,
    currentFound
});
const mapDispatch = (dispatch) => ({
    generateArray: () => {
        const data = [13, 15, 16, 16, 18, 19, 19, 25, 27, 27, 30, 33, 33, 36]
        dispatch(setArray(data));
    },
    doSearch: (array, target) => {
        dispatch(setRunning(true));
        binarySearch(dispatch, array, target);
    },
    reset: () => {
        dispatch(setFound([]));
    }
});

export default connect(mapState, mapDispatch)(SearchBody);