OurLinks.Views.GroupIndex = Backbone.CompositeView.extend({
  template: JST['groups/index'],

  initialize: function (options) {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addGroup);
    this.listenTo(this.collection, 'remove', this.removeGroup);
    this.joinButton = options.joinButton;
    this.title = options.title;
    var that = this;
    this.collection.each(function (group) {
      that.addGroup(group);
    })
  },

  addGroup: function (group) {
    var view = new OurLinks.Views.GroupIndexItem({model: group, joinButton: this.joinButton})
    this.addSubview('#my-groups', view);
  },

  addTitle: function () {
    $('.group-title').html('Groups')
  },

  render: function () {
    var content = this.template({groups: this.collection});
    this.$el.html(content);
    this.title && this.addTitle()
    this.attachSubviews();
    return this;
  }
})
