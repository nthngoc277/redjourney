import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants';

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" >REDjourney</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {authToken && (<Link className="nav-item nav-link" to="/my-goals">my goals</Link>)}
            {authToken && (<Link className="nav-item nav-link" to="/create-goal">create goal</Link>)}
            {authToken ? (
              <a className="nav-item nav-link" onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                this.props.history.push('/login')
              }}>
                logout
              </a>
            ) : (
              <Link className="nav-item nav-link active" to='/login'>login</Link>
            )
            }
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)