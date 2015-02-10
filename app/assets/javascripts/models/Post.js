OurLinks.Models.Post = Backbone.Model.extend({
  urlRoot: '/api/posts',

  parse: function (response) {
    if(response.like) {
      this.like().set({id: response.like})
      delete response.like;
    }

    if(response.comments) {
      this.comments().set(response.comments, {parse: true})
      delete response.comments
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
