import React, { Component } from 'react'

class Goal extends Component {
  render() {
    return(
      <div>
        {this.props.goal.title} - {this.props.goal.description}
      </div>
    )
  }
}

export default Goal