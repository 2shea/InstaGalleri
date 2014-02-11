window.PhotoGallery = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    PhotoGallery.Collections.photos = new PhotoGallery.Collections.Photos();
    PhotoGallery.Collections.photos.fetch({
      data: {"lat": "37.77", "lng":"-122.42"},
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




