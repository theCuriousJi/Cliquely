window.OurLinks = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new OurLinks.Routers.Router({$rootEl: $('#main')});
    var view = new OurLinks.Views.Navbar({el: $('#main-nav')[0]})
    view.render()
    Backbone.history.start();
  }
};

$(document).ready(function(){
  // OurLinks.initialize();
});
