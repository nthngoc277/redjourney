import React, { Component } from 'react'
import Goal from './Goal'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const MY_GOALS_QUERY = gql`
  {
    myGoals {
      id
      title
      description
    }
  }
`

class GoalList extends Component {
  render() {
    
    return(
      <Query query={MY_GOALS_QUERY}>
        {
          ({loading, error, data}) => {
            if(loading) return <div>Loading</div>
            if(error) return <div>Error</div>
            const goals = data.myGoals;
            return (
              <div>
                {goals.map(goal => <Goal key={goal.id} goal={goal} />)}
              </div>
            )
          }
        }
      </Query>
    )
  }
}

export default GoalList