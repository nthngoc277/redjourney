import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div>
        <h6>REDjourney - a journey to new you</h6>
        <ul>
          <li><Link to="/">my goals</Link></li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Header)