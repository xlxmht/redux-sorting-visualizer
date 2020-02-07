import { connect } from 'react-redux';
import { setAlgorithm, setArray, setRunning } from '../../actions';
import bubblesort from '../../algorithms/bubblesort';
import quicksort from '../../algorithms/quicksort';
import { arrayGenerator } from '../../algorithms/dispatch.handler';
import Toolbar from './Toolbar';

const mapState = ({
    algorithm,
    array,
    isRunning
}) => ({
    algorithm,
    array,
    isRunning
});

const mapDispatch = (dispatch) => ({
    generateArray: () => {
        dispatch(setArray(arrayGenerator()));
    },
    setAlgorithm: (algo) => {
        dispatch(setAlgorithm(algo));
    },
    sort: (algorithm, array) => {
        let sortToPerform = algorithm === 'bubbleSort' ?
            bubblesort : algorithm === 'quickSort' ?
                quicksort : null
        dispatch(setRunning(true));
        sortToPerform(array, dispatch);
    }
});

export default connect(mapState, mapDispatch)(Toolbar);