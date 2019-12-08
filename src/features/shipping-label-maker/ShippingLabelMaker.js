import React, { Component } from 'react';
// import ShippingLabel from './ShippingLabel';
import Steps from './Steps';

class ShippingLabelMaker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentView: 'from-screen',
            shippingInfo: {
                from: {},
                to: {},
                weight: 0,
                shippingOption: 1
            }
        };
        this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
        this.handlePrevButtonClick = this.handlePrevButtonClick.bind(this);
    }
    handleNextButtonClick(currentView, event, inputData) {
        console.log('Next Button Clicked');
        const buttonText = event.target.innerText;
        this.setState(function (prevSatet, nextState) {
            if (currentView === 'from-screen' && buttonText && buttonText.toLowerCase() === 'next') {
                let progressBar = document.getElementById("progressBar");
                progressBar.style.width = '66%';
                return {
                    currentView: 'to-screen'
                };
            } 
        });
        console.log('input Data : ', inputData);
        if (currentView === 'from-screen') {
            this.setState({
                shippingInfo: {
                    ...this.state.shippingInfo,
                    from: inputData
                }
            }, () => {
                console.log('Updated value :', this.state.shippingInfo);
            });
        }
        if (currentView === 'to-screen') {
            this.setState({
                shippingInfo: {
                    ...this.state.shippingInfo,
                    to: inputData
                }
            }, () => {
                console.log('Updated value :', this.state.shippingInfo);
            });
        }


    }
    handlePrevButtonClick(currentView, event) {
        console.log('Prev Button Clicked');
        const buttonText = event.target.innerText;
        this.setState(function (prevSatet, nextState) {
            if (currentView === 'to-screen' && buttonText && buttonText.toLowerCase() === 'previous') {
                let progressBar = document.getElementById("progressBar");
                progressBar.style.width = '33%';
                return {
                    currentView: 'from-screen'
                };
            }
        });
    }
    render() {
        return (
            <div id="container">
                <Steps
                    currentView={this.state.currentView}
                    onNextClick={this.handleNextButtonClick}
                    onPrevClick={this.handlePrevButtonClick}
                />
            </div>
        );
    }
}

export default ShippingLabelMaker;
