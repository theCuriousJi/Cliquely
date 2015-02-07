OurLinks.Views.GroupJoinButton = Backbone.View.extend({
  template: JST['groups/join-button'],

  events: {
    'click .join-toggle': "joinOrLeave"
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
      // this.btnText = "Joining";
      // that.render();
      console.log(this.model.get('group_id'));
      this.model.save({}, {
        // success: function () {
        //   that.btnText = "Leave";
        //   that.render();
        // },
        // error: function () {
        //   console.log(arguments);
        // }
      });
    } else { // joined
      this.setButtonTextAndDisable('Leaving');
      // this.btnText = "Leaving";
      // that.render();
      var groupId = this.model.get('group_id');
      this.model.destroy({
        success: function () {
          // that.btnText = "Join"
          delete that.model.attributes.id;
          // that.model = new OurLinks.Models.Membership({
          //   group_id: groupId
          // });
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
    // var button = this.$('.join-toggle')
    // if(this.btnText === 'Join') {
    //   button.prop("disabled", false);
    // } else if (this.btnText === "Leave") {
    //   button.prop("disabled", false);
    // } else if (this.btnText === "Joining") {
    //   button.prop("disabled", true);
    // } else if(this.btnText === "Leaving"){
    //   button.prop("disabled", true);
    // }
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
