OurLinks.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.groups = this.model.groups()
    this.listenTo(this.groups, 'sync', this.render);
    this.listenTo(this.groups, 'add', this.addGroup);
    // this.listenTo(this.groups, 'remove', this.removeGroup);
    this.groups.each(function (group) {
      this.addGroup(group)
    }.bind(this))
  },

  render: function () {
    var content = this.template({user: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  removeGroup: function (model) {
    var that = this;
    _(this.subviews()).each(function (subviews, selector) {
      _(subviews).each(function (subview) {
        if(model === subview.model){
          that.removeSubview(selector, subview);
        }
      });
    });
  },

  addGroup: function (group) {
    var view = new OurLinks.Views.GroupIndexItem({model: group});
    this.addSubview('.user-groups', view)
  }

})
