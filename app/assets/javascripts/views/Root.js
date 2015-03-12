OurLinks.Views.Root = Backbone.CompositeView.extend({
  template: JST['root'],

  initialize: function (options) {
    OurLinks.util.set({'displayedGroupIds': []});
    OurLinks.util.set({'displayedTagIds': []});
    this.tutorialOn = options.tutorialOn
    this.groups = OurLinks.currentUser.groups();
    this.groups.fetch({
      url: 'api/users/'+OurLinks.currentUserId+'/groups'});
      // data: {
      //   search_term: "whatever"
      // }
    this.tags = OurLinks.tags;
    OurLinks.filteredPosts = new OurLinks.Collections.Posts();
    this.addFilters();
    this.addPostsView();

    this.listenTo(this.groups, 'sync', this.render);
    this.listenTo(this.groups, 'add', this.addGroup);

    this.groups.each(function (group) {
      this.addGroup(group)
    }.bind(this))
  },

  addGroup: function (group) {
    var view = new OurLinks.Views.GroupIndexItem({model: group});
    this.addSubview('.user-groups', view)
  },

  events: {
    'click a.new-group': "addGroupForm",
    'click a#new-post': "addPostForm"
  },

  resetPosts: function () {
    OurLinks.filteredPosts.set(OurLinks.posts.models);
  },

  addGroupForm: function (event) {
    event.preventDefault();
      var group = new OurLinks.Models.Group();
      var view = new OurLinks.Views.GroupForm({model: group})
      this.addSubview('#form', view);
  },

  addPostForm: function (event) {
    event.preventDefault();
      var post = new OurLinks.Models.Post();
      var view = new OurLinks.Views.PostForm({model: post, collection: OurLinks.filteredPosts})
      this.addSubview('#form', view);
  },

  addPostsView: function () {
    var postsIndexView = new OurLinks.Views.FilteredFeed({collection: OurLinks.filteredPosts})
    this.addSubview('ul.posts', postsIndexView);
  },

  addFilters: function () {
    var groupFilterView = new OurLinks.Views.GroupFilter({collection: this.groups})
    this.addSubview('ul.groups', groupFilterView);

    var tagFilterView = new OurLinks.Views.TagFilter({collection: this.tags})
    this.addSubview('ul.tags', tagFilterView);
  },

  addTutorial: function () {
    var tutorialView = new OurLinks.Views.Tutorial()
    this.addSubview(".tutorial-container", tutorialView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    // this.tutorialOn && OurLinks.Events.event_bus.trigger("triggerTutorial");
    // that.tutorialAuto && OurLinks.Events.event_bus.trigger("triggerTutorial");
    this.tutorialOn && OurLinks.util.get('tourStatus') && this.addTutorial();
    this.attachSubviews();
    return this;
  }
})
