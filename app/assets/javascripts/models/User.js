OurLinks.Models.User = Backbone.Model.extend({
  urlRoot: 'api/users',

  groups: function () {
    if(!this._groups) {
      this._groups = new OurLinks.Collections.Groups();
    }
    return this._groups
  },

  likes: function () {
    if(!this._likes) {
      this._likes = []
    }
    return this._likes
  },

  parse: function (response) {
    var that = this;
    if(response.groups) {
      this.groups().set(response.groups, {parse: true});
      delete response.groups
    }

    if(response.likes) {
      _(response.likes).each(function (like) {
        that.likes().push(like)
      });
      delete response.likes
    }
    return response;
  }
})
