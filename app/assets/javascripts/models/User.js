OurLinks.Models.User = Backbone.Model.extend({
  urlRoot: 'api/users',

  groups: function () {
    if(!this._groups) {
      this._groups = new OurLinks.Collections.Groups();
    }
    return this._groups
  },

  // parse: function (response) {
  //   groups = []
  //   if(response.memberships) {
  //     _(response.memberships).each(function(membership) {
  //       // console.log(membership.id);
  //       membership.group['membership'] = membership.id
  //       groups.push(membership.group);
  //     })
  //
  //     this.groups().set(groups) //, {parse: true});
  //     // this.groups().set({membership: response.membership.id })
  //
  //     delete response.memberships
  //     // debugger
  //   }
  //   return response;
  // }


  parse: function (response) {
    if(response.groups) {
      this.groups().set(response.groups, {parse: true});
      delete response.groups
    }
    return response;
  }
})
