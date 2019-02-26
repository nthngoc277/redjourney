import React, { Component } from 'react'
import Goal from './Goal'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const ALL_GOALS_QUERY = gql`
  {
    allGoals {
      id
      title
      description
    }
  }
`

class GoalList extends Component {
  render() {
    
    return(
      <Query query={ALL_GOALS_QUERY}>
        {
          ({loading, error, data}) => {
            if(loading) return <div>Loading</div>
            if(error) return <div>Error</div>
            const goals = data.allGoals;
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