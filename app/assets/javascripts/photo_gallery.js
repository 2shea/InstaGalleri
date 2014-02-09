window.PhotoGallery = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    PhotoGallery.Collections.photos = new PhotoGallery.Collections.Photos();
    PhotoGallery.Collections.photos.fetch({
      success: function () {
        var router = new PhotoGallery.Routers.Router({
          $rootEl: $("#content")
        });
        Backbone.history.start();
      }
    })
  }
};

$(document).ready(function(){
  PhotoGallery.initialize();
});




