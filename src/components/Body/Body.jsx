/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Body.css';

class Body extends React.Component {

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
            algorithm,
            array,
            isRunning,
            sort,
            generateArray,
            currentSwappers,
            currentBubbles
        } = this.props;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-8">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className={'nav-link' + (algorithm === 'bubbleSort' ? ' active' : '')} href="#" onClick={() => { this.handleClick('bubbleSort') }}>Bubble</a>
                            </li>
                            <li className="nav-item">
                                <a className={'nav-link' + (algorithm === 'quickSort' ? ' active' : '')} href="#" onClick={() => { this.handleClick('quickSort') }}>Quick</a>
                            </li>
                            <li className="nav-item">
                                <a className={'nav-link' + (algorithm === 'mergeSort' ? ' active' : '')} href="#" onClick={() => { this.handleClick('mergeSort') }}>Merge</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-right">
                        <button
                            className={'btn btn-sm btn-primary m-2' + (isRunning ? ' disabledCursor' : '')}
                            onClick={() => { sort(array) }}
                            disabled={isRunning}
                        >Sort
                        </button>
                        <button
                            className={'btn btn-sm btn-danger m-2' + (isRunning ? ' disabledCursor' : '')}
                            onClick={generateArray}
                            disabled={isRunning}
                        >Reset
                        </button>
                    </div>
                </div>
                <div id="bodyContainer">
                    {
                        array.length ? array.map((num, idx) => {
                            const bgColor = currentSwappers.includes(idx) ? '#ffa600' : currentBubbles.includes(idx) ? '#7a5195' : 'turquoise';
                            return <div key={idx} className="arrayElement" style={{ height: num * 3, backgroundColor: bgColor }}></div>;
                        }) : null
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default Body;