OurLinks.Views.PostIndexItem = Backbone.CompositeView.extend({
  template: JST['posts/index-item'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.addLikeButton()
    this.$el.addClass('index-item');
  },

  events: {
    'click .delete': 'deletePost'
  },

  deletePost: function () {
    this.model.destroy();
  },

  addLikeButton: function () {
    var view = new OurLinks.Views.LikeButton({model: this.model.like()});
    this.addSubview('#like-button', view)
  },

  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  }



})
