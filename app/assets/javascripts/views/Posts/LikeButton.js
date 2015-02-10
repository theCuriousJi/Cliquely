OurLinks.Views.LikeButton = Backbone.View.extend({
  template: JST['posts/like-button'],

  events: {
    'click .like-toggle': 'likeOrUnlike'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  setButtonTextAndDisable: function(text){
    var $button = this.$('.like-toggle');
    $button.text(text);
    $button.prop("disabled", true);
  },

  likeOrUnlike: function () {
    var that = this;
    if(this.model.isNew()) {
      this.setButtonTextAndDisable('Liking')
      this.model.save({}, {
      })

    } else {
      this.setButtonTextAndDisable('Unliking')
      this.model.destroy( {
        success: function () {
          delete that.model.attributes.id
          that.render()

        }
      })

    }
  },

  render: function () {
    var content = this.template({btnText: this.buttonText()});
    this.$el.html(content);
    return this;
  },

  buttonText: function () {
    var btnText;
    if(this.model.isNew()) {
      btnText = 'Like'
    } else {
      btnText = 'Unlike'
    }
    return btnText;
  }

})
