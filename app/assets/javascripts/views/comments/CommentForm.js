OurLinks.Views.CommentForm = Backbone.View.extend({
  template: JST['comments/form'],
  tagName: 'form',

  events: {
    'mousedown .comment-text': "clearForm",
    'click #comment-submit': 'submit'
  },

  initialize: function () {
    // this.$el.addClass('form-inline')
  },

  submit: function (event) {
    event.preventDefault()

    var data = this.$el.serializeJSON()
    data.comment['post_id'] = this.model.id
    var comment = new OurLinks.Models.Comment(data.comment)
    var that = this
    comment.save({}, {
      success: function () {
        that.collection.add(comment)
      }
    })

  },

  clearForm: function (event) {
    this.$('.comment-text').empty()
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})
