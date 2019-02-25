module Types
  class GoalType <  BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :description, String, null: false
    field :private, Boolean, null: false
    field :status, String, null: true
  end
end
