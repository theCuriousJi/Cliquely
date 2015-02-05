OurLinks.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],
  closedTemplate: JST['posts/closed'],
  tagName: 'form',
  events: {
    'click #submit-post': "create",
    'click .backdrop-form': "closeForm"
  },

  initialize: function () {
    this.open = true
  },

  create: function (event) {
    event.preventDefault();
    var data = this.$el.serializeJSON()
    var post = new OurLinks.Models.Post(data);
    var that = this;
    console.log(data);
    post.save( {}, {
      success: function () {
        OurLinks.posts.add(post);
        Backbone.history.navigate('', {trigger: true})
      }
    })
  },

  // openForm: function (event) {
  //   event.preventDefault();
  //   this.open = true;
  //   this.render();
  // },

  closeForm: function (event) {
    event.preventDefault();
    console.log(event);
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
