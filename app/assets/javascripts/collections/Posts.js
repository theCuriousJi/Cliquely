OurLinks.Collections.Posts = Backbone.Collection.extend({
  model: OurLinks.Models.Post,
  url: '/api/posts'

})

OurLinks.posts = new OurLinks.Collections.Posts();
