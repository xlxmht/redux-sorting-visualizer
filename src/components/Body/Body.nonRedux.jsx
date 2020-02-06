/* Without Redux */

import React from 'react';
import './Body.css';

function _generateArray() {
    let array = [];
    while (array.length < 100) {
        array.push(Math.floor((Math.random() * 200) + 10));
    }
    return { array };
}

let quickHistory = [];

function _quickSort(array, startIdx, lastIdx) {
    if (startIdx < lastIdx) {
        let pivotIndex = __partition(array, startIdx, lastIdx);
        _quickSort(array, startIdx, pivotIndex - 1);
        _quickSort(array, pivotIndex + 1, lastIdx);
    }
}

function __partition(array, first, last) {
    // let swapHistory = [];
    let pivotElement = array[last];
    let tempStart = first - 1;
    while (first <= last) {
        if (array[first] < pivotElement) {
            tempStart += 1;
            __swap(tempStart, first, array);
            quickHistory.push([...array])
        }
        first++;
    }
    __swap(tempStart + 1, last, array);
    quickHistory.push([...array])
    return tempStart + 1;
}

function __swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function _bubble(array) {
    let arrayClone = [...array];
    let swapHistory = [];
    let isSwapped = true;
    while (isSwapped) {
        isSwapped = false;
        for (let i = 0; i < arrayClone.length; i++) {
            if (arrayClone[i] > arrayClone[i + 1]) {
                let temp = arrayClone[i];
                arrayClone[i] = arrayClone[i + 1];
                arrayClone[i + 1] = temp;
                isSwapped = true;
                swapHistory.push([...arrayClone]);
            }
        }
    }
    return { swapHistory };
}

class Body extends React.Component {
    // data = _generateArray();
    state = {
        isRunning: false,
        array: _generateArray().array
    }

    handleReset() {
        this.setState({
            isRunning: false,
            array: _generateArray().array
        });
    }

    handleSort() {
        // const { swapHistory } = _bubble(this.state.array);
        quickHistory = [];
        _quickSort(this.state.array, 0, this.state.array.length - 1);
        const swapHistory = quickHistory;
        this.startAnimation(swapHistory);
    }

    startAnimation(arrayHistory) {
        const self = this;
        this.setState({
            isRunning: true
        });
        console.log('Total Iteration: ', arrayHistory.length);
        this.animate(arrayHistory, 5, function (i) {
            self.setState({
                array: [...arrayHistory[i]]
            });
        });
    }

    animate(arrayHistory, speed, fn) {
        let self = this;
        let i = 0;
        let timeout = setTimeout(cb, speed);
        function cb() {
            clearTimeout(timeout);
            timeout = setTimeout(cb, speed);
            i += 1;
            if (i < arrayHistory.length) {
                fn(i);
            } else {
                clearTimeout(timeout);
                self.setState({
                    isRunning: false
                });
            }
        }
    }

    render() {
        const self = this;
        return (
            <React.Fragment>
                <div id="bodyContainer">
                    {
                        self.state.array.map((item, idx) => {
                            return <div key={idx} className="arrayElement" style={{ height: item * 3 }}></div>;
                        })
                    }
                </div>
                <div>
                    <button onClick={() => { this.handleSort() }} disabled={this.state.isRunning}>Sort</button>
                    <button onClick={() => { this.handleReset() }} disabled={this.state.isRunning}>Reset Array</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Body;