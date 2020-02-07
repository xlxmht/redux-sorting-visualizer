/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Body.css';

class Body extends React.Component {

    render() {
        const {
            array,
            currentSwappers,
            currentBubbles
        } = this.props;
        return (
            <React.Fragment>
                <div id="bodyContainer">
                    {
                        array.length ? array.map((num, idx) => {
                            const bgColor = currentSwappers.includes(idx) ?
                                '#ffa600' : currentBubbles.includes(idx) ?
                                    '#7a5195' : 'turquoise';
                            return <div key={idx} className="arrayElement" style={{ height: num * 3, backgroundColor: bgColor }}></div>;
                        }) : null
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default Body;