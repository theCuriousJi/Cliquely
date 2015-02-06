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

    if(response.membership) {
      this.membership().set({ id: response.membership });
      delete response.membership
    }
    this.membership().set({ group_id: response.id });

    return response;
  },

  membership: function () {
    if(!this._membership) {
      this._membership = new OurLinks.Models.Membership();
    }
    return this._membership;
  }
})


// membership
//
//
// membership.isNew chekcs if member or not
