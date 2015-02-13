json.extract! @comment, :id, :text
json.time_ago time_ago_in_words(@comment.created_at)
json.user_fname @comment.user.fname
json.user_lname @comment.user.lname
json.user_id @comment.user.id
