import React, { Component } from 'react';

import {connect} from 'react-redux'

import './css/layout.css';
import './css/colors_borders_images.css';

class Unit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      occupied: false,
    }
  }

  render() {

    const gridUnit =
    this.props.X === this.props.playerX &&
    this.props.Y === this.props.playerY ?
    "occupied" : "gridUnit"

    return(
      <div className={gridUnit}>x={this.props.X} y={this.props.Y}</div>
    )
  }
}

function state2props(state){
  //return an object containing new props what we want to exist
  // and where they get their data
  return {
    gas: state.gas,
    score: state.score,
    playerX: state.playerX,
    playerY: state.playerY,
  }
}

function dispatch2props(dispatch) {
  // returns an object containing new props that we want to exist
  // and what actions they dispatch
  return {}
}

export default connect (state2props, dispatch2props ) (Unit)
