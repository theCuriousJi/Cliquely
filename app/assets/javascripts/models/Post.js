OurLinks.Models.Post = Backbone.Model.extend({
  urlRoot: '/api/posts',

  parse: function (response) {
    debugger
    if(response.like) {
      this.like().set({id: response.like})
      delete response.like;
    }
    this.like().set({post_id: response.id})
    return response;
  },

  like: function () {
    if(!this._like) {
      this._like = new OurLinks.Models.Like()
    }
    return this._like
  }

})
