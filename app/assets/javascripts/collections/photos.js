PhotoGallery.Collections.Photos = Backbone.Collection.extend({
  url: "/photos",
  model: PhotoGallery.Models.Photo
});