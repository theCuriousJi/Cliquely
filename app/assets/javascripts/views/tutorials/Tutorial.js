OurLinks.Views.Tutorial = Backbone.View.extend({

  events: {
  "click": "startTour"
  },

  initialize: function () {
    this.currentStepId;
    this.initializeTour();
    this.generateTour();
    this.startTour()
    this.listenTo(OurLinks.event_bus, "triggerTutorial", this.startTour);
    // this.listenTo(SelFeed.Events.event_bus, "closeTutorial", this.tour.hide);
  },


    initializeTour: function () {
      this.tour = new Shepherd.Tour({
        defaults: {
          classes: "shepherd-theme-arrows",
          scrollTo: true,
          showCancelLink: true
        }
      });

      this.listenTo(this.tour, "cancel", function () {
        this.tour.hide
        // OurLinks.event_bus.trigger("toggleTutorialAuto", false);
        OurLinks.util.set('tourStatus', false)
      });
    },

  startTour: function (event) {
    // if (event.type === "click") {
    //   SelFeed.Events.event_bus.trigger("toggleTutorialAuto", true);
    // }
    if (this.currentStepId) {
      OurLinks.util.set('tourStatus', true)
      this.tour.show(this.currentStepId);
    } else {
      this.tour.start();
    }
  },

  backAndBookmark: function () {
    this.tour.back();
    this.currentStepId = this.tour.getCurrentStep().id;
  },

  nextAndBookmark: function () {
    this.tour.next();
    this.currentStepId = this.tour.getCurrentStep().id;
  },


generateTour: function () {
  this.tour.addStep({
    title: "Welcome to Cliquely!",
    text: "Cliquely is a link & web content sharing platform, that allows users to post content to discrete groups of friends. Users can like and comment on posted content from groups they are a part of. <br><br> When your Facebook newsfeed is overcrowded, Cliquely gives you an outlet. ",
    buttons: [
      { text: "Next", action: this.nextAndBookmark.bind(this) }
    ]
  });

  this.tour.addStep({
    title: "Tutorial Instructions",
    text: "This tutorial will highlight some of the main features of Cliquely. If you ever feel like exploring on your own, simply click <i class=\"fa fa-times\"></i>.",
    buttons: [
      { text: "Back", action: this.backAndBookmark.bind(this) },
      { text: "Next", action: this.nextAndBookmark.bind(this) }
    ]
  });

  this.tour.addStep({
    title: "Main News Feed",
    text: "Upon logging into Cliquely, you will find your primary news feed, which consists of links posted to all of the groups to which you belong",
    attachTo: ".posts",
    tetherOptions: {
      attachment: "top right",
      targetAttachment: "top left"
    },
    scrollTo: false,
    buttons: [
      { text: "Back", action: this.backAndBookmark.bind(this) },
      { text: "Next", action: this.nextAndBookmark.bind(this) }
    ]
  });

  this.tour.addStep({
    title: "Filter your main feed",
    text: "On this side panel, you can easily filter your news feed to show only certain categories of content or to show posts shared by a certain group.",
    attachTo: "#tags",
    scrollTo: false,
    tetherOptions: {
      attachment: "top left",
      targetAttachment: "bottom left"
    },
    buttons: [
      { text: "Back", action: this.backAndBookmark.bind(this) },
      { text: "Next", action: this.nextAndBookmark.bind(this) }
    ]
  });

  this.tour.addStep({
    title: "Likes and Comments",
    text: "Users can Like posts by clicking the <i class=\"fa fa-heart\"></i>.  Go ahead and try to Like and Unlike a post!  <br><br> User's can also comment on posts from other users.",
    attachTo: ".index-item",
    scrollTo: false,
    tetherOptions: {
      attachment: "top right",
      targetAttachment: "top right"
    },
    buttons: [
      { text: "Back", action: this.backAndBookmark.bind(this) },
      { text: "Next", action: this.nextAndBookmark.bind(this) }
    ]
  });

  this.tour.addStep({
    title: "Submit a new post",
    text: "It's easy to share content on Cliquely.  Simply click this button, give a post a title and a url, tag it, and decide which groups to share it with.",
    attachTo: "#new-post",
    scrollTo: false,
    tetherOptions: {
      attachment: "top left",
      targetAttachment: "top right"
    },
    buttons: [
      { text: "Back", action: this.backAndBookmark.bind(this) },
      { text: "Next", action: this.nextAndBookmark.bind(this) }
    ]
  });

  this.tour.addStep({
    title: "User Profile",
    text: "User's have their own profiles which store all posts that a user has liked. The same filter options are available on the user profile.",
    attachTo: "#profile",
    scrollTo: false,
    tetherOptions: {
      attachment: "top left",
      targetAttachment: "bottom left"
    },
    buttons: [
      { text: "Back", action: this.backAndBookmark.bind(this) },
      { text: "Next", action: this.nextAndBookmark.bind(this) }
    ]
  });

  this.tour.addStep({
    title: "Create and Join / Leave Groups",
    text: "You can create a new group to share content with, and you can manage your memberships using this menu. Inside of each group's page, you can chat with other group members.",
    attachTo: "#dropdown",
    scrollTo: false,
    tetherOptions: {
      attachment: "top left",
      targetAttachment: "bottom left"
    },
    buttons: [
      { text: "Back", action: this.backAndBookmark.bind(this) },
      { text: "Next", action: this.nextAndBookmark.bind(this) }
    ]
  });

  this.tour.addStep({
    title: "Search for Posts",
    text: "Search for old or new posts. Try searching for 'music'",
    attachTo: ".query",
    scrollTo: false,
    tetherOptions: {
      attachment: "top left",
      targetAttachment: "bottom left"
    },
    buttons: [
      { text: "Back", action: this.backAndBookmark.bind(this) },
      { text: "Next", action: this.nextAndBookmark.bind(this) }
    ]
  });

  this.tour.addStep({
    title: "Sign Up!",
    text: "Cliquely is an alternative to the overflow of information you get on Facebook and most RSS feeds. Let your closest friends share the best of the web with you and do the same with them! <br> <br> <a href='users/new'> Sign Up!</a>",
    buttons: [
      { text: "Close", action: this.nextAndBookmark.bind(this) }
    ]
  });




}





})
