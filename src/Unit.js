import React, { Component } from 'react';

import {connect} from 'react-redux'

import './css/layout.css';
import './css/colors_borders_images.css';

class Unit extends Component {

  render() {

    let gridUnit = "gridUnit"

    if (
      this.props.X === this.props.playerX &&
      this.props.Y === this.props.playerY) {
        gridUnit = "occupied"
      } else if (
        this.props.X === this.props.pedestrianX &&
        this.props.Y === this.props.pedestrianY) {
          gridUnit = "pedestrian"
        } else if (
          this.props.X === this.props.homeX &&
          this.props.Y === this.props.homeY) {
            gridUnit = "home"
          } else if (
            this.props.X === this.props.fuelX &&
            this.props.Y === this.props.fuelY) {
              gridUnit = "fuel"
            } else if (
              this.props.X === this.props.pineappleX &&
              this.props.Y === this.props.pineappleY) {
                gridUnit = "pineapple"
              }

    return(
      <div className={gridUnit}></div>
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
    pedestrianX: state.pedestrianX,
    pedestrianY: state.pedestrianY,
    homeX: state.homeX,
    homeY: state.homeY,
    fuelX: state.fuelX,
    fuelY: state.fuelY,
    pineappleX: state.pineappleX,
    pineappleY: state.pineappleY,
  }
}

function dispatch2props(dispatch) {
  // returns an object containing new props that we want to exist
  // and what actions they dispatch
  return {}
}

export default connect (state2props, dispatch2props ) (Unit)
