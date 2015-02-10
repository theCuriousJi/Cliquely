json.array! @posts do |post|
 json.extract! post, :id, :title, :url, :description, :group_ids, :tag_ids, :created_at

 if current_user.likes?(post)
    json.like current_user.likes.where(post_id: post.id).first.id
 end
end


#  if current_user.is_member_of?(group)
#     json.membership current_user.memberships.where(group_id: group.id).first.id
#  end
# end
