OurLinks.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],
  closedTemplate: JST['posts/closed'],
  errorTemplate: JST['errors'],
  tagName: 'form',
  events: {
    'click #submit-post': "create",
    'click .backdrop-form': "closeForm",
    'click #delete-box': "closeForm"
  },

  initialize: function () {
    this.$el.addClass('form-horisontal')
    this.open = true;
    // this.listenTo()
  },

  create: function (event) {
    event.preventDefault();
    var data = this.$el.serializeJSON()
    var post = new OurLinks.Models.Post(data);
    var that = this;
    post.save( {}, {
      success: function () {
        OurLinks.posts.add(post);
        that.closeForm(event);
      },

      error: function (model, response) {
        response.responseJSON.forEach(function (error) {
          var content = that.errorTemplate({error: error})
          that.$('.modal-content').prepend(content)
        })
      }
    })
  },

  closeForm: function (event) {
    event.preventDefault();
    this.open = false;
    this.model = new OurLinks.Models.Post();
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
