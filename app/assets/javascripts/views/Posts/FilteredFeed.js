OurLinks.Views.FilteredFeed = Backbone.CompositeView.extend({
  template: JST['posts/filtered-posts'],

  initialize: function (options) {
    this.$el.css('padding-bottom', '10px')
    this.listenTo(OurLinks.posts, 'remove', this.removePost);
    this.listenTo(this.collection, 'reset', this.resetFeed);
    this.listenTo(OurLinks.posts, 'sync', this.filterPosts);
    this.listenTo(OurLinks.filteredPosts, 'sync', this.resetFeed);
    this.listenTo(OurLinks.util, 'change:displayedGroupIds', this.filterPosts);
    this.listenTo(OurLinks.util, 'change:displayedTagIds', this.filterPosts);
  },

  resetFeed: function () {
    _(this.subviews()).each(function (subviews) {
      _(subviews).each(function (subview) {
        subview.remove();
      })
    })

    var that = this;
    this.collection.each(function (post) {
      that.addPost(post);
    })
  },

  removePost: function (model) {
    if(this.subviews().length > 0){var mySelector;
    var mySubview;
    var that = this;
    _(this.subviews()).each(function (subviews, selector) {
      _(subviews).each(function (subview) {
        if(model === subview.model){
          mySelector = selector;
          mySubview = subview;
        }
      });
    });

    that.removeSubview(mySelector, mySubview);
  }
  },

  filterPosts: function () {
      results = OurLinks.posts.filter(function (post) {
        return (_.intersection(OurLinks.util.get('displayedGroupIds'), post.get('group_ids')).length > 0 &&
        _.intersection(OurLinks.util.get('displayedTagIds'), post.get('tag_ids')).length > 0)
    })

    // this.collection.fetch({
    //   data: { group_ids: [1, 2, 3] }
    // });
    this.collection.reset(results);
  },

  addPost: function (post) {
    var view = new OurLinks.Views.PostIndexItem({model: post})
    this.addSubview('#feed', view);
  },

  render: function () {
    var content = this.template({posts: this.collection});
    this.$el.html(content);
    // this.attachSubviews();
    return this;
  }
})
