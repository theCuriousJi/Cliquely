OurLinks.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],
  closedTemplate: JST['posts/closed'],
  tagName: 'form',
  events: {
    'click #submit-post': "create",
    'click .backdrop-form': "closeForm",
    'click #delete-box': "closeForm"
  },

  initialize: function () {
    this.open = true;
    // this.listenTo()
  },

  createPostGroupLink: function (groupID) {

  },

  create: function (event) {
    event.preventDefault();
    var data = this.$el.serializeJSON()
    var post = new OurLinks.Models.Post(data);
    var that = this;
    debugger
    post.save( {}, {
      success: function () {
        OurLinks.posts.add(post);
        Backbone.history.navigate('', {trigger: true})
        that.open = false;
        that.render();
      }
    })
  },

  closeForm: function (event) {
    event.preventDefault();
    this.open = false;
    this.render();
  },

  render: function () {
    if(this.open) {
      var content = this.template();
    } else{
      var content = this.closedTemplate();
    }

    this.$el.html(content);
    // setTimeout(function () {
    //   this.delegateEvents();
    // }.bind(this), 100)
    return this;
  }
})
