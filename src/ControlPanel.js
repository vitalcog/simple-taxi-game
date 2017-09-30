import React, { Component } from 'react';
import { connect } from 'react-redux'
import { move } from './store'
import './css/layout.css';
import './css/colors_borders_images.css';

class ControlPanel extends Component {

  render() {

    return(
      <div id="panel">
        <p>Gas: {this.props.gas}</p>
        <p>Score: $ {this.props.score}</p>
        <p>Position: {this.props.playerX}, {this.props.playerY}</p>
        <section>
          <button onClick={() => this.props.up()}>UP</button>
        <div>
          <button onClick={() => this.props.left()}>LEFT</button>
          <button onClick={() => this.props.right()}>RIGHT</button>
        </div>
          <button onClick={() => this.props.down()}>DOWN</button>
        </section>
      </div>
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
  return {
    up: () => dispatch(move(0, -1)),

    down: () => dispatch(move(0, 1)),

    left: () => dispatch(move(-1, 0)),

    right: () => dispatch(move(1, 0)),
  }
}

export default connect (state2props, dispatch2props ) (ControlPanel)
