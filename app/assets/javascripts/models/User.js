OurLinks.Models.User = Backbone.Model.extend({
  urlRoot: 'api/users',

  groups: function () {
    if(!this._groups) {
      this._groups = new OurLinks.Collections.Groups();
    }
    return this._groups
  },

  parse: function (response) {
    if(response.groups) {
      this.groups().set(response.groups, {parse: true});
      delete response.groups
    }
    return response;
  }
})
