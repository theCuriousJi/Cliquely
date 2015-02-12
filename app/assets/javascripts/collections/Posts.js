OurLinks.Collections.Posts = Backbone.Collection.extend({
  model: OurLinks.Models.Post,
  url: '/api/posts',
  comparator: function (post) {
    return -post.get('id')
  }

})

OurLinks.posts = new OurLinks.Collections.Posts();
