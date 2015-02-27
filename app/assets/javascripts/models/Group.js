OurLinks.Models.Group = Backbone.Model.extend({
  urlRoot: '/api/groups',

  members: function () {
    if(!this._members) {
      this._members = new OurLinks.Collections.Users();
    }
    return this._members;
  },

  groupMessages: function () {
    if(!this._groupMessages) {
      this._groupMessages = new OurLinks.Collections.GroupMessages();
    }
    return this._groupMessages;
  },

  parse: function (response) {
    if(response.members) {
      this.members().set(response.members, {parse: true});
      delete response.members
    }

    if(response.group_messages) {
      this.groupMessages().set(response.group_messages, {parse: true});
      delete response.group_messages
    }

    if(response.membership) {
      this.membership().set({ id: response.membership});
      delete response.membership
    }
    this.membership().set({ group_id: response.id });

    return response;
  },

  membership: function () {
    if(!this._membership) {
      this._membership = new OurLinks.Models.Membership({ group_id: this.id });
    }
    return this._membership;
  }


})


// membership
//
//
// membership.isNew checks if member or not
