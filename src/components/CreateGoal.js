import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const CREATE_GOAL_MUTATION = gql`
  mutation CreateGoalMutation($title: String!, $description: String!){
    createGoal(
      title: $title, 
      description: $description
      ) {
      id
      title
      description
      createdAt
      createdBy {
        name
      }
    }
  }
`
class CreateGoal extends Component {
  state = {
    title: '',
    description: ''
  }

  render() {
    const { title, description } = this.state
    return (
      <div>
        <input
          value={title}
          onChange={e => this.setState({title: e.target.value})}
          type='text'
          placeholder='What is the title of your goal?'
        />
        <input
          value={description}
          onChange={e => this.setState({description: e.target.value})}
          type='text'
          placeholder='Please put some description to make the goal clear'
        />
        <Mutation 
          mutation={CREATE_GOAL_MUTATION} 
          variables={{ title, description }}
          onCompleted={() => this.props.history.push('/')}
        >
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </div>
    )
  }
}

export default CreateGoal