module Mutations
  class SignInUser < BaseMutation
    null true

    argument :email, Types::AuthProviderEmailInput, required: false

    field :token, String, null: true
    field :user, Types::UserType, null: true

    def resolve(email: nil)
      return unless email
      user = User.find_by_email email[:email]
      return unless user && user.authenticate(email[:password])

      crypt = ActiveSupport::MessageEncryptor.new(Rails.application.credentials.secret_key_base.byteslice(0..31))
      token = crypt.encrypt_and_sign("user-id:#{ user.id }")
      context[:session][:token] = token
      { user: user, token: token }
    end
  end
end
