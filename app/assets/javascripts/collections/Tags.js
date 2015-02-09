OurLinks.Collections.Tags = Backbone.Collection.extend({
  url: 'api/tags',
  model: OurLinks.Models.Tag
})

OurLinks.tags = new OurLinks.Collections.Tags()
