module Types
  class QueryType < Types::BaseObject
    field :all_goals, [GoalType], null: false

    def all_goals
      Goal.all
    end
  end
end
