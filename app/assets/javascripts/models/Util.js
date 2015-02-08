OurLinks.Models.Util = Backbone.Model.extend({
  defaults:  {
    displayedGroupIds: []
  },

  addGroupId: function (integer) {
    var groupIds = _.clone(this.get('displayedGroupIds'));
    groupIds.push(integer);
    OurLinks.util.set({'displayedGroupIds': groupIds})
  },

  removeGroupId: function (integer) {
    var index = OurLinks.util.get('displayedGroupIds').indexOf(integer);
    var groupIds = _.clone(this.get('displayedGroupIds'));
    groupIds.splice(index, 1);
    OurLinks.util.set({'displayedGroupIds': groupIds})
  },

})

OurLinks.util = new OurLinks.Models.Util();
