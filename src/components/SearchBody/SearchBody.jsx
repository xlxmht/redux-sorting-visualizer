import React from 'react';
import './SearchBody.css';

class SearchBody extends React.Component {
    componentDidMount() {
        const { generateArray } = this.props;
        generateArray();
    }
    render() {
        const { array, isRunning, doSearch, reset, currentLeftRight, currentMiddle, currentFound } = this.props;
        function _getClasses(idx) {
            let classObj = {};
            if (currentFound.includes(idx)) {
                classObj.color = '#FFF';
                classObj.fontWeight = 'bold';
            }
            return classObj;
        }
        return (
            <React.Fragment>
                <div className="flex-container">
                    {
                        array.map((num, idx) => {
                            const bgColor = currentLeftRight.includes(idx) ? '#4ED860' : currentMiddle.includes(idx) ? '#DB3939' : currentFound.includes(idx) ? '#000' : '#f1f1f1';
                            return (
                                // <div key={idx} style={{ backgroundColor: bgColor, color: currentFound.includes(idx) ? '#FFF' : '#000', fontWeight: currentFound.includes(idx) ? 'bold' : '' }}>{num}</div>
                                <div key={idx} style={{ backgroundColor: bgColor, color: _getClasses(idx).color, fontWeight: _getClasses(idx).fontWeight }}>{num}</div>
                            );
                        })
                    }
                </div>
                <div className="col-md-6 m-2">
                    <button
                        className="btn btn-sm btn-primary m-2"
                        onClick={() => { doSearch(array, 18) }}
                        disabled={isRunning}
                    >{isRunning ? 'Searching...' : 'Start'}</button>
                    <button
                        className="btn btn-sm btn-danger"
                        onClick={reset}
                        disabled={isRunning}
                    >Reset</button>
                </div>
            </React.Fragment>
        );
    }
}

export default SearchBody;