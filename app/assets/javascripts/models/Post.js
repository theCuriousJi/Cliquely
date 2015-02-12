OurLinks.Models.Post = Backbone.Model.extend({
  urlRoot: '/api/posts',

  // defaults: {
  //   likeCount: 0
  // },

  parse: function (response) {
    if(response.like) {
      this.like().set({id: response.like})
      delete response.like;
    }

    if(response.comments) {
      this.comments().set(response.comments, {parse: true})
      delete response.comments
    }

    if(response.like_count) {
      // this.model.set('likeCount', response.like_count)
      delete response.like_count
    }

    this.like().set({post_id: response.id})
    return response;
  },

  like: function () {
    if(!this._like) {
      this._like = new OurLinks.Models.Like()
    }
    return this._like
  },

  comments: function () {
    if(!this._comments) {
      this._comments = new OurLinks.Collections.Comments()
    }
    return this._comments
  }

})
