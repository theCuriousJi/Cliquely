OurLinks.Views.Root = Backbone.CompositeView.extend({
  template: JST['root'],

  initialize: function () {
    this.addPostsView();
    this.addGroupsView();
  },

  events: {
    'click a.new-group': "addGroupForm",
    'click a.new-post': "addPostForm"
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
      var view = new OurLinks.Views.PostForm({model: post})
      this.addSubview('#form', view);
  },

  addPostsView: function () {
    var postsIndexView = new OurLinks.Views.PostIndex({collection: OurLinks.posts})
    this.addSubview('ul.posts', postsIndexView);

  },

  addGroupsView: function () {
    var postsGroupView = new OurLinks.Views.GroupIndex({collection: OurLinks.groups})
    this.addSubview('ul.groups', postsGroupView);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
})
