OurLinks.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],

  initialize: function () {
    OurLinks.util.set({'displayedGroupIds': []});
    OurLinks.util.set({'displayedTagIds': []});

    this.listenTo(this.model, 'sync', this.render);

    this.groups = this.model.groups()
    this.groups.fetch({
      url: 'api/users/'+OurLinks.currentUserId+'/groups'});
    this.listenTo(this.groups, 'sync', this.render);
    this.listenTo(this.groups, 'add', this.addGroup);


    this.tags = OurLinks.tags;
    // this.listenTo(this.groups, 'remove', this.removeGroup);
    this.groups.each(function (group) {
      this.addGroup(group)
    }.bind(this))

    OurLinks.filteredPosts = new OurLinks.Collections.Posts();
    this.addFilters();
    this.addPostsView();
  },

  addPostsView: function () {
    var postsIndexView = new OurLinks.Views.FilteredFeed({collection: OurLinks.filteredPosts})
    this.addSubview('ul.posts', postsIndexView);
  },

  addFilters: function () {
    var groupFilterView = new OurLinks.Views.GroupFilter({collection: this.groups})
    this.addSubview('ul.groups', groupFilterView);

    var tagFilterView = new OurLinks.Views.TagFilter({collection: this.tags})
    this.addSubview('ul.tags', tagFilterView);
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
