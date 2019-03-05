import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const CREATE_GOAL_MUTATION = gql`
  mutation CreateGoalMutation($title: String!, $description: String!, $tasks: [TaskInput!]){
    createGoal(
      title: $title, 
      description: $description,
      tasks: $tasks
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
        <div className="form-group">
          <label>What is the title of your goal?</label>
          <input 
            className="form-control" 
            id="title"
            value={title}
            onChange={e => this.setState({title: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Please put some description to make the goal clear</label>
          <textarea
            rows="5" 
            className="form-control" 
            id="description"
            value={description}
            onChange={e => this.setState({description: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>What will you do to complete this goal?</label>
          {tasks.map((task, idx) => (
            <div
              key={idx}
              className="input-group task"
            >
              <input
                type="text" 
                className="form-control"
                placeholder={`Task #${idx + 1} description`}
                onChange={this.handleTaskDescriptionChange(idx)}
                value={task.description}
              />
              <div className="input-group-append">
                <button 
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={this.handleRemoveTask(idx)}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="form-group">
          <button 
            type="button" 
            className="btn btn-btn btn-outline-secondary"
            onClick={this.handleAddTask}
          >
            + Add more tasks
          </button>
        </div>
        <Mutation
          mutation={CREATE_GOAL_MUTATION} 
          variables={{ title, description, tasks }}
          onCompleted={() => this.props.history.push('/my-goals')}
        >
          {postMutation => <button className="btn btn-primary btn-block" onClick={postMutation}>Create goal</button>}
        </Mutation>
      </Fragment>
    )
  }
}

export default CreateGoal