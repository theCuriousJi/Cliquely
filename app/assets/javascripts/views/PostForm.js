OurLinks.Views.PostForm = Backbone.View.extend({
  template: JST['posts/form'],
  tagName: 'form',
  events: {
    'click .submit': "create"
  },

  create: function (event) {
    event.preventDefault();
    var data = this.$el.serializeJSON()
    var post = new OurLinks.Models.Post(data);
    var that = this;
    console.log(data);
    post.save( {}, {
      success: function () {
        that.collection.add(post);
        Backbone.history.navigate('', {trigger: true})
      }
    })
  },

  render: function () {
    var content = this.template();
    this.$el.html(content)
    return this;
  }



})
