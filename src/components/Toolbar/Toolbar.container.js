import { connect } from 'react-redux';
import { setAlgorithm, setArray, setRunning } from '../../actions';
import bubblesort from '../../algorithms/bubblesort';
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
        let array = [];
        while (array.length < 100) {
            array.push(Math.floor((Math.random() * 200) + 10));
        }
        dispatch(setArray(array));
    },
    setAlgorithm: (algo) => {
        dispatch(setAlgorithm(algo));
    },
    sort: (array) => {
        dispatch(setRunning(true));
        bubblesort(array, dispatch);
    }
});

export default connect(mapState, mapDispatch)(Toolbar);