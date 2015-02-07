OurLinks.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = OurLinks.posts;
    this.groups = OurLinks.groups;
    this.users = OurLinks.users;
  },

  routes: {
    '': 'root',
    'posts/new': 'newPost',
    'users/:id': 'userShow',
    'groups' : 'indexGroup',
    'groups/new': 'newGroup',
    'groups/:id': 'showGroup',
  },

  root: function () {
    OurLinks.posts.fetch();
    OurLinks.groups.fetch();
    OurLinks.currentUser = this.users.getOrFetch(OurLinks.currentUserId);
    var rootView = new OurLinks.Views.Root();
    this._swapView(rootView)
  },

  // User routes
  // -------------------------------------------
  userShow: function (id) {
    var user = this.users.getOrFetch(id);
    // this.groups.fetch();
    var view = new OurLinks.Views.UserShow({model: user});
    this._swapView(view);
  },


  // Post routes
  // -------------------------------------------
  index: function () {
    this.collection.fetch();
    var view = new OurLinks.Views.PostIndex({collection: this.collection});
    this._swapView(view);

  },

  newPost: function () {
    var post = new OurLinks.Models.Post();
    var view = new OurLinks.Views.PostForm({model: post});
    this._swapView(view);
  },

  // Group routes
  // -------------------------------------------

  indexGroup: function () {
    this.groups.fetch();
    var view = new OurLinks.Views.GroupIndex({collection: this.groups});
    this._swapView(view);
  },

  showGroup: function (id) {
    var group = this.groups.getOrFetch(id);
    var view = new OurLinks.Views.GroupShow({model: group})
    this._swapView(view)

  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el)
  }

})
