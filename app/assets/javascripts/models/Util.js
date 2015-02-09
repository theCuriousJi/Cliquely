OurLinks.Models.Util = Backbone.Model.extend({
  defaults:  {
    displayedGroupIds: [],
    displayedTagIds: []

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

  addTagId: function (integer) {
    var tagIds = _.clone(this.get('displayedTagIds'));
    tagIds.push(integer);
    OurLinks.util.set({'displayedTagIds': tagIds})
  },

  removeTagId: function (integer) {
    var index = OurLinks.util.get('displayedTagIds').indexOf(integer);
    var tagIds = _.clone(this.get('displayedTagIds'));
    tagIds.splice(index, 1);
    OurLinks.util.set({'displayedTagIds': tagIds})
  },





})

OurLinks.util = new OurLinks.Models.Util();
