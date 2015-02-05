OurLinks.Views.GroupShow = Backbone.View.extend({
  template: JST['groups/show'],

    events: {
      'click .delete': 'deleteGroup'
    },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.members(), 'sync', this.render);
  },


    deleteGroup: function () {
      this.model.destroy();
      Backbone.history.navigate('', {trigger: true})
    },

  render: function () {
    var content = this.template({group: this.model});
    this.$el.html(content);
    return this;
  }
})
