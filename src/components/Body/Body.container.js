import { connect } from 'react-redux';
import Body from './Body';

const mapState = ({ algorithm, array, isRunning, currentSwappers, currentBubbles }) => ({
    algorithm,
    array,
    isRunning,
    currentSwappers,
    currentBubbles
});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Body);