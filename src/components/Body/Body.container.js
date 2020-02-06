import { connect } from 'react-redux';
import Body from './Body';
import { setArray, setRunning } from '../../actions';
import bubblesort from '../../algorithms/bubblesort';

const mapState = ({ array, currentSwappers, currentBubbles }) => ({
    array,
    currentSwappers,
    currentBubbles
});

const mapDispatch = (dispatch) => ({
    generateArray: () => {
        let array = [];
        while (array.length < 100) {
            array.push(Math.floor((Math.random() * 200) + 10));
        }
        dispatch(setArray(array));
    },
    sort: (array) => {
        dispatch(setRunning(true));
        bubblesort(array, dispatch);
    }

});

export default connect(mapState, mapDispatch)(Body);