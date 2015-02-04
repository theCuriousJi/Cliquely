window.OurLinks = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new OurLinks.Routers.Router({$rootEl: $('#main')});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  // OurLinks.initialize();
});
