OurLinks.Views.GroupShow = Backbone.CompositeView.extend({
  template: JST['groups/show'],

    events: {
      'click .delete': 'deleteGroup'
    },

  initialize: function () {
    this.addMessageForm();
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.members(), 'sync', this.render);
    var that = this;
    this.model.groupMessages().each(function (message) {
      that.addMessage(message)
    })
    this.listenTo(this.model.groupMessages(), 'add', this.addMessage),
    this.listenTo(this.model.groupMessages(), 'remove', this.removeMessage)

  },

  addMessage: function (message) {
    var message_model = new OurLinks.Models.GroupMessage()
    var view = new OurLinks.Views.GroupMessageShow({model: message})
    this.addSubview('.group-messages', view)
  },

  removeMessage: function(model) {
    var mySelector;
    var mySubview;

    var that = this;
    _(this.subviews()).each(function (subviews, selector) {
      _(subviews).each(function (subview) {
        if(model === subview.model){
          mySelector = selector;
          mySubview = subview;
        }
      });
    });

    that.removeSubview(mySelector, mySubview);

  },


  deleteGroup: function () {
    this.model.destroy();
    Backbone.history.navigate('/groups', {trigger: true})
  },

  addMessageForm: function () {
    var view = new OurLinks.Views.GroupMessageForm({model: this.model, collection: this.model.groupMessages()});
    this.addSubview('#message-form', view)
  },

  render: function () {
    var content = this.template({group: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
})
