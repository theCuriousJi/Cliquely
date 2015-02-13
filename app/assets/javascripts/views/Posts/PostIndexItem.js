OurLinks.Views.PostIndexItem = Backbone.CompositeView.extend({
  template: JST['posts/index-item'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.addLikeButton();
    this.addLikeCount();
    // this.addComments();
    this.addCommentForm();
    this.$el.addClass('index-item');
    var that = this
    this.model.comments().each(function (comment) {
      that.addComment(comment)
    })
    this.listenTo(this.model.comments(), 'add', this.addComment)
  },


  events: {
    'click .delete-button': 'deletePost'
  },

  addCommentForm: function () {
    var view = new OurLinks.Views.CommentForm({model: this.model, collection: this.model.comments()});
    this.addSubview('#comment-form', view)
  },

  addComment: function (comment) {
      var view = new OurLinks.Views.CommentShow({ model: comment })
      this.addSubview('.comments', view)
  },

  deletePost: function () {
    this.model.destroy();
  },

  addLikeButton: function () {
    var view = new OurLinks.Views.LikeButton({model: this.model.like(), post: this.model});
    this.addSubview('#like-button', view)
  },

  addLikeCount: function () {
    var view = new OurLinks.Views.LikeCount({model: this.model});
    this.addSubview('.like-count', view)
  },

  render: function () {

    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  }



})
