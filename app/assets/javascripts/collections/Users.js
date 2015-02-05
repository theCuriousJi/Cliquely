OurLinks.Collections.Users = Backbone.Collection.extend({
  url: 'api/users',
  model: OurLinks.Models.User,
  getOrFetch: function (id) {
    var user = this.get(id);

    if (user) {
      user.fetch();
    } else {
      user = new OurLinks.Models.User({id: id});
      user.fetch( {
        success: function () {
          OurLinks.users.add(user);
        }
      });
    }
    return user;
  }



})


OurLinks.users = new OurLinks.Collections.Users()
