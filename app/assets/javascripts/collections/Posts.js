OurLinks.Collections.Posts = Backbone.Collection.extend({
  model: OurLinks.Models.Post,
  url: '/api/posts',
  comparator: function (post) {
    return post.get('created_at')
  }

})

OurLinks.posts = new OurLinks.Collections.Posts();
