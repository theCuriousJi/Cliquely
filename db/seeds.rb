User.create!([
  {session_token: "sJcuTJ3sDveQWoCF_wQ4bw", fname: "3", lname: "asdf", email: "sadfsdkjf", password_digest: "$2a$10$u7bPT2gCZAUYbpVvRTnkce2ZwviT/1Lnuj5BYjI5NfgEBsIv5dELi"},
  {session_token: "-7jtA8Vcj0FYACyqb8MYCg", fname: "Second", lname: "User", email: "user2", password_digest: "$2a$10$ew1bvO8A8rOhJwtU4sIY/eIUjuCiXjlV7y/gQLpCUaYuujqG1tPXC"},
  {session_token: "dvArFXysuBG7Ih-bw2UDiA", fname: "Gaurav", lname: "Nagpal", email: "gauravnagpal19@gmail.com", password_digest: "$2a$10$UDpcyDBVFmBLlPetfMe92uriZg9Dx0VRbkhLrtfyca3RN4r9.yEim"}
])
Group.create!([
  {title: "what what", description: "yea yea"},
  {title: "G's group", description: ""},
  {title: "Random Group", description: "whoa"},
  {title: "new group", description: "sadf"}
])
GroupMembership.create!([
  {user_id: 1, group_id: 19},
  {user_id: 1, group_id: 18},
  {user_id: 1, group_id: 42},
  {user_id: 1, group_id: 3}
])

Post.create!([
  {title: "LPT post in what what", url: "LPT", description: "", user_id: 1},
  {title: "Random G", url: "random G", description: "", user_id: 1},
  {title: "random g", url: "random g", description: "", user_id: 1}
])
LinkMembership.create!([
  {post_id: 91, group_id: 18},
  {post_id: 94, group_id: 19}
])


Tag.create!([
  {name: "Media"},
  {name: "Life Pro Tips"},
  {name: "Random"},
  {name: "Restaurants / Bars"},
  {name: "News"}
])
Tagging.create!([
  {post_id: 91, tag_id: 2},
  {post_id: 93, tag_id: 3},
  {post_id: 94, tag_id: 3}
])
Comment.create!([
  {text: "New comment", post_id: 86, user_id: 1},
  {text: "Another new comment", post_id: 86, user_id: 1},
  {text: "asdfadsf", post_id: 91, user_id: 1},
  {text: "asdfadsfadf", post_id: 91, user_id: 1},
  {text: "dasdf", post_id: 90, user_id: 1},
  {text: "boo", post_id: 99, user_id: 1},
  {text: "fuck yah", post_id: 99, user_id: 1},
  {text: "sdfasd", post_id: 94, user_id: 1},
  {text: "asdfs", post_id: 94, user_id: 1},
  {text: "dsfsdaf", post_id: 94, user_id: 1},
  {text: "sdfsdf", post_id: 101, user_id: 1},
  {text: "sdfasdf", post_id: 102, user_id: 1},
  {text: "sdfasdf", post_id: 102, user_id: 1},
  {text: "sdfasdf", post_id: 102, user_id: 1},
  {text: "fuck yah", post_id: 103, user_id: 1},
  {text: "sdfdsagsd", post_id: 104, user_id: 1},
  {text: "lsdkjf laksdjf;lasd jflaksjd f;laksj df;laksjf;laksjdf ;laksjdf;laskjdf;alksj f;alsjd f;alskj df;alskjdf ;laskjdf ;alskjdf ;alskjf ;askljf ;aslkdfj ;askldjf a;sldkfj a;sldkjfas ;ldkfjas; ldfkja;sdlkfja ;sldkfja;sldkfja;sld fjka;sldfja;slkdfj a;lsdfjk", post_id: 91, user_id: 1},
  {text: "wassup", post_id: 104, user_id: 1}
])

Like.create!([
  {user_id: 1, post_id: 91}
])
