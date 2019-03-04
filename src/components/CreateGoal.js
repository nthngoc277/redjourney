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
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      tasks: [{ description: '' }]
    }
  }
  

  handleTaskDescriptionChange = idx => event => {
    const newTasks = this.state.tasks.map((task, task_idx) => {
      if (idx !== task_idx) return task;
      return { ...task, description: event.target.value };
    });

    this.setState({ tasks: newTasks });
  };

  handleRemoveTask = idx => () => {
    this.setState({
      tasks: this.state.tasks.filter((_task, task_idx) => idx !== task_idx)
    });
  };

  handleAddTask = () => {
    this.setState({
      tasks: this.state.tasks.concat([{ description: '' }])
    });
  };

  render() {
    const { title, description, tasks } = this.state;
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

        <div class="form-group">
          <label for="description">What will you do to complete this goal?</label>
          {tasks.map((task, idx) => (
            <div class="input-group task">
              <input 
                type="text" 
                class="form-control"
                placeholder={`Task #${idx + 1} description`}
                onChange={this.handleTaskDescriptionChange(idx)}
                value={task.description}
              />
              <div class="input-group-append">
                <button 
                  type="button"
                  class="btn btn-outline-secondary"
                  onClick={this.handleRemoveTask(idx)}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>

        <div class="form-group">
          <button 
            type="button" 
            class="btn btn-btn btn-outline-secondary"
            onClick={this.handleAddTask}
          >
            + Add more tasks
          </button>
        </div>
        <Mutation
          mutation={CREATE_GOAL_MUTATION} 
          variables={{ title, description }}
          onCompleted={() => this.props.history.push('/my-goals')}
        >
          {postMutation => <button class="btn btn-primary btn-block" onClick={postMutation}>Create goal</button>}
        </Mutation>
      </Fragment>
    )
  }
}

export default CreateGoal