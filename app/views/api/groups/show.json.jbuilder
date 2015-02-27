json.extract! @group, :id, :title, :description

json.members @group.members, :id, :fname, :email

json.group_messages @group.group_messages, :text

json.group_messages @group.group_messages do |message|
  json.text message.text
  json.user_fname message.user.fname
  json.user_lname message.user.lname
  json.user_id message.user.id
  json.time_ago time_ago_in_words(message.created_at)
end

if current_user.is_first_member_of?(@group)
  json.founder current_user.id
end

if current_user.is_member_of?(@group)
  json.membership current_user.memberships.where(group_id: @group.id).first.id
end
