OurLinks.Views.CommentShow = Backbone.View.extend({
  template: JST["comments/show"],
  tagName: 'li',

  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  }

})
