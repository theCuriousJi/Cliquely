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
    this.listenTo(OurLinks.event_bus, "closeTutorial", this.tour.hide);
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
        OurLinks.util.set('tourStatus', false)
      });

    },

  startTour: function (event) {
    // if (event.type === "click") {
    //   OurLinks.event_bus.trigger("toggleTutorialAuto", true);
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
    text: "Cliquely is a link & web content sharing platform, that allows users to post content to discrete groups of friends. Much like Facebook, users can like and comment on posted content. <br><br> However, users must belong to a group in order to see or post content to its members, resulting in a more focused, less cluttered news feed. <br><br> When your Facebook newsfeed is overcrowded, Cliquely gives you an outlet to discuss and share interesting content. ",
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
    text: "Upon logging into Cliquely, you will find your primary news feed, which consists of links posted to all of the groups to which you belong. <br><br> You can also delete a post by clicking the <i class=\"fa fa-trash-o\"></i> icon, if you were the one who posted it.",
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
    title: "Home Page",
    text: "Clicking this logo will take you to back your home feed.",
    attachTo: ".title",
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
    title: "Filter your main feed",
    text: "On this side panel, you can easily filter your news feed to show only certain categories of content or to show posts shared by a certain group by clicking on the various filters. <br><br> Try filtering by a Fashion or Media!",
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
      targetAttachment: "middle left"
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
    title: "Favorites",
    text: "Users can access all the posts that that he / she has liked.",
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
    text: "Search for old or new posts. Try searching for 'Larry David'.",
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
    text: "Cliquely is an alternative to the overflow of information you get on Facebook and most RSS feeds. <br><br> Share the best of the web with your closest friends! <br> <br> <a href='users/new'> Sign Up!</a>",
    buttons: [
      { text: "Close", action: this.nextAndBookmark.bind(this) }
    ]
  });
}
})
