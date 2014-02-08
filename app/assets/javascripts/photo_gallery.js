window.PhotoGallery = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
    var router = new PhotoGallery.Routers.Router({
      $rootEl: $("#content");
    });
  }
};

$(document).ready(function(){
  PhotoGallery.initialize();
});
