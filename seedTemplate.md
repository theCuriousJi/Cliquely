User.create!([
{fname: "Gaurav", lname: "Nagpal", email: "gauravnagpal19@gmail.com", password: "123123"},
{fname: "Guest", lname: "User", email: "guest1@gmail.com", password: "123123"},
{fname: "Sarah", lname: "Chia", email: "Barack@gmail.com", password: "123123"}


])

Group.create!([
  {title: "Chicago Crew", description: "Homies back home"},
  {title: "College Friends", description: ""},
  {title: "a/A", description: ""},
  {title: "Family", description: ""}

])

GroupMembership.create!([
  {user_id: 1, group_id: 1},
  {user_id: 1, group_id: 2},
  {user_id: 1, group_id: 3}
])

Post.create!([
  {title: "The 10 best rap and R&B instrumentals, according to S-Type", url: "http://www.dummymag.com/lists/the-10-best-rap-and-r-n-b-instrumental-beats-according-to-s-type", description: "", user_id: 1}, #1
  {title: "Great thread of Dilla and Nujabes beats", url: "http://www.reddit.com/r/futurebeats/comments/2v4462/happy_dilla_day_everybody_in_honor_of_the_late_j/", description: "", user_id: 1}, #2
  {title: "Life in the nineties", url: "http://www.newyorker.com/magazine/2014/02/17/old-man-3", description: "", user_id: 3}, #3
  {title: "Saudi King Abdullah’s death sets up complex succession process", url: "http://www.washingtonpost.com/world/middle_east/saudi-king-abdullahs-death-sets-up-complex-succession-process/2015/01/22/340e0a9c-a28e-11e4-9f89-561284a573f8_story.html?tid=sm_fb", description: "", user_id: 3}, #4
  {title: "lyrical fajitas", url: "https://www.youtube.com/watch?v=A4dxEXl6oGU", description: "", user_id: 1}, #5
  {title: "Kiev's brutal strategy in eastern Ukraine", url: "http://www.latimes.com/opinion/op-ed/la-oe-golinkin-ukraine-humanitarian-crisis-20150102-story.html", description: "", user_id: 1}, #6
  {title: "Gawker - Practicing Islam in Short Shorts", url: "http://truestories.gawker.com/practicing-islam-in-short-shorts-1683991294", description: "", user_id: 3}, #7
  {title: "Animate.css - just-add-water CSS animations", url: "http://daneden.github.io/animate.css/", description: "Simple CSS transition code", user_id: 3}, #8
  {title: "Great resource for inline editing", url: "http://vitalets.github.io/x-editable/", description: "This is a great tutorial for adding inline editing to your site", user_id: 3}, #9
  {title: "Add a fullscreen video to your splash page", url: "http://tympanus.net/codrops/2012/09/19/fullscreen-video-slideshow-with-bigvideo-js/", description: "This is a great tutorial for adding a full scren video to your splash page", user_id: 3}, #10
  {title: "Quora post on getting a job after graduating a software development bootcamp", url: "http://www.quora.com/Im-about-to-graduate-from-Dev-Bootcamp-programming-bootcamp-how-can-I-best-spend-my-time-job-hunting", description: "Solid insights on the job search", user_id: 2}, #11
  {title: "Lupe's only interview before Tetsuo and Youth", url: "http://www.billboard.com/articles/columns/the-juice/6443500/lupe-fiasco-tetsuo-youth-iggy-azalea-quitting-twitter", description: "", user_id: 3}, #12
  {title: "Marshawn's trying to trademark 'I'm just here so I don't get fined", url: "http://bleacherreport.com/articles/2375182-marshawn-lynch-attempting-to-trademark-im-just-here-so-i-wont-get-fined?utm_source=facebook.com&utm_medium=referral&utm_campaign=programming-national", description: "", user_id: 3} #13
])

LinkMembership.create!([
  {post_id: 1, group_id: 1},
  {post_id: 2, group_id: 1},
  {post_id: 3, group_id: 1},
  {post_id: 4, group_id: 1},
  {post_id: 5, group_id: 1},
  {post_id: 6, group_id: 1},
  {post_id: 7, group_id: 1},
  {post_id: 8, group_id: 3},
  {post_id: 9, group_id: 3},
  {post_id: 10, group_id: 3},
  {post_id: 11, group_id: 3},
  {post_id: 12, group_id: 3},
  {post_id: 13, group_id: 3}
])

Tag.create!([
  {name: "Media"}, #1
  {name: "Useful Stuff"}, #2
  {name: "Random"}, #3
  {name: "Restaurants / Bars"}, #4
  {name: "Business"}, #5
  {name: "Op-Eds"}, #6
  {name: "News"}, #7
  {name: "Sports"} #8
])

Tagging.create!([
  {post_id: 1, tag_id: 1},
  {post_id: 2, tag_id: 1},
  {post_id: 3, tag_id: 1},
  {post_id: 4, tag_id: 6},
  {post_id: 5, tag_id: 1},
  {post_id: 6, tag_id: 7},
  {post_id: 7, tag_id: 6},
  {post_id: 8, tag_id: 2},
  {post_id: 9, tag_id: 2},
  {post_id: 10, tag_id: 2},
  {post_id: 11, tag_id: 2},
  {post_id: 12, tag_id: 8},
  {post_id: 13, tag_id: 8}

])

Comment.create!([
  {text: "Dope", post_id: 1, user_id: 1},
  {text: "Diggin it", post_id: 1, user_id: 1},
  {text: "I just want to give her all the stars", post_id: 7, user_id: 3},

])

Like.create!([
  {user_id: 1, post_id: 1},
  {user_id: 1, post_id: 2},
  {user_id: 1, post_id: 3},
  {user_id: 1, post_id: 4},
  {user_id: 1, post_id: 5},
  {user_id: 1, post_id: 6},
  {user_id: 1, post_id: 7},
  {user_id: 1, post_id: 8},
  {user_id: 2, post_id: 1},
  {user_id: 2, post_id: 2},
  {user_id: 2, post_id: 3},
  {user_id: 2, post_id: 4},
  {user_id: 2, post_id: 5},
  {user_id: 2, post_id: 9},
  {user_id: 1, post_id: 10},
  {user_id: 2, post_id: 11},
  {user_id: 1, post_id: 12}
])
