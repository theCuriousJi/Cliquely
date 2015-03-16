OurLinks.Views.GroupMessageShow = Backbone.View.extend({
  template: JST["group_messages/show"],
  tagName: 'li',
  initialize: function () {
    this.$el.addClass('list-group-item');
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    "click a#group-message-delete": "destroy"
  },

  destroy: function () {
    this.model.destroy()
  },

  render: function () {
    var content = this.template({message: this.model});
    this.$el.html(content);
    return this;
  }

})
