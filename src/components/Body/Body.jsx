import React from 'react';
import './Body.css';

function _generateArray() {
    let array = [];
    while (array.length < 100) {
        array.push(Math.floor((Math.random() * 200) + 10));
    }
    return array;
}

function _bubble(array) {
    let arrayClone = [...array];
    let history = [];
    let isSwapped = true;
    while (isSwapped) {
        isSwapped = false;
        for (let i = 0; i < arrayClone.length; i++) {
            if (arrayClone[i] > arrayClone[i + 1]) {
                let temp = arrayClone[i];
                arrayClone[i] = arrayClone[i + 1];
                arrayClone[i + 1] = temp;
                isSwapped = true;
                history.push([...arrayClone]);
            }
        }
    }
    return { history };
}

class Body extends React.Component {
    state = {
        array: _generateArray()
    }

    handleSort() {
        const { history } = _bubble(this.state.array);
        this.startAnimation(history);
    }

    startAnimation(arrayHistory) {
        const self = this;
        this.animate(arrayHistory, 5, function (i) {
            self.setState({
                array: [...arrayHistory[i]]
            });
        });
    }

    animate(arrayHistory, speed, fn) {
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
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <div id="bodyContainer">
                    {
                        this.state.array.map((item, idx) => {
                            return <div key={idx} className="arrayElement" style={{ height: item * 3 }}></div>;
                        })
                    }
                </div>
                <div>
                    <button onClick={() => { this.handleSort() }}>Sort</button>
                </div>
            </React.Fragment>
        );
    }
}

export default Body;