OurLinks.Views.GroupIndexItem = Backbone.View.extend({
  template: JST['groups/index-item'],
  tagName: 'li',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  events: {
    'click .delete': 'deleteGroup'
  },

  deleteGroup: function () {
    this.model.destroy();
  },

  render: function () {
    var content = this.template({group: this.model});
    this.$el.html(content);
    return this;
  }

})
