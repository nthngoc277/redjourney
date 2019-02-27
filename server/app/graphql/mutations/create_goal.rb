module Mutations
  class CreateGoal < BaseMutation
    argument :title, String, required: true
    argument :description, String, required: true

    type Types::GoalType
    def resolve(title: nil, description: nil)
      Goal.create!(
        title: title,
        description: description,
        user: context[:current_user]
      )
    end
  end
end
