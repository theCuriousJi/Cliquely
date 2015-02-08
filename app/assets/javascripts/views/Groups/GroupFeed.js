OurLinks.Views.GroupFeed = Backbone.CompositeView.extend({
  template: JST['groups/feed'],

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
    var view = new OurLinks.Views.GroupIndexItem({model: group, filterButton: true })
    OurLinks.util.addGroupId(group.id);
    this.addSubview('#my-groups', view);

  },

  render: function () {
    var content = this.template({groups: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
})
