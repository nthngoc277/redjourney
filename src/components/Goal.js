import React, { Component } from 'react'

class Goal extends Component {
  render() {
    return(
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{this.props.goal.title}</h5>
          <p class="card-text">{this.props.goal.description}</p>
          <a href="#" class="card-link">View details</a>
        </div>
      </div>
    )
  }
}

export default Goal