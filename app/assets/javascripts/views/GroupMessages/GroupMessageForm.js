OurLinks.Views.GroupMessageForm = Backbone.View.extend({
  template: JST['group_messages/form'],
  tagName: 'form',

  events: {
    'mousedown .group-message-text': "clearForm",
    'click #group-message-submit': 'submit'
  },

  initialize: function () {
    // this.$el.addClass('form-inline')
  },

  submit: function (event) {
    event.preventDefault()
    var data = this.$el.serializeJSON()
    data.group_message['group_id'] = this.model.id
    var groupMessage = new OurLinks.Models.GroupMessage(data.group_message)
    var that = this
    groupMessage.save({}, {
      success: function () {
        that.collection.add(groupMessage)
        $('textarea').val('Write a message...')
      }
    })

  },

  clearForm: function (event) {
    this.$('.group-message-text').empty()
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})
