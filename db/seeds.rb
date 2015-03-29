User.create!([
{fname: "Gaurav", lname: "Nagpal", email: "gauravnagpal19@gmail.com", password: "123123"},
{fname: "Guest", lname: "User", email: "guest1@gmail.com", password: "123123"},
{fname: "Sarah", lname: "Chia", email: "Sarah@gmail.com", password: "123123"},
{fname: "Manny", lname: "Pacquiao", email: "Manny@gmail.com", password: "123123"}
])
Group.create!([
  {title: "Sample Group", description: "This is a test group"},
  {title: "College Friends", description: ""},
  {title: "a/A", description: ""},
  {title: "Family", description: ""},
  {title: "Chi-town Crew", description: ""}
])
GroupMembership.create!([
  {user_id: 1, group_id: 1},
  {user_id: 1, group_id: 2},
  {user_id: 1, group_id: 3},
  {user_id: 4, group_id: 3}
])
GroupMessage.create!([
  {text: "What's up group?", group_id: 1, user_id: 1},
  {text: "Test post!", group_id: 1, user_id: 3}
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
  {title: "Proving that Android’s, Java’s and Python’s sorting algorithm is broken", url: "http://envisage-project.eu/proving-android-java-and-python-sorting-algorithm-is-broken-and-how-to-fix-it/", description: "Solid insights on the job search", user_id: 2}, #11
  {title: "Lupe's only interview before Tetsuo and Youth", url: "http://www.billboard.com/articles/columns/the-juice/6443500/lupe-fiasco-tetsuo-youth-iggy-azalea-quitting-twitter", description: "", user_id: 3}, #12
  {title: "Marshawn's trying to trademark 'I'm just here so I don't get fined", url: "http://bleacherreport.com/articles/2375182-marshawn-lynch-attempting-to-trademark-im-just-here-so-i-wont-get-fined?utm_source=facebook.com&utm_medium=referral&utm_campaign=programming-national", description: "", user_id: 3}, #13
  {title: "Emma Watson Sent Steve Carell the Nicest Note About His Fashion Choices", url: "http://jezebel.com/emma-watson-sent-steve-carell-the-nicest-note-about-his-1687624263", description: "", user_id: 1}, #14
  {title: "Morozov Lecture on Big Data", url: "https://www.youtube.com/watch?v=Ba0rIaEftKU", description: "", user_id: 1}, #15
  {title: "Fashion from 1969", url: "http://imgur.com/a/358sl?gallery", description: "Cool pics of fashion in 1969", user_id: 1}, #16
  {title: "Chicken and Rice is coming to Chicago!", url: "http://chicago.eater.com/2015/2/20/8077251/halal-guys-chicago", description: "Finally!", user_id: 1}, #17
  {title: "ISIS Burns 8000 Rare Books and Manuscripts in Mosul", url: "https://finance.yahoo.com/news/isis-burns-8000-rare-books-030900856.html", description: "", user_id: 1}, #18
  {title: "Lenovo caught installing adware on new computers", url: "http://thenextweb.com/insider/2015/02/19/lenovo-caught-installing-adware-new-computers/", description: "", user_id: 1}, #19
  {title: "Larry David on Charlie Rose", url: "http://charlierose.com/watch/60527652", description: "LD recently did a one-hour interview on his life and upcoming broadway show. his insecurity is so palpable, he's such an interesting fellow. there's not really any comedy here. ", user_id: 1}, #20
  {title: "2015 NFL Mock Draft: Post-Combine Update", url: "http://bleacherreport.com/articles/2374619-2015-nfl-mock-draft-post-combine-update?utm_source=facebook.com&utm_medium=referral&utm_campaign=programming", description: "", user_id: 1}, #21
  {title: "Great site for finding new music", url: "http://22tracks.com/", description: "This site is great if you're looking for a a rad playlist to jam to. All genres imaginable", user_id: 2}, #22
  {title: "Simpler? Big-O", url: "http://nathanmlong.com/2015/03/understanding-big-o-notation/", description: "", user_id: 4}, #23
])

LinkMembership.create!([
  {post_id: 1, group_id: 1},
  {post_id: 2, group_id: 1},
  {post_id: 1, group_id: 5},
  {post_id: 2, group_id: 5},
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
  {post_id: 13, group_id: 3},
  {post_id: 14, group_id: 1},
  {post_id: 15, group_id: 1},
  {post_id: 16, group_id: 1},
  {post_id: 16, group_id: 5},
  {post_id: 17, group_id: 1},
  {post_id: 18, group_id: 1},
  {post_id: 19, group_id: 1},
  {post_id: 20, group_id: 2},
  {post_id: 21, group_id: 2},
  {post_id: 22, group_id: 1},
  {post_id: 23, group_id: 3}
])

Tag.create!([
  {name: "Business"},
  {name: "Fashion"},
  {name: "Media"},
  {name: "News"},
  {name: "Op-Eds"},
  {name: "Restaurants / Bars"},
  {name: "Sports"},
  {name: "Tech"},
  {name: "Useful Stuff"},
  {name: "Random"}
])
Tagging.create!([
  {post_id: 1, tag_id: 3},
  {post_id: 2, tag_id: 3},
  {post_id: 3, tag_id: 5},
  {post_id: 4, tag_id: 4},
  {post_id: 5, tag_id: 3},
  {post_id: 6, tag_id: 4},
  {post_id: 7, tag_id: 5},
  {post_id: 8, tag_id: 9},
  {post_id: 9, tag_id: 9},
  {post_id: 10, tag_id: 9},
  {post_id: 11, tag_id: 8},
  {post_id: 12, tag_id: 3},
  {post_id: 13, tag_id: 7},
  {post_id: 14, tag_id: 2},
  {post_id: 14, tag_id: 10},
  {post_id: 15, tag_id: 9},
  {post_id: 15, tag_id: 5},
  {post_id: 15, tag_id: 10},
  {post_id: 16, tag_id: 2},
  {post_id: 17, tag_id: 6},
  {post_id: 17, tag_id: 10},
  {post_id: 18, tag_id: 4},
  {post_id: 19, tag_id: 4},
  {post_id: 20, tag_id: 10},
  {post_id: 21, tag_id: 7},
  {post_id: 22, tag_id: 3},
  {post_id: 23, tag_id: 8},
  {post_id: 23, tag_id: 9}
])

Comment.create!([
  {text: "Dope", post_id: 1, user_id: 1},
  {text: "Diggin it", post_id: 1, user_id: 1},
  {text: "I just want to give her all the stars", post_id: 7, user_id: 3},
  {text: "This track is great too. \r\nhttps://www.youtube.com/watch?v=Coyi5HAkuYo", post_id: 5, user_id: 1},
  {text: "Yeah I'm really into this", post_id: 22, user_id: 1},
  {text: "great interview", post_id: 12, user_id: 1},
  {text: "I love the Relax and House playlists", post_id: 22, user_id: 3},
  {text: "Great article", post_id: 22, user_id: 4},
  {text: "So Helpful!", post_id: 23, user_id: 4},
  {text: "Algorithms all day!", post_id: 23, user_id: 3}
])

Like.create!([
  {user_id: 1, post_id: 1},
  {user_id: 1, post_id: 2},
  {user_id: 1, post_id: 3},
  {user_id: 1, post_id: 4},
  {user_id: 1, post_id: 5},
  {user_id: 2, post_id: 2},
  {user_id: 2, post_id: 3},
  {user_id: 2, post_id: 16},
  {user_id: 1, post_id: 23},
  {user_id: 3, post_id: 21},
  {user_id: 3, post_id: 23}
])
