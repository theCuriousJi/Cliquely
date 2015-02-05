OurLinks.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = OurLinks.posts;
    this.groups = OurLinks.groups;
  },

  routes: {
    '': 'root',
    'posts/new': 'newPost',
    'groups' : 'indexGroup',
    'groups/new': 'newGroup',
    'groups/:id': 'showGroup',
  },

  root: function () {
    OurLinks.posts.fetch();
    OurLinks.groups.fetch();
    var rootView = new OurLinks.Views.Root();
    this._swapView(rootView)
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

  // newGroup: function () {
  //   var group = new OurLinks.Models.Group();
  //   var view = new OurLinks.Views.GroupForm({model: group})
  //   this._swapView(view);
  // },

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
