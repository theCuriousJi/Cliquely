json.extract! @post, :id, :title, :url, :description, :group_ids, :tag_ids, :comments, :created_at

json.user_fname @post.user.fname
json.user_lname @post.user.lname
json.user_id @post.user.id
