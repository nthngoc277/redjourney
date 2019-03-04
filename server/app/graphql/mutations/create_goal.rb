module Mutations
  class CreateGoal < BaseMutation
    argument :title, String, required: true
    argument :description, String, required: true
    argument :tasks, [Types::TaskInput], required: false

    type Types::GoalType
    
    def resolve(title: nil, description: nil, tasks: nil)
      goal = Goal.create!(
        title: title,
        description: description,
        user: context[:current_user]
      )
      if tasks.present?
        tasks.each { |task|
          goal.tasks.create description: task.description
        }
      end
      goal
    end
  end
end
