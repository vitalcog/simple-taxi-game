import React, { Component } from 'react'
import './css/layout.css'
import './css/colors_borders_images.css'
import Unit from './Unit'

export default class GridDisplay extends Component {

  render() {
    const gridUnit = []
    let keyID = 0

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        gridUnit.push(
          <Unit key={keyID++}
            X={j} Y={i}
          />
        )
      }
    }

    return(
      <section  id="grid">
        {gridUnit}
      </section>
    )
  }
}
