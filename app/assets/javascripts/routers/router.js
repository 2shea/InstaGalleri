PhotoGallery.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "": "photosView"
  },
  
  photosView: function () {
    var view = new PhotoGallery.Views.PhotosView({
      collection: PhotoGallery.Collections.photos
    })
    this._swapView(view);
  },
  
  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render());
  }
});
