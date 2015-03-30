OurLinks.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],

  initialize: function (options) {
    OurLinks.util.set('displayedGroupIds', []);
    OurLinks.util.set('displayedTagIds', []);
    this.tutorialOn = options.tutorialOn
    this.groups = this.model.groups();

    this.groups.fetch({
      url: 'api/users/'+this.model.id+'/groups'});

    this.tags = OurLinks.tags;
    OurLinks.filteredPosts = new OurLinks.Collections.Posts();
    // Creates a new empty collection of posts which can be filtered
    this.addFilters();
    this.addPostsView();

    this.listenTo(this.groups, 'sync', this.addGroupIndex);
    this.listenTo(this.model, 'sync', this.render);
    // this.listenTo(this.groups, 'sync', this.addTutorial);
  },

  addGroupIndex: function () {
    var view = new OurLinks.Views.GroupIndex({collection: this.groups, joinButton: true});
    this.addSubview('.user-groups', view)
  },

  events: {
    'click a.new-group': "addGroupForm",
    'click a#new-post': "addPostForm"
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
    var content = this.template({user: this.model});
    this.$el.html(content);
    this.tutorialOn && OurLinks.util.get('tourStatus') && this.addTutorial();
    this.attachSubviews();
    return this;
  }
})
