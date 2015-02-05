json.extract! @group, :id, :title, :description

json.members @group.members, :id, :fname, :email
