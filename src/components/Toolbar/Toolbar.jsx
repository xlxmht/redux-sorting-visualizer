/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default class Toolbar extends React.Component {

    componentDidMount() {
        const { generateArray } = this.props;
        generateArray();
    }

    handleClick(algorithm) {
        const { setAlgorithm } = this.props;
        setAlgorithm(algorithm);
    }

    render() {
        const {
            generateArray,
            algorithm,
            array,
            isRunning,
            sort
        } = this.props;
        return (
            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-pills nav-justified">
                        <li className="nav-item">
                            <a className={'nav-link' + (algorithm === 'bubbleSort' ? ' active' : '')} href="#" onClick={() => { this.handleClick('bubbleSort') }}>Bubble</a>
                        </li>
                        <li className="nav-item">
                            <a className={'nav-link' + (algorithm === 'quickSort' ? ' active' : '')} href="#" onClick={() => { this.handleClick('quickSort') }}>Quick</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className={'nav-link' + (algorithm === 'mergeSort' ? ' active' : '')} href="#" onClick={() => { this.handleClick('mergeSort') }}>Merge</a>
                        </li> */}
                    </ul>
                </div>
                <div className="col-md-6 text-right">
                    <button
                        className={'btn btn-sm btn-primary m-2' + (isRunning ? ' btn-success disabledCursor' : '')}
                        onClick={() => { sort(algorithm, array) }}
                        disabled={isRunning}
                    >{isRunning ? 'Sorting in progress...' : 'Sort'}
                    </button>
                    {
                        !isRunning ?
                            <button
                                className={'btn btn-sm btn-danger m-2' + (isRunning ? ' disabledCursor' : '')}
                                onClick={generateArray}
                                disabled={isRunning}
                            >Reset
                        </button>
                            : null
                    }
                </div>
            </div>
        );
    }
}