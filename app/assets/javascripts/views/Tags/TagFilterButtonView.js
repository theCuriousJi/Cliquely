OurLinks.Views.TagFilterButton = Backbone.View.extend({
  template: JST['tags/filter-button'],

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render);
    this.allButton = options.allButton;
    // if the button controls all tags, it starts off as shown, otherwise its hidden
    if(this.allButton) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
    this.listenTo(OurLinks.util, 'change:displayedTagIds', this.checkStatus);
  },

  events: {
    'click .toggle': 'show'
  },

  // currentlyHidden: function () {
  //   // this checks to see if a current tag is hidden
  //   // return (OurLinks.util.get('displayedTagIds').indexOf(this.model.id) === -1 || this.hidden)
  //   return this.hidden
  // },

  show: function (event) {
    // debugger
    if(this.hidden) {
      if(this.allButton){
        OurLinks.util.set('allTagsShown', true)
        OurLinks.util.replaceTagId(OurLinks.util.get("tagIds"));
      } else{
        // debugger;
        OurLinks.util.set('allTagsShown', false)
        OurLinks.util.replaceTagId([this.model.id]);

      }

      this.hidden = false;
    }
    // else {
    //   OurLinks.util.removeTagId(this.model.id);
    //   this.hidden = true;
    // }
    this.render();
  },

  checkStatus: function () {

    if(this.allButton && OurLinks.util.get('allTagsShown') ) {
        this.hidden = false;
        this.$('.toggle').prop('disabled', true);
    }

    else if((OurLinks.util.get('allTagsShown') && !this.allButton) ||
    OurLinks.util.get('displayedTagIds').indexOf(this.model.id) === -1 ) {
      this.hidden = true;
      this.$('.toggle').prop('disabled', false);
    }
    this.render()
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
      this.$('.toggle').prop('disabled', true);
    }
    return this;
  },

})
