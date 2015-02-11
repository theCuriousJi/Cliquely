window.OurLinks = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new OurLinks.Routers.Router({$rootEl: $('#main')});
    var view = new OurLinks.Views.Navbar()
    view.render()
    Backbone.history.start();
  }
};

$(document).ready(function(){
  // OurLinks.initialize();
});
