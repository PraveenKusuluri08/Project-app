import React, { Component } from 'react'
import Presentation from "./Presentation"
export class Container extends Component {
  render() {
    const {todoValues} =this.props
    console.log(todoValues)
    return (
      <div>
        <Presentation todoValues={todoValues}/>
      </div>
    )
  }
}

export default Container
