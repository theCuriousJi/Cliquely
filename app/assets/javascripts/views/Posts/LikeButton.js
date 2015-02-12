OurLinks.Views.LikeButton = Backbone.CompositeView.extend({
  template: JST['posts/like-button'],

  events: {
    'click .like-toggle': 'likeOrUnlike'
  },

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this.post = options.post

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
        success: function () {
          var current = _.clone(that.post.likeCount().get('likeCount'))
          that.post.likeCount().set('likeCount', current + 1)
        }
      })

    } else {
      this.disable()
      this.model.destroy( {
        success: function () {
          var current = _.clone(that.post.likeCount().get('likeCount'))
          that.post.likeCount().set('likeCount', current -1)
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
