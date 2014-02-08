PhotoGallery.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },
  
  routes: {
    "": "fetchPhotos"
  },
  
  fetchPhotos: function () {
    $.ajax({
      type: "GET",
      url: "https://api.instagram.com"
    })
  },
  
  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render());
  }
});