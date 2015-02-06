json.extract! @group, :id, :title, :description

json.members @group.members, :id, :fname, :email

if current_user.is_member_of?(@group)
  json.membership current_user.memberships.where(group_id: @group.id).first.id

end
