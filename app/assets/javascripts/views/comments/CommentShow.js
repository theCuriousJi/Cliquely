OurLinks.Views.CommentShow = Backbone.View.extend({
  template: JST["comments/show"],
  tagName: 'li',
  initialize: function () {
    this.$el.addClass('list-group-item');
    this.listenTo(this.model, 'sync', this.render);
  },

  destroy: function () {

  },

  render: function () {
    var content = this.template({comment: this.model});
    this.$el.html(content);
    return this;
  }

})
