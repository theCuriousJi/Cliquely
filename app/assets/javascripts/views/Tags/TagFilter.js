OurLinks.Views.TagFilter = Backbone.CompositeView.extend({
  template: JST['tags/filter'],

  initialize: function () {
    this.addAllButton()
    this.listenTo(this.collection, 'sync', this.setAllTagIds);
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addTag);
    var that = this;
    this.collection.each(function (tag) {
      that.addTag(tag);
    })
  },

  setAllTagIds: function () {
    OurLinks.util.replaceTagId([])
    OurLinks.util.set('allTagsShown', true)
    OurLinks.util.replaceTagId(OurLinks.util.get('tagIds'))
  },

  addTag: function (tag) {
    var view = new OurLinks.Views.TagFilterButton({model: tag, allButton: false});

    OurLinks.util.get('tagIds').push(tag.id);
    this.addSubview('#tags', view);

  },

  addAllButton: function () {
    OurLinks.util.replaceTagId(OurLinks.util.get("tagIds"))
    var tag = new OurLinks.Models.Tag()
    tag.set('name', 'All')
    var view = new OurLinks.Views.TagFilterButton({model: tag, allButton: true});
    this.addSubview('#tags', view);


  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }




})
