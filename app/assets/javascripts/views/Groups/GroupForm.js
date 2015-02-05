OurLinks.Views.GroupForm = Backbone.View.extend({
  template: JST['groups/form'],
  closedTemplate: JST['groups/closed'],
  tagName: 'form',

  events: {
    'click #submit-group': 'create',
    'click .backdrop-form': "closeForm"
  },

  initialize: function () {
    this.open = true
  },

  create: function () {
    event.preventDefault();
    var data = this.$el.serializeJSON()
    var group = new OurLinks.Models.Group(data);
    var that = this;
    group.save({}, {

      success: function () {
        OurLinks.groups.add(group);
        Backbone.history.navigate('', {trigger: true})
        that.open = false;
        that.render();
      }
    })
  },

  closeForm: function () {
    this.open = false;
    this.render();
  },

  render: function () {
    if(this.open) {
      var content = this.template();
    } else {
      var content = this.closedTemplate();
    }

    this.$el.html(content);
    return this;
  }

})
