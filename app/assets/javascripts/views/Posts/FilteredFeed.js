OurLinks.Views.FilteredFeed = Backbone.CompositeView.extend({
  template: JST['posts/filtered-posts'],

  initialize: function () {
    this.listenTo(this.collection, 'reset', this.resetFeed);
    // this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'remove', this.removePost);
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(OurLinks.posts, 'sync', this.filterPosts);
    this.listenTo(OurLinks.util, 'change:displayedGroupIds', this.filterPosts);
    this.listenTo(OurLinks.util, 'change:displayedTagIds', this.filterPosts);
  },

  resetFeed: function () {
    _(this.subviews()).each(function (subviews) {
      _(subviews).each(function (subview) {
        subview.remove()
      })
    })

    var that = this;

    this.collection.each(function (post) {
      that.addPost(post);
    })
  },

  // removePost: function (model) {
  //   var that = this;
  //   _(this.subviews()).each(function (subviews, selector) {
  //     _(subviews).each(function (subview) {
  //       if(model === subview.model){
  //         that.removeSubview(selector, subview);
  //
  //       }
  //     });
  //   });
  // },


  filterPosts: function () {
      results = OurLinks.posts.filter(function (post) {
        return (OurLinks.util.get('displayedGroupIds').indexOf(post.get('group_id')) !== -1 && OurLinks.util.get('displayedTagIds').indexOf(post.get('tag_id')) !== -1);
    })

  this.collection.reset(results);
  },

  addPost: function (post) {
    var view = new OurLinks.Views.PostIndexItem({model: post})
    this.addSubview('#feed', view);
  },

  render: function () {
    var content = this.template({posts: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }



})
