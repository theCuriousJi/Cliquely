json.extract! @user, :id, :fname, :lname, :email

json.groups  @user.groups.includes(:memberships) do |group|
  json.extract! group, :id, :title, :description

  json.membership group.memberships.where("user_id = ?", @user.id).first.id
end

# json.memberships @user.memberships.includes(:group) do |membership|
#   json.extract! membership, :id
#
#   json.group membership.group, :id, :title, :description
# end
