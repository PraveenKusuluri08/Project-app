import React, { Component } from "react"
import Presentation from "./Presentation"
class container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      fName:"",
      lName:""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Presentation
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default container
