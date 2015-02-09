OurLinks.Views.TagFilter = Backbone.CompositeView.extend({
  template: JST['tags/filter'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addTag);
    this.collection.each(function (tag) {
      this.addTag(tag);
    })
  },

  addTag: function (tag) {
    var view = new OurLinks.Views.TagFilterButton({model: tag, filterButton: true });

    OurLinks.util.addTagId(tag.id);
    this.addSubview('#tags', view);

  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }




})
