/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Body.css';

class Body extends React.Component {

    componentDidMount() {
        const { generateArray } = this.props;
        generateArray();
    }

    render() {
        const {
            array,
            sort,
            generateArray,
            currentSwappers,
            currentBubbles
        } = this.props;
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-8">
                        <ul className="nav justify-content-left">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Bubble</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Quick</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Merge</a>
                            </li>
                            {/* <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                    </li> */}
                        </ul>
                    </div>
                    <div className="col-md-4 text-right">
                        <button className="btn btn-sm btn-primary m-2" onClick={() => { sort(array) }}>Sort</button>
                        <button className="btn btn-sm btn-danger m-2" onClick={generateArray}>Reset</button>
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