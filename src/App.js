import React, { Component } from 'react';
import './css/layout.css';
import './css/colors_borders_images.css';
import ControlPanel from './ControlPanel'
import GridDisplay from './GridDisplay'

class App extends Component {
  render() {
    return (
      <div className="flex">
        <GridDisplay />
        <ControlPanel />
      </div>
    );
  }
}

export default App;
