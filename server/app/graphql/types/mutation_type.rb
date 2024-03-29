module Types
  class MutationType < BaseObject
    field :create_user, mutation: Mutations::CreateUser
    field :sign_in_user, mutation: Mutations::SignInUser
    field :create_goal, mutation: Mutations::CreateGoal
  end
end
