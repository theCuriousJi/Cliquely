User.create!([
{fname: "Gaurav", lname: "Nagpal", email: "gauravnagpal19@gmail.com", password: "123123"}
])

Group.create!([
  {title: "Chitown crew", description: "Homies back home"},
  {title: "College Crew", description: ""},
  {title: "Family", description: ""},
])

GroupMembership.create!([
  {user_id: 1, group_id: 1},
  {user_id: 1, group_id: 2},
  {user_id: 1, group_id: 3}
])

Post.create!([
  {title: "The 10 best rap and R&B instrumentals, according to S-Type", url: "http://www.dummymag.com/lists/the-10-best-rap-and-r-n-b-instrumental-beats-according-to-s-type", description: "", user_id: 1},
  {title: "Great thread of Dilla and Nujabes beats", url: "http://www.reddit.com/r/futurebeats/comments/2v4462/happy_dilla_day_everybody_in_honor_of_the_late_j/", description: "", user_id: 1},
  {title: "them sloppy ass shirts i hope my shit look like some fendi", url: "https://www.youtube.com/watch?v=PvR4iaHx04I", description: "Dope new Lucki Eck$ track", user_id: 1},
  {title: "Life in the nineties", url: "http://www.newyorker.com/magazine/2014/02/17/old-man-3", description: "", user_id: 1},
  {title: "Saudi King Abdullah’s death sets up complex succession process", url: "http://www.washingtonpost.com/world/middle_east/saudi-king-abdullahs-death-sets-up-complex-succession-process/2015/01/22/340e0a9c-a28e-11e4-9f89-561284a573f8_story.html?tid=sm_fb", description: "", user_id: 1},
  {title: "lyrical fajitas", url: "https://www.youtube.com/watch?v=A4dxEXl6oGU", description: "", user_id: 1},
  {title: "Kiev's brutal strategy in eastern Ukraine", url: "http://www.latimes.com/opinion/op-ed/la-oe-golinkin-ukraine-humanitarian-crisis-20150102-story.html", description: "", user_id: 1}
])

LinkMembership.create!([
  {post_id: 1, group_id: 1},
  {post_id: 2, group_id: 1},
  {post_id: 3, group_id: 1},
  {post_id: 4, group_id: 1},
  {post_id: 5, group_id: 1},
  {post_id: 6, group_id: 1},
  {post_id: 7, group_id: 1}
])

Tag.create!([
  {name: "Media"},
  {name: "Useful Stuff"},
  {name: "Random"},
  {name: "Restaurants / Bars"},
  {name: "Business"},
  {name: "Opinions"},
  {name: "News"}
])

Tagging.create!([
  {post_id: 1, tag_id: 1},
  {post_id: 2, tag_id: 1},
  {post_id: 3, tag_id: 1},
  {post_id: 4, tag_id: 6},
  {post_id: 5, tag_id: 7},
  {post_id: 6, tag_id: 1},
  {post_id: 7, tag_id: 7}
])

Comment.create!([
  {text: "Dope", post_id: 1, user_id: 1},
  {text: "Diggin it", post_id: 1, user_id: 1},
  {text: "Too good", post_id: 2, user_id: 1}
])

Like.create!([
  {user_id: 1, post_id: 7}
])
