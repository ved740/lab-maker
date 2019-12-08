import React, { Component } from 'react';

class Steps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            street: '',
            city: '',
            uState: '',
            zip: ''
        };
        this.onNextClick = this.onNextClick.bind(this);
        this.onPrevClick = this.onPrevClick.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleStreetChange = this.handleStreetChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);
    }
    onNextClick(event) {
        console.log('Steps -> onNextClick');
        const { name, street, city, uState, zip } = this.state;
        const inputData = {
            name,
            street,
            city,
            uState,
            zip
        };
        this.setState({
            name: '',
            street: '',
            city: '',
            uState: '',
            zip: ''
        });
        this.props.onNextClick(this.props.currentView, event, inputData);
    };
    onPrevClick(event) {
        console.log('Steps -> onPrevClick');
        this.setState({
            name: '',
            street: '',
            city: '',
            uState: '',
            zip: ''
        });
        this.props.onPrevClick(this.props.currentView, event);
    };
    handleNameChange(evt) {
        this.setState({
            name: evt.target.value
        });
    }
    handleStreetChange(evt) {
        this.setState({
            street: evt.target.value
        });
    }
    handleCityChange(evt) {
        this.setState({
            city: evt.target.value
        });
    }
    handleStateChange(evt) {
        this.setState({
            uState: evt.target.value
        });
    }
    handleZipChange(evt) {
        this.setState({
            zip: evt.target.value
        });
    }
    render() {
        return (
            <div>
                <h1 id="header " className="align-left">Shipping Label Maker</h1>
                <div id="completeBar">
                    <div id="progressBar"></div>
                </div>
                {this.props.currentView === 'from-screen' ? <h3 className="align-left">Enter the receiver's address:</h3> : ''}
                {this.props.currentView === 'to-screen' ? <h3 className="align-left">Enter the recepient's address:</h3> : ''}
                <div id="name" className="align-left">
                    <label>
                        Name:
                        <input type="text" className="single-input" value={this.state.name} onChange={this.handleNameChange} />
                    </label>
                </div>
                <div>&nbsp;</div>
                <div id="street" className="align-left">
                    <label>
                        Street:
                        <input type="text" className="single-input" value={this.state.street} onChange={this.handleStreetChange} />
                    </label>
                </div>
                <div>&nbsp;</div>
                <div id="address" className="align-left">
                    <label className="margin-right-15">
                        City:
                        <input type="text" value={this.state.city} onChange={this.handleCityChange} />
                    </label>
                    <label className="margin-right-15">
                        State:
                        <input type="text" value={this.state.uState} onChange={this.handleStateChange} />
                    </label>
                    <label>
                        Zip:
                        <input type="text" value={this.state.zip} onChange={this.handleZipChange} />
                    </label>
                </div>
                <div>&nbsp;</div>
                <div id="footer-buttons" className="align-center">
                    <button className="margin-right-15" onClick={this.onPrevClick}>Previous</button>
                    <button className="" onClick={this.onNextClick}>Next</button>
                </div>
            </div>
        );
    }
}

export default Steps;
