OurLinks.Views.Navbar = Backbone.View.extend({
  template: JST['navbar'],

  render: function () {
    var content = this.template();
    $('nav').html(content);
    return this;
  }

})
