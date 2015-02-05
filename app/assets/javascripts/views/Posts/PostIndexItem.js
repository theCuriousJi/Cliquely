OurLinks.Views.PostIndexItem = Backbone.View.extend({
  template: JST['posts/index-item'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.$el.addClass('index-item')
  },

  events: {
    'click .delete': 'deletePost'
  },

  deletePost: function () {
    this.model.destroy();
  },

  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  }



})
