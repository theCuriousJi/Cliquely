json.extract! @group_message, :id, :text
json.user_fname @group_message.user.fname
json.user_lname @group_message.user.lname
json.user_id @group_message.user.id
json.time_ago time_ago_in_words(@group_message.created_at)
