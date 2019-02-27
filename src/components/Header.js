import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants';

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div>
        <h6>REDjourney - a journey to new you</h6>
        <ul>
          <li><Link to="/">my goals</Link></li>
          {authToken && (<li><Link to="/create-goal">create goal</Link></li>)}
          {authToken ? (
            <li onClick={() => {
              localStorage.removeItem(AUTH_TOKEN)
              this.props.history.push(`/`)
            }}>
              logout
            </li>
          ) : (
            <li><Link to='/login'>login</Link></li>
          )

          }
        </ul>
      </div>
    )
  }
}

export default withRouter(Header)