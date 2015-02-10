OurLinks.Views.TagFilterButton = Backbone.View.extend({
  template: JST['tags/filter-button'],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.hidden = false;
  },

  events: {
    'click .toggle': 'showOrHide'
  },

  currentlyHidden: function () {
    return OurLinks.util.get('displayedTagIds').indexOf(this.model.id) === -1
  },

  showOrHide: function (event) {
    if(this.currentlyHidden()) {
      OurLinks.util.addTagId(this.model.id);
      this.hidden = false;
    } else {
      OurLinks.util.removeTagId(this.model.id);
      this.hidden = true;
    }
    this.render();
  },


  render: function () {
    var content = this.template({
      tag: this.model
    });
    this.$el.html(content);
    if(this.hidden === true) {
      this.$('.toggle').removeClass('clicked').addClass('not-clicked')
    } else {
      this.$('.toggle').removeClass('not-clicked').addClass('clicked')
    }
    return this;
  },

  // buttonText: function(){
  //   var btnText;
  //   if(!this.hidden) {
  //     btnText = "Hide";
  //   } else {
  //     btnText = "Show";
  //   }
  //   return btnText;
  // },
  // setButtonTextAndDisable: function(text, disable){
  //   var $button = this.$('.join-toggle');
  //   $button.text(text);
  //   $button.prop("disabled", true);
  // },

  // showOrHide: function (event) {
  //   // manages the join or leave group button
  //   // Switches display to 'leaving' or 'joining' until success
  //   event.preventDefault();
  //   var that = this;
  //   if(this.model.isNew()) { // not joined
  //     this.setButtonTextAndDisable('Joining');
  //     console.log(this.model.get('group_id'));
  //     this.model.save({}, {
  //     });
  //   } else { // joined
  //     this.setButtonTextAndDisable('Leaving');
  //     var groupId = this.model.get('group_id');
  //     this.model.destroy({
  //       success: function () {
  //         delete that.model.attributes.id;
  //         that.render();
  //       },
  //       error: function () {
  //       }
  //     });
  //   }
  //   this.render();
  // },




})
