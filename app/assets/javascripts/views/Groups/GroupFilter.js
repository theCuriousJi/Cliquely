OurLinks.Views.GroupFilter = Backbone.CompositeView.extend({
  template: JST['groups/filter'],

  initialize: function () {
    this.addAllButton()
    this.listenTo(this.collection, 'sync', this.setAllGroupIds)
    this.listenTo(this.collection, 'add', this.addGroup);
    this.listenTo(this.collection, 'remove', this.removeGroup);
    var that = this;
    this.collection.each(function (group) {
      that.addGroup(group);
    })

  },

  addGroup: function (group) {
    var view = new OurLinks.Views.GroupFilterButton({model: group, filterButton: true, allButton: false })
    OurLinks.util.get('groupIds').push(group.id);
    this.addSubview('#my-groups', view);
    // this.render();
  },

  removeGroup: function (model) {
    var mySelector;
    var mySubview;
    var that = this;
    _(this.subviews()).each(function (subviews, selector) {
      _(subviews).each(function (subview) {
        if(model === subview.model){
          // that.removeSubview(selector, subview);
          mySelector = selector;
          mySubview = subview
        }
      });
    });
    that.removeSubview(mySelector, mySubview);
  },

  setAllGroupIds: function () {

    OurLinks.util.replaceGroupId([])
    OurLinks.util.set('allGroupsShown', true)
    OurLinks.util.replaceGroupId(OurLinks.util.get('groupIds'))
  },


  addAllButton: function () {
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
    // this.addAllButton();
    return this;
  }
})
