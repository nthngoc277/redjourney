module Types
  class QueryType < Types::BaseObject
    field :my_goals, [GoalType], null: false

    def my_goals
      Goal.where(user_id: context[:current_user].id).order(created_at: :desc)
    end
  end
end
