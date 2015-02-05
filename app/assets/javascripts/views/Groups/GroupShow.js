OurLinks.Views.GroupShow = Backbone.View.extend({
  template: JST['groups/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  render: function () {
    var content = this.template({group: this.model});
    this.$el.html(content);
    return this;
  }
})
