OurLinks.Views.PostIndex = Backbone.CompositeView.extend({
  template: JST['posts/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addPost);
    this.listenTo(this.collection, 'remove', this.removePost);
    var that = this;
    this.collection.each(function (post) {
      that.addPost(post);
    })
  },

  addPost: function (post) {
    var view = new OurLinks.Views.PostIndexItem({model: post})
    this.addSubview('#feed', view);
  },

  removePost: function (model) {
    var that = this;
    _(this.subviews()).each(function (subviews, selector) {
      _(subviews).each(function (subview) {
        if(model === subview.model){
          debugger;
          that.removeSubview(selector, subview);

        }
      });
    });
  },

  render: function () {
    var content = this.template({posts: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
})
