module Types
  class TaskType < BaseObject
    field :id, ID, null: false
    field :description, String, null: false
    field :done, Boolean, null: false
  end
end
