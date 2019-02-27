import React, { Component } from 'react'
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
      <div>
        <h4>{login ? 'Login' : 'Sign Up'}</h4>
        <div>
          { !login && (
            <input
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              type='text'
              placeholder="What's your name?"
            />
          )}
          <input
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type='text'
            placeholder="What's your email?"
          />
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type='password'
            placeholder="Please choose a safe password"
          />
        </div>
        <div>
          <Mutation
            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{email, password, name}}
            onCompleted={data => this._confirm(data)}
          >
            {mutation => (
              <div onClick={mutation}>
                {login ? 'login' : 'create account'}
              </div>
            )}
          </Mutation>
          <div onClick={() => this.setState({login: !login})}>
            {login? 'need to create an account?' : 'already have an account?'}
          </div>
        </div>
      </div>
    )
  }

  _confirm = async data => {
    const { token } = this.state.login ? data.signInUser.token : data.createUser.token
    this._saveUserData(token)
    this.props.history.push(`/`)
  }

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}

export default Login
