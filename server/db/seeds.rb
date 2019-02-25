if Goal.count == 0
  10.times do |index|
    Goal.create!(title: "Goal #{index + 1}", description: "This is my awesome description for goal #{index + 1}")
  end
end
