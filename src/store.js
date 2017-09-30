import { createStore } from 'redux';

// action objects

export function populateGrid(x, y, what){
  return {
    type: 'CREATE',
    payload: {
      coordinateX: x,
      coordinateY: y,
      object: what,
    }
  }
}

export function move(x, y) {
  return {
    type: 'MOVE',
    payload: {
      playerX: x,
      playerY: y,
    }
  }
}

// reducer function

function reducer (state, action) {

  if (action.type === 'MOVE') {
    const newX = state.playerX + action.payload.playerX
    const newY = state.playerY + action.payload.playerY

    if (newX > -1 && newX < 5 && newY > -1 && newY < 5) {
     return {
       gas: state.gas -1,
       score: state.score,
       playerX: state.playerX + action.payload.playerX,
       playerY: state.playerY + action.payload.playerY,
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
  }

  if (action.type === 'CREATE') {
    return {
      gas: state.gas,
      score: state.score,
      playerX: state.playerX,
      playerY: state.playerY,
      pedestrianX: 1,
      pedestrianY: 1,
    }
  }

  return state;
}

// store

export const store = createStore(reducer, {
  gas: 30,
  score: 0,
  playerX: 2,
  playerY: 2,
  pedestrianX: 4,
  pedestrianY: 4,
  homeX: 1,
  homeY: 1,
  fuelX: 4,
  fuelY: 0,
  pineappleX: 0,
  pineappleY: 4,
})
