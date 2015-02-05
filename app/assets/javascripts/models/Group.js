OurLinks.Models.Group = Backbone.Model.extend({
  urlRoot: '/api/groups',

  members: function () {
    if(!this._members) {
      this._members = new OurLinks.Collections.Users();
    }
    return this._members;
  },

  parse: function (response) {
    if(response.members) {
      this.members().set(response.members, {parse: true});
      delete response.members
    }
    return response;
  }
})
