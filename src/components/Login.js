import React, { Component, Fragment } from 'react'
import { AUTH_TOKEN } from '../constants'
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag'

const SIGNUP_MUTATION = gql`
    mutation SignupMutation($email: String!, $password: String!, $name: String!){
      createUser(
        name: $name,
        authProvider: {
          email: {
            email: $email,
            password: $password
          }
        }
        ) {
        token
      }
    }
  `

  const LOGIN_MUTATION = gql`
    mutation signInMutation($email: String!, $password: String!){
      signInUser(
        email: {
          email: $email,
          password: $password
        }
      ){
        token
      }
    }
  `

class Login extends Component {
  state = {
    login: true, // switch between login and sign up
    email: '',
    password: '',
    name: ''
  }
  
  render() {
    const { login, email, password, name } = this.state
    return(
      <Fragment>
        <h4>{login ? 'Login' : 'Sign Up'}</h4>

        { !login && ( 
          <div class="form-group">
            <input 
              class="form-control" 
              id="name" 
              placeholder="What's your name?"
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>)
        }

        <div class="form-group">
          <input 
            type="email" 
            class="form-control" 
            id="email" 
            aria-describedby="emailHelp" 
            placeholder="What's your email?"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div class="form-group">
          <input 
            type="password" 
            class="form-control" 
            id="password" 
            placeholder="Please choose a safe password"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>

        <div>
          <Mutation
            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{email, password, name}}
            onCompleted={data => this._confirm(data)}
          >
            {mutation => (
              <button class="btn btn-primary" onClick={mutation}>
                {login ? 'login' : 'create account'}
              </button>
            )}
          </Mutation>
          <button class="btn btn-light" onClick={() => this.setState({login: !login})}>
            {login? 'need to create an account?' : 'already have an account?'}
          </button>
        </div>
      </Fragment>
    )
  }

  _confirm = async data => {
    const token = this.state.login ? data.signInUser.token : data.createUser.token
    this._saveUserData(token)
    this.props.history.push('/my-goals')
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Login
