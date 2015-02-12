OurLinks.Views.GroupIndex = Backbone.CompositeView.extend({
  template: JST['groups/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addGroup);
    this.listenTo(this.collection, 'remove', this.removeGroup);
    var that = this;
    this.collection.each(function (group) {
      that.addGroup(group);
    })
  },

  addGroup: function (group) {
    var view = new OurLinks.Views.GroupIndexItem({model: group, joinButton: true})
    this.addSubview('#my-groups', view);
  },

  // removeGroup: function (model) {
  //   var that = this;
  //   _(this.subviews()).each(function (subviews, selector) {
  //     _(subviews).each(function (subview) {
  //       if(model === subview.model){
  //         that.removeSubview(selector, subview);
  //       }
  //     });
  //   });
  // },

  render: function () {
    var content = this.template({groups: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
})
