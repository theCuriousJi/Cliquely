json.array! @posts do |post|
 json.extract! post, :id, :title, :url, :description, :group_ids, :tag_ids, :created_at
 json.time_ago time_ago_in_words(post.created_at)
 json.like_count post.likes.length
 json.user_fname post.user.fname
 json.user_lname post.user.lname
 json.user_id post.user.id

 json.groups  current_user.groups.includes(:memberships) do |group|
   json.extract! group, :id, :title, :description

   json.membership group.memberships.where("user_id = ?", current_user.id).first.id
 end

 json.comments post.comments do |comment|
   json.extract! comment, *comment.attributes.keys
   json.time_ago time_ago_in_words(comment.created_at)
   json.user_fname comment.user.fname
   json.user_lname comment.user.lname
   json.user_id comment.user.id
 end

if current_user.likes?(post)
    json.like current_user.likes.where(post_id: post.id).first.id
 end
end


#  if current_user.is_member_of?(group)
#     json.membership current_user.memberships.where(group_id: group.id).first.id
#  end
# end
