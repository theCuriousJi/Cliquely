OurLinks.Views.GroupIndexItem = Backbone.View.extend({
  template: JST['groups/index-item'],
  tagName: 'li',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.joinState = (this.model.get("membership") ? 'member' : 'new');
  },

  events: {
    'click .join-toggle': "joinOrLeave"
  },

  joinOrLeave: function (event) {
    event.preventDefault();
    $currentTarget = $(event.currentTarget)
    var that = this;
    var membership = new OurLinks.Models.Membership({ id: this.model.get('membership'), group_membership: {
    user_id: OurLinks.currentUserId, group_id: that.model.id} })
    if(that.joinState === "new") {
        that.joinState = "joining"
        that.renderButton();
        membership.save( {}, {
        success: function () {
          that.joinState = "member";
          that.renderButton();
        }})
        } else {
        that.joinState = "leaving"
        that.renderButton();
        membership.destroy( {
          success: function () {
            that.joinState = "new"
            that.renderButton();
          }
        });
    }
  },

  renderButton: function () {
    // disable button during transition
    var button = this.$('.join-toggle')
    if(this.joinState === 'member') {
      button.html("Leave Group");
    } else if (this.joinState === "new") {
      button.html("Join Group");
    } else if (this.joinState === "joining") {
      button.html("Joining...")} else {
      button.html("Leaving...")
      }
  },

  render: function () {
    var content = this.template({group: this.model});
    this.$el.html(content);
    this.renderButton();
    return this;
  }

})

// send id of groupmember or null
//
// isNew
