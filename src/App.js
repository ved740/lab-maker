import React, { Component } from 'react';
import './App.css';
import ShippingLabelMaker from './features/shipping-label-maker/ShippingLabelMaker';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <ShippingLabelMaker />
      </div>
    );
  }
}

export default App;
