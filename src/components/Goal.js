import React, { Component } from 'react'

class Goal extends Component {
  render() {
    return(
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.goal.title}</h5>
          <p className="card-text">{this.props.goal.description}</p>
          <a href="#" className="card-link">View details</a>
        </div>
      </div>
    )
  }
}

export default Goal