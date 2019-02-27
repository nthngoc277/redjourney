if Goal.count == 0
  user = User.create!(name: 'Ngoc', email: 'ngoc@redjourney.me', password: '123456')

  10.times do |index|
    Goal.create!(
      title: "Goal #{index + 1}", 
      description: "This is my awesome description for goal #{index + 1}", 
      user: user
    )
  end
end
