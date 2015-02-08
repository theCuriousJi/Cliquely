OurLinks.Views.Root = Backbone.CompositeView.extend({
  template: JST['root'],

  initialize: function () {
    // OurLinks.filters = {'group_id': []};
    OurLinks.util.set({'displayedGroupIds': []});
    // I populate the filters as the groups are added to the page
    this.groups = OurLinks.currentUser.groups()
    // this.listenTo(this.groups, 'sync', this.addGroupsView());
    this.filteredPosts = new OurLinks.Collections.Posts()
    this.addFilters();
    this.addPostsView();

  },

  events: {
    'click a.new-group': "addGroupForm",
    'click a.new-post': "addPostForm",
    'click .filter-toggle': "showOrHide"
  },

  addGroupForm: function (event) {
    event.preventDefault();
      var group = new OurLinks.Models.Group();
      var view = new OurLinks.Views.GroupForm({model: group})
      this.addSubview('#form', view);
  },

  showOrHide: function () {
    // console.log(event.currentTarget);
  },

  addPostForm: function (event) {
    event.preventDefault();
      var post = new OurLinks.Models.Post();
      var view = new OurLinks.Views.PostForm({model: post})
      this.addSubview('#form', view);
  },

  addPostsView: function () {
    var postsIndexView = new OurLinks.Views.FilteredFeed({collection: this.filteredPosts})
    this.addSubview('ul.posts', postsIndexView);

  },


  addFilters: function () {
    var groupFeedView = new OurLinks.Views.GroupFeed({collection: this.groups})
    this.addSubview('ul.groups', groupFeedView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
})
