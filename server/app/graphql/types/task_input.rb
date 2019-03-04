module Types
  class TaskInput < BaseInputObject
    argument :description, String, required: true
  end
end
