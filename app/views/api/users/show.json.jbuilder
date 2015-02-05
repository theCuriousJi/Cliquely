json.extract! @user, :id, :fname, :lname, :email

json.groups @user.groups, :id, :title
