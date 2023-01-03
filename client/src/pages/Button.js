import React, { Component } from 'react'

class Button extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    
    return (
      
     <div></div>    )
  }
}

export default Button;