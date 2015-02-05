OurLinks.Collections.Groups = Backbone.Collection.extend({
  model: OurLinks.Models.Group,
  url: '/api/groups',

  getOrFetch: function (id) {
    var group = this.get(id);

    if (group) {
      group.fetch();
    } else {
      group = new OurLinks.Models.Group({id: id});
      group.fetch( {
        success: function () {
          OurLinks.groups.add(group);
        }
      });
    }
    return group;
  }

})

OurLinks.groups = new OurLinks.Collections.Groups()
