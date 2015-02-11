OurLinks.Views.GroupFilter = Backbone.CompositeView.extend({
  template: JST['groups/filter'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.addAllButton)
    this.listenTo(this.collection, 'add', this.addGroup);
    this.listenTo(this.collection, 'remove', this.removeGroup);
    var that = this;
    this.collection.each(function (group) {
      that.addGroup(group);
    })
    // this.addAllButton()
  },

  addGroup: function (group) {
    var view = new OurLinks.Views.GroupFilterButton({model: group, filterButton: true, allButton: false })
    OurLinks.util.get('groupIds').push(group.id);
    this.addSubview('#my-groups', view);


  },

  addAllButton: function () {
    // debugger;
    OurLinks.util.replaceGroupId(OurLinks.util.get('groupIds'))
    var group = new OurLinks.Models.Group()
    group.set('title', 'All');
    var view = new OurLinks.Views.GroupFilterButton({model: group, allButton: true});
    this.addSubview('#my-groups', view);
  },

  render: function () {
    var content = this.template({groups: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
})
