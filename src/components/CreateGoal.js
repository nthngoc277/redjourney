import React, { Component, Fragment } from 'react'
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
      <Fragment>
        <h2>Create goal</h2>
        <div class="form-group">
          <label for="title">What is the title of your goal?</label>
          <input 
            class="form-control" 
            id="title"
            value={title}
            onChange={e => this.setState({title: e.target.value})}
          />
        </div>

        <div class="form-group">
          <label for="description">Please put some description to make the goal clear</label>
          <textarea
            rows="5" 
            class="form-control" 
            id="description"
            value={description}
            onChange={e => this.setState({description: e.target.value})}
          />
        </div>
        <Mutation
          mutation={CREATE_GOAL_MUTATION} 
          variables={{ title, description }}
          onCompleted={() => this.props.history.push('/my-goals')}
        >
          {postMutation => <button class="btn btn-primary" onClick={postMutation}>Create goal</button>}
        </Mutation>
      </Fragment>
    )
  }
}

export default CreateGoal