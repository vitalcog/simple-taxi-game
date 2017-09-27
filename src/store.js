import { createStore } from 'redux';

// action objects

export function populateGrid(){
  
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
console.log(newX,newY)

    if (newX > -1 && newX < 5 && newY > -1 && newY < 5) {
     return {
       gas: state.gas -1,
       playerX: state.playerX + action.payload.playerX,
       playerY: state.playerY + action.payload.playerY,
     }
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
})
