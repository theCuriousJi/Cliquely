# json.groups do
#   json.array! @groups, :id, :title, :description
# end
#
# json.memberships do
#   json.array! current_user.memberships do |membership|
#     json.extract! membership, :id
#   end
# end

json.array! @groups do |group|
 json.extract! group, :id, :title, :description

 if current_user.is_member_of?(group)
    json.membership current_user.memberships.where(group_id: group.id).first.id
 end

end

# N+1 queries!

#
# I have groups, users and group memberships.
#
# In my GroupIndexView, I iterate through my groups collection(which I fetched
# in the router groupIndex action) and create index-item views for each group model.
#
# Within each index item view, I would like to check if the current user is a
# member of that group.  I spoke with you earlier and you suggested the best way
# that I do this is to create a membership association in the Backbone Group model.
#
# This way, I could check to see if the Group membership isNew for each Group
# index item(looking at this.model.membership())
#
# The problem I am running into is when I fetch the groups collection, I don't have
# the membership data nestred nicely.
#
# If I access the groups show api, then the data comes throught nicely, with the
# group attrs in the main hash, and the membership id nested one leve deep
