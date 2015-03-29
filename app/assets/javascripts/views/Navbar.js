OurLinks.Views.Navbar = Backbone.CompositeView.extend({
  template: JST['navbar'],

  initialize: function () {
    this.user = $(".current-user-data").data("user-name");
  },

  events: {
    'click a#new-post-nav': 'addPostForm',
    'click button.search': 'search',
    'click a#new-group': "addGroupForm",
  },

  addPostForm: function (event) {
    event.preventDefault();
      var post = new OurLinks.Models.Post();
      var view = new OurLinks.Views.PostForm({model: post, collection: this.filteredPosts})
      this.addSubview('#form', view);
  },

  search: function (event) {
    event.preventDefault()
    var $currentTarget = $(event.currentTarget);
    var $search = $('form.search')
    var query = $search.find('.query').val()
    OurLinks.filteredPosts.fetch({data: {title: query} } )

  },

  addGroupForm: function (event) {
    event.preventDefault();
      var group = new OurLinks.Models.Group();
      var view = new OurLinks.Views.GroupForm({model: group})
      this.addSubview('#form', view);
  },


  render: function () {
    var content = this.template({user: this.user});
    this.$el.html(content);
    this.attachSubviews()
    return this;
  }

})
