OurLinks.Views.LikeCount = Backbone.View.extend({
  template: JST['posts/like-count'],
  tagName: 'span',

  initialize: function () {
    this.listenTo(this.model.likeCount(), 'change:likeCount', this.render)
  },

  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;

  }

})
