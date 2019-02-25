import React, { Component } from 'react'
import Goal from './Goal'

class GoalList extends Component {
  render() {
    const goalsToRender = [
      {
        id: '1',
        title: 'title 1',
        description: 'description 1',
      },
      {
        id: '2',
        title: 'title 2',
        description: 'description 2',
      },
    ]
    return(
      <div>
        {goalsToRender.map( goal => <Goal key={goal.id} goal={goal} />)}
      </div>
    )
  }
}

export default GoalList