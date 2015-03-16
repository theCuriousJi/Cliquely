OurLinks.Views.GroupJoinButton = Backbone.View.extend({
  template: JST['groups/join-button'],

  events: {
    'click #join-toggle': "joinOrLeave"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },
  setButtonTextAndDisable: function(text, disable){
    var $button = this.$('.join-toggle');
    $button.text(text);
    $button.prop("disabled", true);
  },

  joinOrLeave: function (event) {
    // manages the join or leave group button
    // Switches display to 'leaving' or 'joining' until success
    event.preventDefault();
    var that = this;
    if(this.model.isNew()) { // not joined
      this.setButtonTextAndDisable('Joining');
      this.model.save({}, {
      });
    } else { // joined
      this.setButtonTextAndDisable('Leaving');
      this.model.destroy({
        success: function () {
          delete that.model.attributes.id;
          that.render();
        },
        error: function () {
        }
      });
    }
    this.render();
  },


  render: function () {
    // disable button during transition
    var content = this.template({
      btnText: this.buttonText()
    });
    this.$el.html(content);
    return this;
  },

  buttonText: function(){
    var btnText;
    if(this.model.isNew()) {
      btnText = "Join";
    } else {
      btnText = "Leave";
    }
    return btnText;
  },


})
