OurLinks.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = OurLinks.posts;
  },

  routes: {
    '': 'index',
    'posts/new': 'new'
  },

  index: function () {
    this.collection.fetch();
    var view = new OurLinks.Views.PostIndex({collection: this.collection});
    this._swapView(view);

  },

  new: function () {
    var post = new OurLinks.Models.Post();
    var view = new OurLinks.Views.PostForm({model: post, collection: this.collection});
    this._swapView(view);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el)
  }

})
