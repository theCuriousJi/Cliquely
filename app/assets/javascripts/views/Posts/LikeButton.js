OurLinks.Views.LikeButton = Backbone.View.extend({
  template: JST['posts/like-button'],

  events: {
    'click .like-toggle': 'likeOrUnlike'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render)
  },

  disable: function(text){
    var $button = this.$('.like-toggle');
    // $button.text(text);
    $button.prop("disabled", true);
  },

  likeOrUnlike: function () {
    var that = this;
    if(this.model.isNew()) {
      this.disable()
      this.model.save({}, {
      })

    } else {
      this.disable()
      this.model.destroy( {
        success: function () {
          delete that.model.attributes.id
          that.render()

        }
      })

    }
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    if(this.model.isNew()) {
      // btnText = 'Like'
      // this.$('svg').attr('class', 'liked unliked')
      this.$('svg').attr('class', 'unliked liked')
      this.$('svg').attr('class', 'unliked')
    } else {
      // btnText = 'Unlike'
      this.$('svg').attr('class', 'liked unliked')
      this.$('svg').attr('class', 'liked')
    }

    return this;
  },

  // buttonText: function () {
  //   var btnText;
  //   if(this.model.isNew()) {
  //     // btnText = 'Like'
  //     // this.$('svg').attr('class', 'liked unliked')
  //     this.$('svg').addClass('likd')
  //   } else {
  //     // btnText = 'Unlike'
  //     this.$('svg').attr('class', 'unliked liked')
  //     this.$('svg').attr('class', 'unliked')
  //   }
  //   return btnText;
  // }

})
