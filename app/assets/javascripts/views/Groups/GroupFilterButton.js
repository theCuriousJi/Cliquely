OurLinks.Views.GroupFilterButton = Backbone.View.extend({
  template: JST['groups/filter-button'],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
    this.allButton = options.allButton;
    if(this.allButton) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }

    this.listenTo(OurLinks.util, 'change:displayedGroupIds', this.checkStatus);
  },

  events: {
    'click .toggle': 'show'
  },

  show: function (event) {

    if(this.hidden) {
      if(this.allButton) {
        OurLinks.util.set('allGroupsShown', true)
        OurLinks.util.replaceGroupId([]);
        OurLinks.util.replaceGroupId(OurLinks.util.get('groupIds'));
        this.hidden = false
      } else {
        OurLinks.util.set('allGroupsShown', false)
        OurLinks.util.replaceGroupId([]);
        OurLinks.util.replaceGroupId([this.model.id]);
        this.hidden = false;
      }
    }

    this.render();
  },

  checkStatus: function () {
    if(this.allButton && OurLinks.util.get('allGroupsShown') ) {
        this.hidden = false;
        this.$('.toggle').prop('disabled', true);
    }
     else if((OurLinks.util.get('allGroupsShown') && !this.allButton) ||
      OurLinks.util.get('displayedGroupIds').indexOf(this.model.id) === -1 ) {
      this.hidden = true;
      this.$('.toggle').prop('disabled', false);
    }
    this.render()
  },




  render: function () {
    var content = this.template({
      btnText: this.model.get('title')
    });
    this.$el.html(content);
    if(this.hidden === true) {
      this.$('.toggle').removeClass('clicked').addClass('not-clicked')
    } else {
      this.$('.toggle').prop('disabled', true)
      this.$('.toggle').removeClass('not-clicked').addClass('clicked')
    }

    return this;
  }
})
